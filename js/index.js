$( document ).ready(function() {
	$('#city-options').val('');
});

var cities = ['nyc','sf','la','atx','syd']

for (var i=0; i<cities.length; i++) {
	$('#city-options').append('<option value="'+cities[i]+'">'+cities[i]+'</option>');
};

$('select#city-options').on('change', function(event){
	event.preventDefault();
	changeBg();
});

function changeBg (){
	var entry = $('#city-options').val().toLowerCase();
	$('body').attr('class', entry);
};

