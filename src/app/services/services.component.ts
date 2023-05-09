import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
name="";
email="";
number="";
address="";
city="";

data: any=[];

constructor(){};

submit(){
  let dataObj={
    name:this.name,
    email:this.email,
    number:this.number,
    address:this.address,
    city:this.city,
  }
  this.data.push(dataObj);
  console.log(this.data,"hi")
}
}
