import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
name='';
email='';
message='';
selectedObj: any;
selectedIndex: any;
loginData :any = [];
constructor(){}

submit(){
let loginObj={
  name:this.name,
  email:this.email,
  message:this.message
}
this.loginData.push(loginObj)
console.log(this.loginData,"Hi")
alert(JSON.stringify(this.loginData))
this.clear();
}

// update(){
//   this.loginData[this.selectIndex].name = this.name;
//   this.loginData[this.selectIndex].email = this.email;
//   this.loginData[this.selectIndex].message = this.message;
// console.log(this.loginData,"Hi")
// }

update(){
  this.loginData[this.selectedIndex].email = this.email;
  this.loginData[this.selectedIndex].name = this.name;
  this.loginData[this.selectedIndex].message = this.message;

   console.log('this is the updated row', this.email);
   console.log('this is the updated row', this.name);
   console.log('this is the updated row', this.message);
   this.clear();
 }

edit(index: any, editObj:any){
  this.selectedIndex = index;
  this.selectedObj = editObj;
  
  this.name = editObj.name,
  this.email = editObj.email,
  this.message = editObj.message,
  
  console.log('this is edit row',index)
    }

    
  delete(index:any){
    this.loginData.splice(index,1)
    console.log("this row is delete",index)
  }
clear(){
    this.name = '',
    this.email = '',
    this.message = ''

  }
  Alert(){
    alert("hi this is alert")
  }
}
