import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Users } from './users';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  objUser : Users
  constructor(private http:HttpClient,private route:Router){
    this.objUser=new Users();
  }

  onLogin(){
    const header=new HttpHeaders({
      'Content-Type':'application/json'
    });
    this.http.post<any>('http://localhost:8080/login',this.objUser,{headers:header}).subscribe((res:any)=>{
      if(res.result){
        this.route.navigate(['/profile']);

      }
      else{
        alert("invalid email/password");
      }
    });
  }
}

