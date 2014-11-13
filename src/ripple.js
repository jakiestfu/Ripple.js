;(function($){
    $.ripple = function(selector, options) {

        var self = this;

        self.defaults = {
            opacity: 0.5,
            color: "auto"
        };

        var settings = $.extend({}, self.defaults, options);

        $(document).on('click', selector, function(e) {

            var $this = $(this);
            var $ripple;

            $this.addClass('has-ripple');

            // Create the ripple element
            if ($this.find(".ripple").length === 0) {
                $ripple = $("<span></span>").addClass("ripple");
                $ripple.appendTo($this);

                var color = (settings.color == "auto") ? $this.css('color') : settings.color;
                $ripple.css({
                    background: color,
                    opacity: settings.opacity
                });
            }

            $ripple = $this.find(".ripple");

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

            // Set position and animate
            $ripple.css({
                top: y + 'px',
                left: x + 'px'
            }).addClass("animate");
        });
    };
})(jQuery);

$.ripple(".btn-ripple");
