import { Component, OnInit } from '@angular/core';
import { KokoService } from '../koko.service';
import { userData } from '../userdata';
import { by } from 'protractor';


@Component({
    selector: 'app-show-for',
    templateUrl: './show-for.component.html',
    styleUrls: ['./show-for.component.css']
})
export class ShowForComponent implements OnInit {

    constructor(private _kokoServe: KokoService) { }

    public users ;

    ngOnInit() {
        this._kokoServe.getUserData().subscribe(data => this.users = data);
    }

}

    