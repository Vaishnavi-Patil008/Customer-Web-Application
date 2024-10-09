import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../Models/Customer';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  objCustomer : Customer = new Customer();
  @Input() EditID:number =0;

  constructor(private http: HttpClient){
   // this.EditID=0;
  }

  ngOnInit(){

  }

  save(): void{
    debugger;
    if(this.EditID == 0){
      this.http.post("https://localhost:44346/api/Customer/add",this.objCustomer).subscribe(
      (data) => {
        alert('Record Saved Succesfully');
      })
    }
  }
}
