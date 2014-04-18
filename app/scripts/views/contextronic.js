/*global aawed, Backbone, JST*/

aawed.Views = aawed.Views || {};

(function () {
    'use strict';

    aawed.Views.ContextronicView = Backbone.View.extend({

        template: JST['app/scripts/templates/contextronic.ejs'],

        init: function() {
        	this.template = this.options.template || null;
            this.timer = this.options.timer ? setInterval(this.cycle.bind(this),this.options.timer) : null;
        	this.position = 0;
        	this.current = 0;
        	this.sections = [];
        	this.mobile = false;
        	_.bindAll(this, 'update','render','resize','cycle');

        	$(window).on("scroll", this.update);
            $(window).on("resize", this.resize);

            this.render();
            this.resize();
        },

        resize: function() {
        	var t = $(window);
        	var _this = this;

        	console.log(t.width())
        	if(t.width() < 768) this.mobile = true;
        	else this.mobile = false;

        	this.mobile = false;

        	_this.sections = [];
			$(this.el).find('.contextronic').each(function(key,val) {
	            	// console.log($(val));
	            	var r = function() { return $(val)[0].getBoundingClientRect();
		            	};
	            	var i = $(val).find('img').attr('src');

	            	_this.sections.push({
	            		rect: r,
	            		img: i
	            	});
	            });

			$(this.el).find('.current, .buffer').height(t.height());

			$(this.el).css({
				'min-height': t.height()*.8}).children().css({'min-height': $(this.el).find('.text').height()});


			$(this.el).find('.current').html("<img src=" +_this.sections[_this.current].img + " style='z-index:0'>");

            var t=0,i=0;
            $(this.el).find('.contextronic').each(function() { 
                t+=$(this).find('img').width();
            });
            t=t/i;

            $(this.el).find('.image').height($(this.el).height());
        },

        render: function() {
        	$(this.el).append(this.template())
        },

        cycle: function(i,v) {
            var _this = this;
            if(typeof i=='undefined') i=this.current+1;
            i=i%this.sections.length;
            if(typeof v=='undefined') v=this.sections[i];

            _this.current = i;

            var c = $(_this.el).find('.current');
            var b = $(_this.el).find('.buffer');

            // Add the new background to buffer
            b.html("<img src=" + v.img + " style='z-index:0'>");
            // b.find('img').css('marginLeft',function(){return -$(this).width()/4});

            c.fadeOut(400,function() {

                // The current div is faded out and switched to buffer mode.
                c.html('').removeClass('current').addClass('buffer').show();

                // This should be visible now
                b.removeClass('buffer').addClass('current');
            });
        },

        update: function() {
			var _this = this;
			this.rect = this.el.getBoundingClientRect();
			if(this.mobile) return;
			//console.log('not detecting mobile')
            if(!this.timer) {
                this.superHack();
            	_.each(this.sections, function(v,i) {
            		if(_this.current === i) return;
                    // console.log(i,"v.rect().top",v.rect().top);
                    // console.log(i,"v.rect().bottom",v.rect().bottom);
                    // console.log(i,'height',$(window).height());
    				if (v.rect().top <= $(window).height() && v.rect().bottom >= $(window).height()) {
                            console.log('Triggering', i)
                           _this.cycle(i,v);
            		}
            	})
            }
        if($(this.el).height() >= $(window).height()) {
	        if (this.rect.top <= 0 && this.rect.bottom >= $(window).height()) {
	            // if(!this.timer) console.log('Contextronic on');
	        		$(this.el).find('.context').addClass('on').removeClass('bottom');
	            } else if (this.rect.bottom <= $(window).height() && this.rect.bottom >= 0) {                // if(!this.timer)console.log('Contextronic bottom');
	            	$(this.el).find('.context').addClass('bottom').removeClass('on');
	            } else {
	            	$(this.el).find('.context').removeClass('on bottom');
	            }
	        }
        },

        superHack: function() {
            // var sel = $(this.el).find('.current')
            // sel.css('position','auto');
            // sel.height();
            // sel.css('position','fixed');
        }
    });

})();
