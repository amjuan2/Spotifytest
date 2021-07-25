import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

//services
import { SpotifyService } from "../../../services/spotify.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  value: string = ""
  seachready: boolean = false
  artisttoshow: any = []
  defimg = "http://3.bp.blogspot.com/_z64_2aLbzW0/TRoudKZGLKI/AAAAAAAAAOc/HsXqQKq_m7A/s1600/no_image.jpg"
  constructor(private _Spotifyservice: SpotifyService, private router: Router) {
    if (!sessionStorage.getItem("token")) {
      this._Spotifyservice.tokenRefreshURL()
    }
  }

  ngOnInit(): void {
    this.getartist();
  }

  getartist() {
    setTimeout(() => {
      this.seachready = false
    });
    let friendlyurl
    if (this.value) {
      friendlyurl = this.value.replace(" ", "+")
    }
    this._Spotifyservice.getallartist(this.value ? friendlyurl : "rock").then((data: any) => {
      setTimeout(() => {
        this.seachready = true
      });
      this.artisttoshow = data.artists.items
    })
  }

  getsongs(artistid) {
    this.router.navigateByUrl('/home/songs/'+artistid);
  }
}
