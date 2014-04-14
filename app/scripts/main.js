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
            quote:"details"
        }));

        this.inst.venue = new aawed.Views.ContextronicView({
            el: '.venue',
            template:  JST['app/scripts/templates/5-venue.ejs'],
            timer: 2000
        });

        this.inst.map = new aawed.Views.MapView({
            el: '.map'
        });


        this.inst.schedule = new aawed.Views.ContextronicView({
            el: '.schedule',
            template:  JST['app/scripts/templates/6-schedule.ejs'],
            timer: 2000
        });

        this.inst.wear = new aawed.Views.ContextronicView({
            el: '.wear',
            template:  JST['app/scripts/templates/7-wear.ejs'],
            timer: 2000
        });


        this.inst.gifts = new aawed.Views.ContextronicView({
            el: '.gifts',
            template:  JST['app/scripts/templates/8-gifts.ejs'],
            timer: 2000
        });


        this.inst.accom = new aawed.Views.ContextronicView({
            el: '.accom',
            template:  JST['app/scripts/templates/9-accom.ejs'],
            timer: 2000
        });


        this.inst.flights = new aawed.Views.ContextronicView({
            el: '.flights',
            template:  JST['app/scripts/templates/10-flights.ejs'],
            timer: 2000
        });


        this.inst.questions = new aawed.Views.ContextronicView({
            el: '.questions',
            template:  JST['app/scripts/templates/11-questions.ejs'],
            timer: 2000
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
