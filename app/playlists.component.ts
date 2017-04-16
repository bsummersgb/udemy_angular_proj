import {Component} from 'angular2/core';
import {PlaylistService} from './playlist.service';

@Component({
  selector: 'playlists',
  template: `
    <h2>{{title}}</h2>
    <ul>
      <li *ngFor="#playlist of playlists">{{playlist}}</li>
    </ul>
    `,
    providers: [PlaylistService]
})
export class PlaylistsComponent {
  title = "Playlists";
  playlists;

  constructor(playlistService:PlaylistService) {
    this.playlists = playlistService.getPlaylists(); // sets the playlists property on the PlaylistsComponent class
  }

}
