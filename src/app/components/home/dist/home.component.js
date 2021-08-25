"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var AOS = require("aos");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(gs, cs, as, router) {
        this.gs = gs;
        this.cs = cs;
        this.as = as;
        this.router = router;
        this.goods = [];
        this.add = -1;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        AOS.init();
        this.GoodsUnsubscribe = this.gs.getAllGoods().subscribe(function (data) {
            _this.goods = data.map(function (element) {
                return {
                    id: element.payload.doc.id,
                    name: element.payload.doc.data()['name'],
                    price: element.payload.doc.data()['price'],
                    photoUrl: element.payload.doc.data()['photoUrl']
                };
            });
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.GoodsUnsubscribe.unsubscribe();
    };
    HomeComponent.prototype.addToCart = function (index) {
        this.add = +index;
    };
    // + to convert to number  
    HomeComponent.prototype.buy = function (amount) {
        var _this = this;
        var selectedGood = this.goods[this.add];
        var data = {
            id: selectedGood.id,
            name: selectedGood.name,
            amount: +amount,
            price: selectedGood.price
        };
        this.cs.addToCart(data).then(function () { return _this.add = -1; });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
