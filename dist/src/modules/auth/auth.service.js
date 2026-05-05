"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../../prisma/prisma.service");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    constructor(jwtService, prisma, usersService) {
        this.jwtService = jwtService;
        this.prisma = prisma;
        this.usersService = usersService;
        this.otpTtlMs = 60_000;
    }
    async authenticateWithGoogle(idToken) {
        const googleUser = this.verifyGoogleIdToken(idToken);
        const user = await this.usersService.findOrCreateByEmail(googleUser.email, googleUser.name);
        return {
            accessToken: await this.createJwt(user),
            user,
        };
    }
    async requestPhoneOtp(phone) {
        this.assertPhone(phone);
        const otp = await this.createOtp('phone', phone);
        return {
            phone,
            otp,
            expiresInSeconds: 60,
        };
    }
    async verifyPhoneOtp(phone, otp) {
        this.assertPhone(phone);
        await this.verifyOtp('phone', phone, otp);
        const user = await this.usersService.findOrCreateByPhone(phone);
        return {
            accessToken: await this.createJwt(user),
            user,
        };
    }
    async requestEmailOtp(email) {
        const otp = await this.createOtp('email', email.toLowerCase());
        return {
            email,
            otp,
            expiresInSeconds: 60,
        };
    }
    async verifyEmailOtp(email, otp) {
        const normalizedEmail = email.toLowerCase();
        await this.verifyOtp('email', normalizedEmail, otp);
        const user = await this.usersService.findOrCreateByEmail(normalizedEmail);
        return {
            accessToken: await this.createJwt(user),
            user,
        };
    }
    getCurrentUser(userId) {
        return this.usersService.findById(userId);
    }
    verifyGoogleIdToken(idToken) {
        if (!idToken) {
            throw new common_1.BadRequestException('Google ID token is required');
        }
        const email = idToken.includes('@')
            ? idToken
            : `${idToken.replace(/[^a-zA-Z0-9._-]/g, '')}@google.mock`;
        return {
            email,
            name: email.split('@')[0],
        };
    }
    async createJwt(user) {
        return this.jwtService.signAsync({
            sub: user.id,
            email: user.email,
            phone: user.phone,
        });
    }
    assertPhone(phone) {
        if (!phone) {
            throw new common_1.BadRequestException('Phone number is required');
        }
    }
    async createOtp(channel, target) {
        const code = this.generateOtp();
        await this.prisma.otpCode.create({
            data: {
                channel,
                target,
                code,
                expiresAt: new Date(Date.now() + this.otpTtlMs),
            },
        });
        return code;
    }
    async verifyOtp(channel, target, code) {
        const otpCode = await this.prisma.otpCode.findFirst({
            where: {
                channel,
                target,
                code,
                usedAt: null,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
        if (!otpCode || otpCode.expiresAt.getTime() < Date.now()) {
            throw new common_1.UnauthorizedException('Invalid or expired OTP');
        }
        await this.prisma.otpCode.update({
            where: {
                id: otpCode.id,
            },
            data: {
                usedAt: new Date(),
            },
        });
    }
    generateOtp() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        prisma_service_1.PrismaService,
        users_service_1.UsersService])
], AuthService);
//# sourceMappingURL=auth.service.js.map