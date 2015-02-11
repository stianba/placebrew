getAndPrintBrews = () ->
	$.getJSON '/brew', (data) ->
		shuffle data
		$.each data, (key, val) ->
			$('.brews').append("<li><span><span class='image'><img src='/assets/images/#{ val.url }' alt=''></span><span class='text'><h3>#{ val.name }</h3></span></span></li>")

getAndPrintBrews().then ->
	$container = $('.brews')

	$container.imagesLoaded ->
		$container.masonry
			itemSelector: 'li'

# Adapted from the javascript implementation at http://sedition.com/perl/javascript-fy.html
# Randomizes the order of elements in the passed in array in place.
shuffle = (a) ->
    i = a.length
    while --i > 0
        j = ~~(Math.random() * (i + 1))
        t = a[j]
        a[j] = a[i]
        a[i] = t
    a