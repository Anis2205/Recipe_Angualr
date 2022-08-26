import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

export interface auth {

    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    //to indicate optional we put ? mark
    registered?:boolean

}

@Injectable({
    providedIn: 'root'
})

export class Authservice {
    constructor(private http: HttpClient) {

    }
    signup(email: string, password: string) {
        return this.http.post<auth>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDnidf1CXg3qgwCal2PNBfoVY2XtvXX_C4",
            {
                email,
                password,
                returnSecureToken: true
            }
            ).pipe(
                catchError(this.handlingerror))
            }

            signin(email:string,password:string){
                return this.http.post<auth>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDnidf1CXg3qgwCal2PNBfoVY2XtvXX_C4',
                {
                    email,
                    password,
                    returnSecureToken:true
                }).pipe(
                    catchError(this.handlingerror))
            }

            private handlingerror(errorres:HttpErrorResponse){
                let errormessage= "An unknown error ocurred!"

                if(!errorres.error || !errorres.error.error){
                    return throwError(errormessage)
                }
                switch(errorres.error.error.message)

                {
                 case 'EMAIL_EXISTS':
                  errormessage = "email already exist!"
                  break
                  case "EMAIL_NOT_FOUND":
                  errormessage = "Invalid email!"
                  break
                  case "INVALID_PASSWORD":
                  errormessage = "Invalid data!"

                  break

               }
               return throwError(errormessage)
            }
}
