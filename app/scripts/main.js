/*global aawed, $*/


window.aawed = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    inst: {},
    quote: [],
    init: function () {
        'use strict';

        this.inst.app = new aawed.Views.AppView();
        
        this.inst.intro = new aawed.Views.IntroView({
            el: '.header'
        });

        this.inst.rsvp = new aawed.Views.RsvpView({
            el: '.rsvp-block'
        });

        this.inst.ayla = new aawed.Views.ContextronicView({
            el: '.ayla-story',
            template:  JST['app/scripts/templates/2-aylastory.ejs'],
            timer: 2000
        });

        this.inst.andrew = new aawed.Views.ContextronicView({
            el: '.andrew-story',
            template:  JST['app/scripts/templates/3-andrewstory.ejs'],
            timer: 2000
        });

        this.inst.engage = new aawed.Views.ContextronicView({
            el: '.engagement-story',
            template:  JST['app/scripts/templates/4-engagement.ejs'],
            timer: 2000
        });

        this.quote.push(new aawed.Views.QuoteView({
            el: '.quote-map',
            quote:"Details"
        }));

        this.inst.map = new aawed.Views.MapView({
            el: '.map'
        });

        _.each(this.quote,function(v,i) {
            v.init();
        });

        _.each(this.inst, function(v){
            v.init();
        })
    }
};

$(document).ready(function () {
    'use strict';
    aawed.init();
});
