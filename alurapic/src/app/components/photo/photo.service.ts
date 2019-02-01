import { HttpClient } from '@angular/common/http';
import { PhotoModel } from './photo.model';
import { Injectable } from '@angular/core';

// Make our service injectable
// root: available in the root scope (any module will receive this module through injection)
@Injectable({ providedIn: 'root' })
export class PhotoService {
    constructor(private _http: HttpClient) { };

    listFromUser(username: string) {
        return this._http.get<PhotoModel[]>(`http://localhost:3000/${username}/photos`);
    };
}