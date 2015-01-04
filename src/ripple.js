;(function($){
    $.ripple = function(selector, options) {

        var self = this;

        self.defaults = {
            on: 'mousedown',

            opacity: 0.4,
            color: "auto",
            multi: false,

            duration: 0.7,
            easing: 'linear'
        };

        self.defaults = $.extend({}, self.defaults, options);

        $(document).on(self.defaults.on, selector, function(e) {

            var $this = $(this);
            var $ripple;
            var settings;

            $this.addClass('has-ripple');

            // This instances settings
            settings = $.extend({}, self.defaults, $this.data());

            // Create the ripple element
            if ( settings.multi || (!settings.multi && $this.find(".ripple").length === 0) ) {
                $ripple = $("<span></span>").addClass("ripple");
                $ripple.appendTo($this);

                // Set the color and opacity
                var color = (settings.color == "auto") ? $this.css('color') : settings.color;
                $ripple.css({
                    animationDuration: (settings.duration).toString() + 's',
                    animationTimingFunction: settings.easing,
                    background: color,
                    opacity: settings.opacity
                });
            }

            // Ensure we always have the ripple element
            if(!settings.multi) {
                $ripple = $this.find(".ripple");
            }

            // Kill animation
            $ripple.removeClass("animate");

            // Set ripple size
            if (!$ripple.height() && !$ripple.width()) {
                var size = Math.max($this.outerWidth(), $this.outerHeight());
                $ripple.css({
                    height: size,
                    width: size
                });
            }

            // Retrieve coordinates
            var x = e.pageX - $this.offset().left - $ripple.width() / 2;
            var y = e.pageY - $this.offset().top - $ripple.height() / 2;

            /**
             * We want to delete the ripple elements if we allow multiple so we dont sacrifice any page
             * performance. We don't do this on single ripples because once it has rendered, we only
             * need to trigger paints thereafter.
             */
            if(settings.multi) {
                $ripple.one('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function() {
                    $(this).remove();
                });
            }

            // Set position and animate
            $ripple.css({
                top: y + 'px',
                left: x + 'px'
            }).addClass("animate");

            console.log($ripple.css('animation-timing-function'));
        });
    };
})(jQuery);
