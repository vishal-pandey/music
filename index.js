window.onload = ()=>{
	console.log("Working fine")
	var music = {
	 	"a": ["a0_98.wav", "a1_98.wav", "a2_98.wav", "a3_98.wav", "a4_98.wav", "a5_98.wav", "a6_98.wav", "a7_98.wav"],
	 	"b": ["b0_98.wav", "b1_98.wav", "b2_98.wav", "b3_98.wav", "b4_98.wav", "b5_98.wav", "b6_98.wav", "b7_98.wav"],
	 	"c": ["c0_98.wav", "c1_98.wav", "c2_98.wav", "c3_98.wav", "c4_98.wav", "c5_98.wav", "c6_98.wav", "c7_98.wav"],
	 	"d": ["d0_98.wav", "d1_98.wav", "d2_98.wav", "d3_98.wav", "d4_98.wav", "d5_98.wav", "d6_98.wav", "d7_98.wav"],
	 	"e": ["e0_98.wav", "e1_98.wav", "e2_98.wav", "e3_98.wav", "e4_98.wav", "e5_98.wav", "e6_98.wav", "e7_98.wav"],
	 	"f": ["f0_98.wav", "f1_98.wav", "f2_98.wav", "f3_98.wav", "f4_98.wav", "f5_98.wav", "f6_98.wav", "f7_98.wav"],
	 	"g": ["g0_98.wav", "g1_98.wav", "g2_98.wav", "g3_98.wav", "g4_98.wav", "g5_98.wav", "g6_98.wav", "g7_98.wav"],
	}

	for(var i in music){
		document.querySelector(".note").insertAdjacentHTML('beforeEnd', '<div class="'+i+' note-container"></div>')
		for(var j of music[i]){
			let url = 'music/'+j;
			console.log(url);
			document.querySelector("."+i).insertAdjacentHTML('beforeEnd', '\
				<span class="single-note-container">\
					<video name="media" preload="none">\
						<source src="./'+url+'" type="audio/x-wav">\
					</video>\
					<span class="note-name">'+j[0]+j[1]+'</span>\
				</span>')
		}
		// document.querySelector(".note").insertAdjacentHTML('beforeEnd', '</div>')

	}


	var el = document.querySelectorAll('video');
	for(var i=0; i < el.length; i++){
	    el[i].addEventListener('mouseenter', function () {
	    	this.currentTime = 1
	    	this.play()
	    	this.style.backgroundColor = 'lightpink';
	    }, false);
	    
	    el[i].addEventListener('mouseleave', function () {
	    	this.style.backgroundColor = 'white';
	    	this.pause()
	    }, false);
	}
}




// var music = {
// 	 	"a": ["a0_98.wav", "a1_98.wav", "a2_98.wav", "a3_98.wav", "a4_98.wav", "a5_98.wav", "a6_98.wav", "a7_98.wav"],
// 	 	"b": ["b0_98.wav", "b1_98.wav", "b2_98.wav", "b3_98.wav", "b4_98.wav", "b5_98.wav", "b6_98.wav", "b7_98.wav"],
// 	 	"c": ["c0_98.wav", "c1_98.wav", "c2_98.wav", "c3_98.wav", "c4_98.wav", "c5_98.wav", "c6_98.wav", "c7_98.wav", "c8_98.wav"],
// 	 	"d": ["d0_98.wav", "d1_98.wav", "d2_98.wav", "d3_98.wav", "d4_98.wav", "d5_98.wav", "d6_98.wav", "d7_98.wav", "d8_98.wav"],
// 	 	"e": ["e0_98.wav", "e1_98.wav", "e2_98.wav", "e3_98.wav", "e4_98.wav", "e5_98.wav", "e6_98.wav", "e7_98.wav", "e8_98.wav"],
// 	 	"f": ["f0_98.wav", "f1_98.wav", "f2_98.wav", "f3_98.wav", "f4_98.wav", "f5_98.wav", "f6_98.wav", "f7_98.wav", "f8_98.wav"],
// 	 	"g": ["g0_98.wav", "g1_98.wav", "g2_98.wav", "g3_98.wav", "g4_98.wav", "g5_98.wav", "g6_98.wav", "g7_98.wav", "g8_98.wav"],
// 	}