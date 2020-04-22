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
        const item = {
            quantity: 1,
            shirt
        }

        const dublic = this.items.filter(el => el.shirt.id == shirt.id);
        if (dublic.length > 0) {
            const index = this.items.findIndex(el => el.shirt.id == shirt.id);
            this.items[index].quantity++;
            console.log('Item is in cart');
        } else {
            this.items.push(item);
        }

    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }

    getTotalPrice() {
        let totaltPrice = 0;
        this.items.forEach(el => {
            totaltPrice += el.quantity * el.shirt.Price;
        });

        return totaltPrice;
    }
}