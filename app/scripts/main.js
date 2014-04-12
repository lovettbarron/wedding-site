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
            // timer: 2000
        });

        this.inst.map = new aawed.Views.MapView({
            el: '.map'
        });

        this.quote.push(new aawed.Views.QuoteView({
            el: '.quote1',
            quote:"Holy shit, they're getting married"
        }));

        this.inst.app.init();
        this.inst.test.init();
        this.inst.map.init();
        _.each(this.quote,function(v,i) {
            v.init();
        });
    }
};

$(document).ready(function () {
    'use strict';
    aawed.init();
});
