System.register(['angular2/core', './playlist.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, playlist_service_1;
    var PlaylistsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (playlist_service_1_1) {
                playlist_service_1 = playlist_service_1_1;
            }],
        execute: function() {
            PlaylistsComponent = (function () {
                function PlaylistsComponent(playlistService) {
                    this.title = "Playlists";
                    this.playlists = playlistService.getPlaylists(); // sets the playlists property on the PlaylistsComponent class
                }
                PlaylistsComponent = __decorate([
                    core_1.Component({
                        selector: 'playlists',
                        template: "\n    <h2>{{title}}</h2>\n    <ul>\n      <li *ngFor=\"#playlist of playlists\">{{playlist}}</li>\n    </ul>\n    ",
                        providers: [playlist_service_1.PlaylistService]
                    }), 
                    __metadata('design:paramtypes', [playlist_service_1.PlaylistService])
                ], PlaylistsComponent);
                return PlaylistsComponent;
            }());
            exports_1("PlaylistsComponent", PlaylistsComponent);
        }
    }
});
//# sourceMappingURL=playlists.component.js.map