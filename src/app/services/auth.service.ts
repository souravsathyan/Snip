import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import Iuser from '../models/user.models';
import {AngularFirestoreCollection} from '@angular/fire/compat/firestore';
// import {HttpClient} from '@angular/common/http'
import { Observable, delay, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private userCollection : AngularFirestoreCollection <Iuser>
  public isAuthenticated$:Observable<boolean>
  public isAuthenticatedWithDelay$:Observable<boolean>

  constructor(
    private auth: AngularFireAuth,
    private db : AngularFirestore,
  ) {
      this.userCollection = db.collection('users')
      this.isAuthenticated$ = auth.user.pipe(
        map(user=>!!user)
      )
      this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe(
        delay(1000)
      )
    }

  // #creating user
  public async createUser(userData:Iuser) {
    if(!userData.password){
      throw new Error("password not provided")
    }
    const userCred = await this.auth.createUserWithEmailAndPassword(
      userData.email,
      userData.password
    );
    if(!userCred.user){
      throw new Error("user cant be found")
    }
    await this.userCollection.doc(userCred.user.uid).set({
      name: userData.name,
      email: userData.email,
      age: userData.age,
      phoneNumber: userData.phoneNumber,
    });
  }

}
