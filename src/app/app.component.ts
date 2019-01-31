import { Component, ViewEncapsulation } from '@angular/core';
import { DataService } from './data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DataService]
})
export class AppComponent {

  user: FormGroup;
  constructor(fb: FormBuilder){
      this.user = fb.group({
          'name': [null, Validators.required],
          'email': ['test@jeasyui.com', Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')],
          'hero': null,
          'accept': false
      });
  }

  submitForm(value: any) {
      alert(JSON.stringify(value))
  }

  heroes = [
      {value: 11, text: 'Mr. Nice'},
      {value: 12, text: 'Narco'},
      {value: 13, text: 'Bombasto'},
      {value: 14, text: 'Celeritas'},
      {value: 15, text: 'Magneta'},
      {value: 16, text: 'RubberMan'},
      {value: 17, text: 'Dynama'},
      {value: 18, text: 'Dr IQ'},
      {value: 19, text: 'Magma'},
      {value: 20, text: 'Tornado'}
  ];









  // total: number = 0;
  // pageNumber = 1;
  // pageSize = 20;
  // rowHeight = 28;
  // data = [];

  // constructor(public dataService: DataService){}

  // ngAfterViewInit() {
  //     this.loadPage(this.pageNumber, this.pageSize);
  // }

  // onPageChange(event){
  //     this.loadPage(event.pageNumber, event.pageSize);
  // }

  // loadPage(pageNumber: number, pageSize: number) {
  //     this.dataService.getData(pageNumber, pageSize).subscribe((data) => {
  //         this.total = data.total;
  //         this.pageNumber = data.pageNumber;
  //         this.data = data.rows;
  //     });
  // }




  menus = [{
    text: 'Forms',
    iconCls: 'fa fa-wpforms',
    state: 'open',
    children: [{
      text: 'Form Element'
    }, {
      text: 'Wizard'
    }, {
      text: 'File Upload'
    }]
  }, {
    text: 'Mail',
    iconCls: 'fa fa-at',
    selected: true,
    children: [{
      text: 'Inbox'
    }, {
      text: 'Sent'
    }, {
      text: 'Trash',
      children: [{
        text: 'Item1'
      }, {
        text: 'Item2'
      }]
    }]
  }, {
    text: 'Layout',
    iconCls: 'fa fa-table',
    children: [{
      text: 'Panel'
    }, {
      text: 'Accordion'
    }, {
      text: 'Tabs'
    }]
  }];

  selectedMenu = null;

  onItemClick(item) {
    this.selectedMenu = item;
  }





  //   data = [
  //     {"code":"FI-SW-01","name":"Koi","unitcost":10.00,"status":true,"listprice":36.50,"attr":"Large","itemid":"EST-1"},
  //     {"code":"K9-DL-01","name":"Dalmation","unitcost":12.00,"status":true,"listprice":18.50,"attr":"Spotted Adult Female","itemid":"EST-10"},
  //     {"code":"RP-SN-01","name":"Rattlesnake","unitcost":12.00,"status":true,"listprice":38.50,"attr":"Venomless","itemid":"EST-11"},
  //     {"code":"RP-SN-01","name":"Rattlesnake","unitcost":12.00,"status":true,"listprice":26.50,"attr":"Rattleless","itemid":"EST-12"},
  //     {"code":"RP-LI-02","name":"Iguana","unitcost":12.00,"status":true,"listprice":35.50,"attr":"Green Adult","itemid":"EST-13"},
  //     {"code":"FL-DSH-01","name":"Manx","unitcost":12.00,"status":true,"listprice":158.50,"attr":"Tailless","itemid":"EST-14"},
  //     {"code":"FL-DSH-01","name":"Manx","unitcost":12.00,"status":true,"listprice":83.50,"attr":"With tail","itemid":"EST-15"},
  //     {"code":"FL-DLH-02","name":"Persian","unitcost":12.00,"status":true,"listprice":23.50,"attr":"Adult Female","itemid":"EST-16"},
  //     {"code":"FL-DLH-02","name":"Persian","unitcost":12.00,"status":true,"listprice":89.50,"attr":"Adult Male","itemid":"EST-17"},
  //     {"code":"AV-CB-01","name":"Amazon Parrot","unitcost":92.00,"status":true,"listprice":63.50,"attr":"Adult Male","itemid":"EST-18"}
  // ];
  // footerData = [
  //   {"name":"Average:","unitcost":19.80,"listprice":60.40},
  //   {"name":"Total:","unitcost":198.00,"listprice":604.00}
  // ];

}
