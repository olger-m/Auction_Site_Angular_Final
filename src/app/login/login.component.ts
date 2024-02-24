import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
gotoSignUp() {
this.router.navigate(['createuser'])}


  loginForm:FormGroup

  user?:User

  constructor(private userService: UserService,private router: Router) {}



  ngOnInit(): void {
    this.initLoginForm()
  }

  initLoginForm() {

    this.loginForm = new FormGroup({
      username:new FormControl("",{validators:[Validators.required]}),
      password:new FormControl("",{validators:[Validators.required]})
    })

  }

  loginUser(values:any){

    this.userService.loginUser(values.username,values.password).subscribe({
      next:(response) => {

        this.user = response

        this.userService.saveUserOnStorage(this.user)
        if(this.userService.isUserPresent()){
          this.router.navigate(['userprofile'])
        }


      },
      error:(err) => {
        console.log("error ", err);

      }
    })
  }



}

