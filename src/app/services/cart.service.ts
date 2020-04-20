import { Injectable } from '@angular/core';
interface item {
    quantity: number;
    shirt: any;
}


@Injectable()

export class CartService {

    items: item[] = [];

    constructor() { }


    addToCart(shirt) {
        this.items.push(shirt);
    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }
}