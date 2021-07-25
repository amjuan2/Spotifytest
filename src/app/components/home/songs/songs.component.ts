import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.sass']
})
export class SongsComponent implements OnInit {
  params$: any;
  artistid: string
  songstoshow: any;
  constructor(public activatedRoute: ActivatedRoute, private _Spotifyservice: SpotifyService) { }

  ngOnInit() {
    this.artistid = this.activatedRoute.snapshot.paramMap.get('id');
    this.getsongs()
  }

  getsongs() {
    this._Spotifyservice.getallartistsongs(this.artistid).then((data: any) => {
      this.songstoshow = data.tracks
    })
  }

}
