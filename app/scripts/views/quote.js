/*global aawed, Backbone, JST*/

aawed.Views = aawed.Views || {};

(function () {
    'use strict';

    aawed.Views.QuoteView = Backbone.View.extend({

        template: JST['app/scripts/templates/quote.ejs'],

        init: function() {
        	_.bindAll(this,'render','update','resize')
        	this.quote = this.options.quote;
        	$(window).on('resize',this.resize);
        	$(window).on('scroll',this.update);
      		this.render();
      		this.resize();
        	$(this.el).css('z-index','-1');
        },

        resize: function() {

        },

        render: function() {
        	$(this.el).append(this.template({
        		quote: this.quote
        	}));
        },

        update: function() {
        	 this.rect = this.el.getBoundingClientRect();
        	 // console.log(this.rect.bottom)
            
            if (this.rect.top <= $(this.el).height() && this.rect.bottom >= 0) {
            	$(this.el).find('.quote').addClass('on');
            } else {
            	$(this.el).find('.quote').removeClass('on');
            }
        }

    });

})();
