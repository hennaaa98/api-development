import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable()

export class CustomerService {
    baseUrl = 'http://localhost:3000/customer';


    constructor(private http: HttpClient) { }
    getAll() {
        return this.http.get(this.baseUrl);
    }

    getById(id:number): Observable<Customer> {
        return this.http.get<Customer>(`${this.baseUrl}/${id}`);
    }

    create(customer: Customer) {
        return this.http.post(this.baseUrl, customer, httpOptions);
    }

    update(id: number, customer: Customer) {
        return this.http.put(`${this.baseUrl}/edit/${id}`, customer, httpOptions);
    }

    delete(id: number) {
        return this.http.delete(`${this.baseUrl}/delete/${id}`, httpOptions);
    }

}