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
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    constructor(jwtService, usersService) {
        this.jwtService = jwtService;
        this.usersService = usersService;
        this.otpStore = new Map();
    }
    async authenticateWithGoogle(idToken) {
        const googleUser = this.verifyGoogleIdToken(idToken);
        const user = await this.usersService.findOrCreateByEmail(googleUser.email, googleUser.name);
        return {
            accessToken: await this.createJwt(user),
            user,
        };
    }
    requestPhoneOtp(phone) {
        this.assertPhone(phone);
        const otp = '123456';
        this.otpStore.set(phone, otp);
        return {
            phone,
            otp,
        };
    }
    async verifyPhoneOtp(phone, otp) {
        this.assertPhone(phone);
        if (this.otpStore.get(phone) !== otp) {
            throw new common_1.UnauthorizedException('Invalid OTP');
        }
        this.otpStore.delete(phone);
        const user = await this.usersService.findOrCreateByPhone(phone);
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
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        users_service_1.UsersService])
], AuthService);
//# sourceMappingURL=auth.service.js.map