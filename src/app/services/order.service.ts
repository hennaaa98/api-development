import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable()

export class OrderService {

    baseUrl = 'http://localhost:3000/orders';

    constructor(private http: HttpClient) { }

    create(data) {
        return this.http.post(this.baseUrl, data, httpOptions);
    }

    delete(id) {
        return this.http.delete(`${this.baseUrl}/delete/${id}`, httpOptions);
    }

    findAll() {
        return this.http.get(this.baseUrl);
    }

    findCustomerOrders(custumerId) {
        return this.http.get(`${this.baseUrl}/${custumerId}`);
    }

    findOne(id) {
        return this.http.get(`${this.baseUrl}/order/${id}`);
    }



    update(id, data) {
        return this.http.put(`${this.baseUrl}/${id}`, data, httpOptions);
    }



}