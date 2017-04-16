System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PlaylistService;
    return {
        setters:[],
        execute: function() {
            PlaylistService = (function () {
                function PlaylistService() {
                }
                PlaylistService.prototype.getPlaylists = function () {
                    return ["Coding", "UX Design", "Productivity"];
                };
                return PlaylistService;
            }());
            exports_1("PlaylistService", PlaylistService);
        }
    }
});
//# sourceMappingURL=playlist.service.js.map