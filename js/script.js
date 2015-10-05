function changeQuote()
{
	$.get('/getcompliment', {name: $("#quote").text()}, function(data)
		{
			obj = JSON.parse(data);
			console.log(obj.stuff);
			$("#quote").text(obj.stuff);
		});
	//console.log($("#quote").text("what"));
}