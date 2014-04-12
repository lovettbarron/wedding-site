/*global aawed, Backbone, JST*/

aawed.Views = aawed.Views || {};

(function () {
    'use strict';

    aawed.Views.MapView = Backbone.View.extend({

        template: JST['app/scripts/templates/map.ejs'],

        events: {
        	'click .map-cover': 'uncover',
        	'click .map-on': 'cover'
        },

        init: function() {
        	_.bindAll(this,'init','resize','render');
        	$(window).on('resize',this.resize);
        	this.render();
        	this.resize();
        },

        resize: function() {
        	$(this.el).find('iframe').attr('height',$(this.el).height()+'px');
        },

        render: function() {
        	$(this.el).append(this.template());
        },
        
        uncover: function() {
        	$(this.el).find('.map-cover').fadeOut();
        	$(this.el).find('.map-on').fadeIn().height();
        },

        cover: function() {
        	$(this.el).find('.map-cover').fadeIn();
        	$(this.el).find('.map-on').fadeOut();
        }

    });

})();
