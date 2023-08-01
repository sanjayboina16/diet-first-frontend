import { Component } from '@angular/core';
import{Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName:string="";
  password:string="";
constructor(private router:Router){}
loginSubmit(){
  console.log("button clicked");
  console.log(this.userName);
  console.log(this.password);
  let res
  
  this.router.navigate(["/home"]);
}
}
