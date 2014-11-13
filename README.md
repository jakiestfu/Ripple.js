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
	color: "auto", // Set the background color. If set to "auto", it will use the text color
	opacity: 0.5 // The opacity of the ripple
});
```

## Building
```bash
$ npm install
$ npm run-script build
$ npm run-script build-watch # To watch assets
```
