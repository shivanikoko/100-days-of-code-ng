import { Component, OnInit } from '@angular/core';
import { KokoService } from '../koko.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {

  public kokol = "";

  constructor(private _koServe : KokoService) { }

  ngOnInit() {
  }

  




}
