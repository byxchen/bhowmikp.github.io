webpackJsonp(["styles"],{

/***/ "./node_modules/github-calendar/dist/github-calendar.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/github-calendar/dist/github-calendar.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../raw-loader/index.js!../../postcss-loader/lib/index.js??embedded!./github-calendar.css", function() {
			var newContent = require("!!../../raw-loader/index.js!../../postcss-loader/lib/index.js??embedded!./github-calendar.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/github-calendar/dist/github-calendar.css":
/***/ (function(module, exports) {

module.exports = ".calendar {\n    width: 750px;\n    font-family: Helvetica, arial;\n    border: 1px solid #DDDDDD;\n    border-radius: 3px;\n    min-height: 243px;\n    text-align: center;\n    margin: 0 auto;\n}\n\n.calendar-graph text.wday,\n.calendar-graph text.month {\n    font-size: 10px;\n    fill: #aaa;\n}\n\n.contrib-legend {\n    text-align: right;\n    padding: 0 14px 10px 0;\n    display: inline-block;\n    float: right;\n}\n\n.contrib-legend .legend {\n    display: inline-block;\n    list-style: none;\n    margin: 0 5px;\n    position: relative;\n    bottom: -1px;\n    padding: 0;\n}\n\n.contrib-legend .legend li {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n}\n\n.text-small {\n    font-size: 12px;\n    color: #767676;\n}\n\n.calendar-graph {\n    padding: 5px 0 0;\n    height: 126px;\n    text-align: center;\n}\n\n.contrib-column {\n    padding: 15px 0;\n    text-align: center;\n    border-left: 1px solid #ddd;\n    border-top: 1px solid #ddd;\n    font-size: 11px;\n}\n\n.contrib-column-first {\n    border-left: 0;\n}\n\n.table-column {\n    display: table-cell;\n    width: 1%;\n    padding-right: 10px;\n    padding-left: 10px;\n    vertical-align: top;\n}\n\n.contrib-number {\n    font-weight: 300;\n    line-height: 1.3em;\n    font-size: 24px;\n    display: block;\n    color: #333;\n}\n\n.calendar img.spinner {\n    width: 70px;\n    margin-top: 50px;\n    min-height: 70px;\n}\n\n.monospace {\n    text-align: center;\n    color: #000;\n    font-family: monospace;\n}\n\n.monospace a {\n    color: #1D75AB;\n    text-decoration: none;\n}\n\n.contrib-footer {\n    font-size: 11px;\n    padding: 0 10px 12px;\n    text-align: left;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    height: 26px;\n}\n\n.left.text-muted {\n    float: left;\n    margin-left: 9px;\n    color: #767676;\n}\n\n.left.text-muted a {\n    color: #4078c0;\n    text-decoration: none;\n}\n\n.left.text-muted a:hover,\n.monospace a:hover {\n    text-decoration: underline;\n}\n\nh2.f4.text-normal.mb-3 {\n    display: none;\n}\n\n.float-left.text-gray {\n    float: left;\n}"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.timeline {\n  padding: 5%;\n  position: relative; }\n.timeline::before {\n    content: '';\n    background: #C5CAE9;\n    width: 5px;\n    height: 95%;\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n.timeline-item {\n  width: 100%;\n  margin-bottom: 70px; }\n.timeline-item:nth-child(odd) .timeline-content .inner-content {\n    margin-right: 105px; }\n.timeline-item:nth-child(even) .timeline-content {\n    float: right;\n    padding: 40px 30px 10px 30px; }\n.timeline-item:nth-child(even) .timeline-content .date {\n      right: auto;\n      left: 0; }\n.timeline-item:nth-child(even) .timeline-content::after {\n      content: '';\n      position: absolute;\n      border-style: solid;\n      width: 0;\n      height: 0;\n      top: 30px;\n      left: -15px;\n      border-width: 10px 15px 10px 0;\n      border-color: transparent #f5f5f5 transparent transparent; }\n.timeline-item::after {\n    content: '';\n    display: block;\n    clear: both; }\n.timeline-content {\n  position: relative;\n  width: 40%;\n  padding: 10px 30px;\n  border-radius: 4px;\n  background: #f5f5f5;\n  -webkit-box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3);\n  min-height: 10em; }\n.timeline-content::after {\n    content: '';\n    position: absolute;\n    border-style: solid;\n    width: 0;\n    height: 0;\n    top: 30px;\n    right: -15px;\n    border-width: 10px 0 10px 15px;\n    border-color: transparent transparent transparent #f5f5f5; }\n.timeline-img {\n  background: #3F51B5;\n  border-radius: 50%;\n  position: absolute;\n  left: 50%;\n  width: 60px;\n  height: 60px;\n  margin-left: -30px;\n  margin-top: 45px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n.timeline-img p {\n    height: 0;\n    line-height: 1;\n    color: #FFFFFF; }\n.timeline-card {\n  padding: 0 !important; }\n.timeline-card p {\n    padding: 0 20px; }\n.timeline-card a {\n    margin-left: 20px; }\n.timeline-item:nth-child(2) .timeline-img-header {\n  background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, 0.4))), url(\"https://hd.unsplash.com/photo-1458530970867-aaa3700e966d\") center center no-repeat;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.4)), url(\"https://hd.unsplash.com/photo-1458530970867-aaa3700e966d\") center center no-repeat;\n  background-size: cover; }\n.timeline-item:nth-child(5) .timeline-img-header {\n  background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, 0.4))), url(\"https://hd.unsplash.com/photo-1444093826349-9ce8c622f4f3\") center center no-repeat;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.4)), url(\"https://hd.unsplash.com/photo-1444093826349-9ce8c622f4f3\") center center no-repeat;\n  background-size: cover; }\n.timeline-item:nth-child(6) .timeline-img-header {\n  background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, 0.4))), url(\"https://hd.unsplash.com/photo-1471479917193-f00955256257\") center center no-repeat;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.4)), url(\"https://hd.unsplash.com/photo-1471479917193-f00955256257\") center center no-repeat;\n  background-size: cover; }\n.timeline-item:nth-child(8) .timeline-img-header {\n  background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, 0.4))), url(\"https://hd.unsplash.com/photo-1466840787022-48e0ec048c8a\") center center no-repeat;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.4)), url(\"https://hd.unsplash.com/photo-1466840787022-48e0ec048c8a\") center center no-repeat;\n  background-size: cover; }\n.timeline-item:nth-child(10) .timeline-img-header {\n  background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, 0.4))), url(\"https://hd.unsplash.com/photo-1447639703758-f525f36456bf\") center center no-repeat;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.4)), url(\"https://hd.unsplash.com/photo-1447639703758-f525f36456bf\") center center no-repeat;\n  background-size: cover; }\n.timeline-item:nth-child(11) .timeline-img-header {\n  background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, 0.4))), url(\"https://hd.unsplash.com/photo-1469429978400-082eec725ad5\") center center no-repeat;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.4)), url(\"https://hd.unsplash.com/photo-1469429978400-082eec725ad5\") center center no-repeat;\n  background-size: cover; }\n.timeline-img-header {\n  height: 200px;\n  position: relative;\n  margin-bottom: 20px; }\n.timeline-img-header h2 {\n    color: #FFFFFF;\n    position: absolute;\n    bottom: 5px;\n    left: 20px; }\nblockquote {\n  margin-top: 30px;\n  color: #757575;\n  border-left-color: #3F51B5;\n  padding: 0 20px; }\n.date {\n  background: #3F51B5;\n  display: inline-block;\n  color: #FFFFFF;\n  padding: 10px;\n  position: absolute;\n  top: 0;\n  right: 0; }\n@media screen and (max-width: 1024px) {\n  .timeline::before {\n    left: 50px; }\n  .timeline .timeline-img {\n    left: 50px; }\n  .timeline .timeline-content {\n    max-width: 100%;\n    width: auto;\n    margin-left: 70px; }\n  .timeline .timeline-item:nth-child(even) .timeline-content {\n    float: none;\n    margin-top: 35px; }\n    .timeline .timeline-item:nth-child(even) .timeline-content .date {\n      right: 0;\n      left: auto; }\n    .timeline .timeline-item:nth-child(even) .timeline-content .inner-content {\n      margin-top: 35px; }\n  .timeline .timeline-item:nth-child(odd) .timeline-content {\n    margin-top: 35px; }\n    .timeline .timeline-item:nth-child(odd) .timeline-content .inner-content {\n      margin-top: 65px;\n      margin-right: 0; }\n    .timeline .timeline-item:nth-child(odd) .timeline-content::after {\n      content: '';\n      position: absolute;\n      border-style: solid;\n      width: 0;\n      height: 0;\n      top: 30px;\n      left: -15px;\n      border-width: 10px 15px 10px 0;\n      border-color: transparent #f5f5f5 transparent transparent; } }\n.inner-content {\n  margin-top: 35px;\n  text-align: justify; }\nhtml, body {\n    height: 100%;\n    background-color: #F9F9F9;\n    font-family: 'Roboto', sans-serif;\n    line-height: 150%;\n    /* width: 100%; */\n}\nbody{\n  overflow-x: hidden;\n}\n::-webkit-scrollbar {\n    width: 4px;\n}\n::-webkit-scrollbar-track {\n    background: #333;\n    border-radius: 4px;\n    margin: 10px 0;\n}\n::-webkit-scrollbar-thumb {\n    background: rgba(255,255,255,.5);\n    border-radius: 4px;\n}\n::-webkit-scrollbar-thumb:hover {\n    background: rgba(255,255,255,.75);\n}\nli::after{\n  color: rgb(0, 0, 238);\n}\nli:visited{\n  color: rgb(0, 0, 238);\n}\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css", function() {
			var newContent = require("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/styles.css");
module.exports = __webpack_require__("./node_modules/github-calendar/dist/github-calendar.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map