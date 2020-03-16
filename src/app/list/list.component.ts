import { Component, OnInit } from '@angular/core';
import { DemoHttpService } from '../demohttp.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  brews: Object;

  constructor(private _http: DemoHttpService) { }

  ngOnInit() {
    this._http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    });
  }

}
