import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor,MatListModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('localapis');
  globaldata:any=[];
  productname:any;
  productprice:any;
  userid:any;

  constructor(private http:HttpClient)
  {
    this.http.get('https://webapis2407d-anf3aqfkedhwg4gz.canadacentral-01.azurewebsites.net/api/CutomAPI/productsandusers').subscribe((data)=>{
      
      this.globaldata = data
      console.log(this.globaldata)
      console.log(this.globaldata[1].name)
    })
  }
   abc()
   {
    this.http.post<any>('https://webapis2407d-anf3aqfkedhwg4gz.canadacentral-01.azurewebsites.net/api/CutomAPI/addproducts',
      {name:this.productname,price:this.productprice,userId:this.userid,users:{id:this.userid,name:"",email:"",password:""}}).subscribe((response)=>{
      console.log(response)
    })
   }
  
}
