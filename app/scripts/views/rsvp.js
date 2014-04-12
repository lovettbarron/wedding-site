/*global aawed, Backbone, JST*/

aawed.Views = aawed.Views || {};

(function () {
    'use strict';

    aawed.Views.RsvpView = Backbone.View.extend({

        template: JST['app/scripts/templates/rsvp.ejs']

    });

})();
