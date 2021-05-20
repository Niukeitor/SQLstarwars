"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
exports.infoPe = void 0;
var typeorm_1 = require("typeorm");
var favoritoPe_1 = require("./favoritoPe");
var infoPe = /** @class */ (function (_super) {
    __extends(infoPe, _super);
    function infoPe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], infoPe.prototype, "Nombre");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], infoPe.prototype, "Altura");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], infoPe.prototype, "Peso");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], infoPe.prototype, "ColordePelo");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], infoPe.prototype, "ColordePiel");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], infoPe.prototype, "ColordeOjos");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], infoPe.prototype, "A\u00F1odeNacimiento");
    __decorate([
        typeorm_1.ManyToMany(function () { return favoritoPe_1.favoritoPe; }, function (favoritoPe) { return favoritoPe.infoPe; }),
        __metadata("design:type", favoritoPe_1.favoritoPe)
    ], infoPe.prototype, "favoritoPe");
    infoPe = __decorate([
        typeorm_1.Entity()
    ], infoPe);
    return infoPe;
}(typeorm_1.BaseEntity));
exports.infoPe = infoPe;
