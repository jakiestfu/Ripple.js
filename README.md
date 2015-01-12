Ripple.js
=========

Adds Material style ripple to buttons

## Installation
```html
<link href="stylesheet" type="text/css" href="ripple.min.css">
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="ripple.min.js"></script>
```
or
```bash
$ bower install ripplejs
```

## Usage
Include jQuery, the ripple.css, and ripple.js into your page. Then upon initialization, you can activate ripple as follows:

```javascript
$.ripple(".btn", {
	debug: false, // Turn Ripple.js logging on/off
	on: 'mousedown', // The event to trigger a ripple effect

	opacity: 0.4, // The opacity of the ripple
	color: "auto", // Set the background color. If set to "auto", it will use the text color
	multi: false, // Allow multiple ripples per element

	duration: 0.7, // The duration of the ripple

	// Filter function for modifying the speed of the ripple
	rate: function(pxPerSecond) {
        return pxPerSecond;
    },

	easing: 'linear' // The CSS3 easing function of the ripple
});
```

Elements can be overridden with their own default options:
```html
<a href="#" data-duration="5" data-color="red" data-opacity="1">Slow Red Ripple</a>
```

## Building
```bash
$ npm install
$ npm run-script build
$ npm run-script build-watch # To watch assets
```

## Caveats
* The element selected to contain a ripple will gain the following CSS properties:
    * `position: relative`
    * `transform: translate3d(0,0,0)`

## License
MIT
