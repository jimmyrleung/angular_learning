import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PhotoModel, PhotoService } from '../photo/index';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  public photos: PhotoModel[] = [];
  private _username: string = "";

  constructor(
    private _photoService: PhotoService,
    private _activatedRoute: ActivatedRoute
  ) {
    this._username = _activatedRoute.snapshot.params.username;
  };

  ngOnInit(): void {
    this._photoService.listFromUser(this._username)
      .subscribe((res) => this.photos = res, (err) => console.log(err));
  }
}
