import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService} from "@abacritt/angularx-social-login";
import {GoogleService} from "./google.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  googleRes: any
  facebookRes: any
  out: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private socialAuthService: SocialAuthService,
    private googleService: GoogleService
  ) { }

  ngOnInit(): void {
    /* Work in proggress */
    // @ts-ignore
    document.getElementById('see-button').addEventListener('click', evt => {
      // @ts-ignore
      document.getElementById('blur-work').style.display = 'none';
    })
    /* Work in proggress */
  }

  signInHandler() : void{
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      value => {
        console.log(value)
        this.out = true
        this.googleRes = JSON.stringify(value)
      }
    )
  }

  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      value  => {
        this.out = true
        console.log(value)
        this.facebookRes = JSON.stringify(value)
    }
    );
  }


}
