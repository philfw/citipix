$('.entry').on('submit', function(event){
	event.preventDefault();
	changeBg();
});

function changeBg (){
	var entry = $('#city-type').val();
	if (entry === 'new york'||entry ==='new york city'||entry ==='nyc'){
		$('body').css('background', 'url(images/nyc.jpg) no-repeat center center fixed');
	} else if (entry === 'san francisco'||entry==='sf'||entry==='bay area'){
		$('body').css('background', 'url(images/sf.jpg) no-repeat center center fixed')
	} else if (entry === 'la'||entry==='lax'||entry==='los angeles'){
		$('body').css('background', 'url(images/la.jpg) no-repeat center center fixed')
	} else if (entry === 'austin'||entry==='atx'){
		$('body').css('background', 'url(images/austin.jpg) no-repeat center center fixed')
	} else if (entry === 'sydney'||entry==='syd'){
		$('body').css('background', 'url(images/sydney.jpg) no-repeat center center fixed')
	} else {return entry};
	
	$('#city-type').attr('placeholder','Enter a city name...');
};

