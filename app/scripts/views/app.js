/*global aawed, Backbone, JST*/

aawed.Views = aawed.Views || {};

(function () {
    'use strict';

    aawed.Views.AppView = Backbone.View.extend({
    	el: 'body',

    	events: {
    		

    	},

        w: 0,
        h: 0,

        init: function() {
        	_.bindAll(this,'render','resize');
        	this.resize();
        	$(window).resize(this.resize)
        },

        resize: function() {
        	console.log("resizing");
        	this.w = $(window).width();
        	this.h = $(window).height();

        	$('section:not(.unique)').width(this.w).height(this.h);

        	$('section.unique:not(.ignore)').height(function(){
                // $(this).css({'min-height':$(window).height()});
                if($(this).attr('data-height'))
            		return $(window).height() * $(this).attr('data-height');
                else return 'auto';
        	});
        }
    });

})();
