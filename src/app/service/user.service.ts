import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserInfoDto } from '../model/UserInfoDto';
import { Auction } from '../model/Auction';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

private apiLink = 'http://localhost:8080/biddingapp/v1/';

  constructor(private http:HttpClient) { }

  loginUser(userName:string,password:string):Observable<User>{    


    let url = this.apiLink + "login"

    let formData = new FormData()
    formData.append('username', userName)
    formData.append('password', password)


    return this.http.post<User>(url, formData)
  }

  
  registerUser(formData:any):Observable<User> {
    let url = this.apiLink + "register"

    // let formData = new FormData()
    // formData.append('username', username)
    // formData.append('password', password)
    // formData.append('email', email)
    // formData.append('role', role)

    return this.http.post<User>(url, formData)  }



  saveUserOnStorage(user:User){

    sessionStorage.setItem("user", JSON.stringify(user))
  }

  getUserFromStorage():User | null{

    return sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")):null
  }

  isUserPresent(){
    return sessionStorage.getItem('user') !== null
  }

  isUserAdmin(): boolean{


    return this.getUserFromStorage() ? this.getUserFromStorage().role === "ROLE_ADMIN":false
  }

  getProfileInfo():Observable<UserInfoDto>{

    let url = this.apiLink + "profile"

    return this.http.get<UserInfoDto>(url)

  }

  logOutUser(){

    let url = this.apiLink + "logout"

    return this.http.post(url,{})


  }

  createAuction(value: any,category:string):Observable<Auction> {
    let url  = this.apiLink + 'createauction'

    const params =new HttpParams().set('category',category)
    const options = {params:params}

    return this.http.post<Auction>(url,value,options)
  }



  getUser(id: number): Observable<any> {
    return this.http.get(`${this.apiLink
    }/${id}`);
  }
  getprogile(): Observable<any> {
    return this.http.get(`http://localhost:8080/biddingapp/v1/admin/auction/all`);
  }

  getUserByEmail(email:string): Observable<any> {
    return this.http.get(`${this.apiLink
    }/${email}/get`);
  }

  createUser(user: User): Observable<Object> {
    return this.http.post(`${this.apiLink
    }`, user);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.apiLink
    }/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiLink
    }/${id}`, { responseType: 'text' });
  }

  getUserList(): Observable<any> {
    return this.http.get(`${this.apiLink
    }`);
  }
  getUserById(user_id:number): Observable<any> {
    return this.http.get(`${this.apiLink
    }/${user_id}/get`);
  }

}

