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
exports.favoritoPe = void 0;
var typeorm_1 = require("typeorm");
var usuario_1 = require("./usuario");
var infoPe_1 = require("./infoPe");
var favoritoPe = /** @class */ (function (_super) {
    __extends(favoritoPe, _super);
    function favoritoPe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", String)
    ], favoritoPe.prototype, "id");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], favoritoPe.prototype, "Personajes");
    __decorate([
        typeorm_1.ManyToOne(function () { return usuario_1.usuario; }, function (usuario) { return usuario.favoritoPe; }),
        __metadata("design:type", usuario_1.usuario)
    ], favoritoPe.prototype, "usuario");
    __decorate([
        typeorm_1.ManyToMany(function () { return infoPe_1.infoPe; }, function (infoPe) { return infoPe.favoritoPe; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], favoritoPe.prototype, "infoPe");
    favoritoPe = __decorate([
        typeorm_1.Entity()
    ], favoritoPe);
    return favoritoPe;
}(typeorm_1.BaseEntity));
exports.favoritoPe = favoritoPe;
