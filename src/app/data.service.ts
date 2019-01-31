import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(pageNumber: number, pageSize: number) {
    let total = 100000;
    let data = [];
    let start = (pageNumber - 1) * pageSize;
    for (let i = start + 1; i <= start + pageSize; i++) {
      let amount = Math.floor(Math.random() * 1000);
      let price = Math.floor(Math.random() * 1000);
      data.push({
        inv: 'Inv No ' + i,
        name: 'Name ' + i,
        amount: amount,
        price: price,
        cost: amount * price,
        note: 'Note ' + i
      });
    }
    return Observable.of({
      total: total,
      pageNumber: pageNumber,
      pageSize: pageSize,
      rows: data
    });
  }
}
