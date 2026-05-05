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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const auth_service_1 = require("./auth.service");
const google_auth_dto_1 = require("./dto/google-auth.dto");
const request_email_otp_dto_1 = require("./dto/request-email-otp.dto");
const request_otp_dto_1 = require("./dto/request-otp.dto");
const verify_email_otp_dto_1 = require("./dto/verify-email-otp.dto");
const verify_otp_dto_1 = require("./dto/verify-otp.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    googleAuth(googleAuthDto) {
        return this.authService.authenticateWithGoogle(googleAuthDto.idToken);
    }
    requestPhoneOtp(requestOtpDto) {
        return this.authService.requestPhoneOtp(requestOtpDto.phone);
    }
    verifyPhoneOtp(verifyOtpDto) {
        return this.authService.verifyPhoneOtp(verifyOtpDto.phone, verifyOtpDto.otp);
    }
    requestEmailOtp(requestEmailOtpDto) {
        return this.authService.requestEmailOtp(requestEmailOtpDto.email);
    }
    verifyEmailOtp(verifyEmailOtpDto) {
        return this.authService.verifyEmailOtp(verifyEmailOtpDto.email, verifyEmailOtpDto.otp);
    }
    me(user) {
        return this.authService.getCurrentUser(user.userId);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('google'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [google_auth_dto_1.GoogleAuthDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "googleAuth", null);
__decorate([
    (0, common_1.Post)('phone/request-otp'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_otp_dto_1.RequestOtpDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "requestPhoneOtp", null);
__decorate([
    (0, common_1.Post)('phone/verify-otp'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_otp_dto_1.VerifyOtpDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "verifyPhoneOtp", null);
__decorate([
    (0, common_1.Post)('email/request-otp'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_email_otp_dto_1.RequestEmailOtpDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "requestEmailOtp", null);
__decorate([
    (0, common_1.Post)('email/verify-otp'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_email_otp_dto_1.VerifyEmailOtpDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "verifyEmailOtp", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "me", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map