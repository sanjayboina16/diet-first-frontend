import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {
  users:any;
  constructor(private http:HttpClient){}
  ngOnInit(){
    let res=this.http.get("https://jsonplaceholder.typicode.com/users");
    res.subscribe(      
        resData=>this.users= resData
    );
  }

}
