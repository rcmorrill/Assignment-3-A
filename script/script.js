
//Set up the drawing environment here
var margin = {t:20,r:20,b:20,l:20};
var width = document.getElementById('plot').clientWidth-margin.l-margin.r,
	height = document.getElementById('plot').clientHeight-margin.t-margin.b;

var plot = d3.select('.canvas')
	.append('svg')
	.attr('width',width+margin.l+margin.r)
	.attr('height',height+margin.t+margin.b)
	.append('g')
	.attr('class','plot')
	.attr('transform', 'translate ('+margin.l+','+margin.r+')');


//Start with 100 symbols
var numOfSymbols = 100;

//Create an array, generate objects to push into the array
//Attributes of these symbols are
// --> x position: between 0 and width
// --> y position: betewen 0 and height
// --> size: between 0 and 100x100
// --> type: circle or square
// --> color
var symbols = [];
var test = [];

function randBetween (min, max) {
	return Math.random()*(max - min) + min;
}


for (i=0; i<numOfSymbols; i++){
	var newObject = {
		xPos: randBetween(0,width),
		yPos: randBetween(0,height),
		size: Math.round(randBetween(0,101)),
		shape: Math.round(Math.random()),
		color: {r:Math.round(randBetween (0, 255)), g:Math.round(randBetween (0, 255)), b:Math.round(randBetween (0, 255))}
	};
	symbols.push(newObject)
	test.push(newObject.shape)

}

console.log(symbols);
console.log(test);

//With the array you've created and populated, draw circles to represent these symbols



symbols.forEach(function(symbol){
	if (symbol.shape == 1) {
		plot
			.append('circle')
			.attr('cx', symbol.xPos)
			.attr('cy', symbol.yPos)
			.attr('r',symbol.size)
			.attr('fill','rgb('+symbol.color.r+','+symbol.color.g+','+symbol.color.b+')');
	
	}else if (symbol.shape == 0) {
		plot
			.append('rect')
			.attr('x', symbol.xPos)
			.attr('y', symbol.yPos)
			.attr('width',symbol.size)
			.attr('height',symbol.size)
			.attr('fill','rgb('+symbol.color.r+','+symbol.color.g+','+symbol.color.b+')');
	}
})

