import { Component, OnInit } from '@angular/core';
import { Moodformdata } from "../moodformdata";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {

  public kokol = "";

  moodModel = new Moodformdata('koko','Happy','Confess','nothing to say',true,false);

  constructor() { }

  ngOnInit() {


  }

  




}
