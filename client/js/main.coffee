getAndPrintBrews = () ->
	$.getJSON '/brew', (data) ->
		$.each data, (key, val) ->
			$('.brews').append("<li><span><span class='image'><img src='/assets/images/#{ val.url }' alt=''></span><span class='text'><h3>#{ val.name }</h3></span></span></li>")

getAndPrintBrews().then ->
	$container = $('.brews')

	$container.imagesLoaded ->
		$container.masonry
			itemSelector: 'li'