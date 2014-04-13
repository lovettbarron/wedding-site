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
        
        this.inst.test = new aawed.Views.ContextronicView({
            el: '.intro',
            template:  JST['app/scripts/templates/1-intro.ejs'],
            timer: 2000
        });

        this.inst.map = new aawed.Views.MapView({
            el: '.map'
        });

        this.inst.test2 = new aawed.Views.ContextronicView({
            el: '.intro2',
            template:  JST['app/scripts/templates/1-intro.ejs'],
            // timer: 2000
        });


        this.quote.push(new aawed.Views.QuoteView({
            el: '.quote1',
            quote:"Before long, this respect led to love for his vivacious hair, playful grin, and generous heart. "
        }));
        _.each(this.quote,function(v,i) {
            v.init();
        });
        this.inst.app.init();
        this.inst.test.init();
        this.inst.test2.init();
        this.inst.map.init();
    }
};

$(document).ready(function () {
    'use strict';
    aawed.init();
});
