import { Component, OnInit } from '@angular/core';
import { PhotoModel, PhotoService } from '../photo/index';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  public photos: PhotoModel[] = [];

  constructor(private _photoService: PhotoService) { };

  ngOnInit(): void {
    this._photoService.listFromUser('flavio')
      .subscribe((res) => this.photos = res, (err) => console.log(err));
  }
}
