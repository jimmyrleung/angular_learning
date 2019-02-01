import { Component, OnInit } from '@angular/core';
import { PhotoModel, PhotoService } from './components/photo/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public photos: PhotoModel[] = [];

  constructor(private _photoService: PhotoService) { };

  ngOnInit(): void {
    this._photoService.listFromUser('flavio')
      .subscribe((res) => this.photos = res, (err) => console.log(err));
  }


}
