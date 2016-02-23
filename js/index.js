$('.entry').on('submit', function(event){
	event.preventDefault();
	changeBg();
	$('#city-type').val('');
});

function changeBg (){
	var entry = $('#city-type').val();
	if (entry === 'new york'||entry ==='new york city'||entry ==='nyc'){
		$('body').attr('class', 'nyc');
	} else if (entry === 'san francisco'||entry==='sf'||entry==='bay area'){
		$('body').attr('class', 'sf');
	} else if (entry === 'la'||entry==='lax'||entry==='los angeles'){
		$('body').attr('class', 'la');
	} else if (entry === 'austin'||entry==='atx'){
		$('body').attr('class', 'austin');
	} else if (entry === 'sydney'||entry==='syd'){
		$('body').attr('class', 'sydney');
	} else {
		$('body').css('background', 'background: url(../images/citipix_skyline.jpg) no-repeat center center fixed');
	};
};

