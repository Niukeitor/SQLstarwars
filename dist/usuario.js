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
exports.usuario = void 0;
var typeorm_1 = require("typeorm");
var favoritoPl_1 = require("./favoritoPl");
var favoritoPe_1 = require("./favoritoPe");
var usuario = /** @class */ (function (_super) {
    __extends(usuario, _super);
    function usuario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", String)
    ], usuario.prototype, "usuario");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], usuario.prototype, "email");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], usuario.prototype, "contrase\u00F1a");
    __decorate([
        typeorm_1.OneToMany(function () { return favoritoPl_1.favoritoPl; }, function (favoritoPl) { return favoritoPl.usuario; }),
        __metadata("design:type", favoritoPl_1.favoritoPl)
    ], usuario.prototype, "favoritoPl");
    __decorate([
        typeorm_1.OneToMany(function () { return favoritoPe_1.favoritoPe; }, function (favoritoPe) { return favoritoPe.usuario; }),
        __metadata("design:type", favoritoPe_1.favoritoPe)
    ], usuario.prototype, "favoritoPe");
    usuario = __decorate([
        typeorm_1.Entity()
    ], usuario);
    return usuario;
}(typeorm_1.BaseEntity));
exports.usuario = usuario;
