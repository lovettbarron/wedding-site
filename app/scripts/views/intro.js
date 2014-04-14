/*global aawed, Backbone, JST*/

aawed.Views = aawed.Views || {};

(function () {
    'use strict';

    aawed.Views.IntroView = Backbone.View.extend({

        template: JST['app/scripts/templates/intro.ejs'],

        init: function() {
        	$(window).on('resize',this.resize)
        	this.render();
        	this.resize();
                this.resize();
        },

        render: function() {
        	$(this.el).append(this.template());
        },

        resize: function() {

            var t = $(this.el).find('.background > img');
            var tw = 2667;
            var th = 2000;
            var ta = tw / th;
            var w = $(window);
            var wa = w.width() / w.height();
            console.log(ta,' >= ',wa);
            if(ta >= wa) {
            	// console.log('trigger height')
            	$(this.el).find('.background img').css({
            		position:'absolute',
            		right: 0,
            		marginRight: '-35%',
            		width: 'auto',
            		height: '100%'
            	})
            } else {
            	// console.log('trigger width')
            	$(this.el).find('.background img').	css({
            		position: 'inherit',
            		right: 'auto',
            		marginRight: '0',
            		width: '100%',
            		height: 'auto'
            	})
            }
        }

    });
})();
