(function($){
    $.strobe = function(el, options){

        var base = this;

        base.$el = $(el);
        base.el = el;

        base.$el.data("strobe", base);
        
        base.init = function(){
            if( typeof( times ) === "undefined" || times === null ) times = 3;
            if( typeof( speed ) === "undefined" || speed === null ) speed = 200;
            
            base.times = times;
            base.speed = speed;
            
            base.options = $.extend({},$.strobe.defaultOptions, options);
				var plays = 0;
            var strobing = setInterval(function() {
					base.$el.fadeOut(base.options.speed, function() { base.$el.fadeIn(base.options.speed) });
					plays++;
					if(plays>=base.options.times) { clearInterval(strobing); }
				},base.options.speed*2);

        };
        base.init();
    };
    
    $.strobe.defaultOptions = {
        times: 3,
        speed: 200
    };
    
    $.fn.strobe = function(options){
        return this.each(function(){
            (new $.strobe(this, options));
        });
    };
    
})(jQuery);