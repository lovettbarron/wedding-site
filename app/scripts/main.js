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

        this.inst.test = new aawed.Views.ContextronicView({
            el: '.intro',
            template:  JST['app/scripts/templates/1-intro.ejs'],
            timer: 2000
        });

        this.quote.push(new aawed.Views.QuoteView({
            el: '.quote1',
            quote:"Ayla's Story"
        }));

        this.inst.test2 = new aawed.Views.ContextronicView({
            el: '.intro2',
            template:  JST['app/scripts/templates/1-intro.ejs'],
            timer: 2000
        });

        this.inst.test3 = new aawed.Views.ContextronicView({
            el: '.intro3',
            template:  JST['app/scripts/templates/1-intro.ejs'],
            timer: 2000
        });

        this.quote.push(new aawed.Views.QuoteView({
            el: '.quote-map',
            quote:"We want to invite you to Invermere"
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
