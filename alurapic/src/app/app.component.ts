import { Component } from '@angular/core';

interface Photo {
  url: string;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public photos: Photo[] = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sultan_the_Barbary_Lion.jpg/440px-Sultan_the_Barbary_Lion.jpg",
      title: "Lion"
    },
    {
      url: "http://www.yellowkorner.com/dw/image/v2/AAVG_PRD/on/demandware.static/-/Sites-photo-catalog/default/dwe503b29c/NATURE/13/2913/3662657523805.jpg?sw=1160&sh=1160&sm=fit",
      title: "Lioness"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQknWshXdXJutxCT9n3-oQduBhqcJhZowuk1slffKNDgEwCgePm",
      title: "LionCub"
    }
  ]
}
