(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

window.onload = function () {
	console.log("Working fine");
	var music = {
		"a": ["a0_98.wav", "a1_98.wav", "a2_98.wav", "a3_98.wav", "a4_98.wav", "a5_98.wav", "a6_98.wav", "a7_98.wav"],
		"b": ["b0_98.wav", "b1_98.wav", "b2_98.wav", "b3_98.wav", "b4_98.wav", "b5_98.wav", "b6_98.wav", "b7_98.wav"],
		"c": ["c0_98.wav", "c1_98.wav", "c2_98.wav", "c3_98.wav", "c4_98.wav", "c5_98.wav", "c6_98.wav", "c7_98.wav"],
		"d": ["d0_98.wav", "d1_98.wav", "d2_98.wav", "d3_98.wav", "d4_98.wav", "d5_98.wav", "d6_98.wav", "d7_98.wav"],
		"e": ["e0_98.wav", "e1_98.wav", "e2_98.wav", "e3_98.wav", "e4_98.wav", "e5_98.wav", "e6_98.wav", "e7_98.wav"],
		"f": ["f0_98.wav", "f1_98.wav", "f2_98.wav", "f3_98.wav", "f4_98.wav", "f5_98.wav", "f6_98.wav", "f7_98.wav"],
		"g": ["g0_98.wav", "g1_98.wav", "g2_98.wav", "g3_98.wav", "g4_98.wav", "g5_98.wav", "g6_98.wav", "g7_98.wav"]
	};

	for (var i in music) {
		document.querySelector(".note").insertAdjacentHTML('beforeEnd', '<div class="' + i + ' note-container"></div>');
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = music[i][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var j = _step.value;

				var url = 'music/' + j;
				console.log(url);
				document.querySelector("." + i).insertAdjacentHTML('beforeEnd', '\
				<span class="single-note-container">\
					<video name="media" preload="none">\
						<source src="./' + url + '" type="audio/x-wav">\
					</video>\
					<span class="note-name">' + j[0] + j[1] + '</span>\
				</span>');
			}
			// document.querySelector(".note").insertAdjacentHTML('beforeEnd', '</div>')
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}

	var el = document.querySelectorAll('video');
	for (var i = 0; i < el.length; i++) {
		el[i].addEventListener('mouseenter', function () {
			this.currentTime = 1;
			this.play();
			this.style.backgroundColor = 'lightpink';
		}, false);

		el[i].addEventListener('mouseleave', function () {
			this.style.backgroundColor = 'white';
			this.pause();
		}, false);
	}
};

// var music = {
// 	 	"a": ["a0_98.wav", "a1_98.wav", "a2_98.wav", "a3_98.wav", "a4_98.wav", "a5_98.wav", "a6_98.wav", "a7_98.wav"],
// 	 	"b": ["b0_98.wav", "b1_98.wav", "b2_98.wav", "b3_98.wav", "b4_98.wav", "b5_98.wav", "b6_98.wav", "b7_98.wav"],
// 	 	"c": ["c0_98.wav", "c1_98.wav", "c2_98.wav", "c3_98.wav", "c4_98.wav", "c5_98.wav", "c6_98.wav", "c7_98.wav", "c8_98.wav"],
// 	 	"d": ["d0_98.wav", "d1_98.wav", "d2_98.wav", "d3_98.wav", "d4_98.wav", "d5_98.wav", "d6_98.wav", "d7_98.wav", "d8_98.wav"],
// 	 	"e": ["e0_98.wav", "e1_98.wav", "e2_98.wav", "e3_98.wav", "e4_98.wav", "e5_98.wav", "e6_98.wav", "e7_98.wav", "e8_98.wav"],
// 	 	"f": ["f0_98.wav", "f1_98.wav", "f2_98.wav", "f3_98.wav", "f4_98.wav", "f5_98.wav", "f6_98.wav", "f7_98.wav", "f8_98.wav"],
// 	 	"g": ["g0_98.wav", "g1_98.wav", "g2_98.wav", "g3_98.wav", "g4_98.wav", "g5_98.wav", "g6_98.wav", "g7_98.wav", "g8_98.wav"],
// 	}

},{}]},{},[1]);
