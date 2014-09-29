// var monthDispVis = [['Week1', 3], ['Week2', 2], ['Week3', 2], 
// ['week4', 4], ['week5', 3]];

// var yearDispVis = [['Jan', 18], ['Feb', 16], ['March', 17], 
// ['April', 22], ['May', 19],['June', 14], ['July', 11], ['August', 3], 
// ['September', 25], ['October', 0], ['November', 0], ['December', 0]];

// var monthDispHr = [['Week1', 1.0], ['Week2', .9], ['Week3', 2.0], 
// ['week4', 2.1], ['week5', 1.6]];

// var yearDispHr = [['Jan', 1.6], ['Feb', 1.3], ['March', 1.7], 
// ['April', 1.7], ['May', 1.4],['June', 1.2], ['July', .8], ['August', 1.0], 
// ['September', 1.1], ['October', 0], ['November', 0], ['December', 0]];



// $(document).ready(function(){
// 	//drawShape();
// 	plot();
// });

/*
function drawShape(){
  // get the canvas element using the DOM
  var canvas = document.getElementById('workouts-canvas');

  // Make sure we don't execute when canvas isn't supported
  if (canvas.getContext){

    // use getContext to use the canvas for drawing

    var width = 1000;
    var height = 400;

    canvas.width = width;
    canvas.height = height;

    var ctx = canvas.getContext('2d');

    // ctx.rect(0, 0, width-10, height-100);
    // ctx.fillStyle = '#7FCB9F';
    // ctx.fill();
    // ctx.lineWidth = 7;
    // ctx.strokeStyle = '#7FCB9F';
    //ctx.fill(); 

    // ctx.font = '20px Times New Roman';
     //ctx.strokeStyle="#FF0000";
    // ctx.fillText("Starting Strength", 20, 20);

    ctx.globalAlpha = 0.95;
    ctx.rect(0, 0, 1600, 350);
    ctx.fillStyle = "#7FCB9F";
    ctx.fill();

    ctx.font="16px Georgia";
    ctx.fillStyle = "black";
    ctx.fillText('Routine #1: Starting Strength',25,25);

    // Filled triangle
    // ctx.beginPath();
    // ctx.moveTo(center-50,25);
    // ctx.lineTo(center/3,120);
    // ctx.closePath();
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(center, 50);
    // ctx.lineTo(3*center/3,120);
    // ctx.closePath();
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(center + 50,25);
    // ctx.lineTo(5*center/3,120);
    // ctx.closePath();
    // ctx.stroke();
    //ctx.fill();
    
    // Stroked triangle
    /*
    ctx.beginPath();
    ctx.moveTo(125,125);
    ctx.lineTo(125,45);
    ctx.lineTo(45,125);
    ctx.closePath();
    ctx.stroke();
    */

// } else {
// 	alert('You need Safari or Firefox 1.5+ to see this demo.');
// }
// }

// function plot(){
// 	var plot1 = $.jqplot('chart1', [monthDispVis], {
// 		title: 'Gym visits Sept',
// 		series:[{renderer:$.jqplot.BarRenderer}],
// 		axesDefaults: {
// 			tickRenderer: $.jqplot.CanvasAxisTickRenderer ,
// 			tickOptions: {
// 				angle: -30,
// 				fontSize: '10pt',
// 				fontFamily: 'Helvetica'
// 			}
// 		},
// 		axes: {
// 			xaxis: {
// 				renderer: $.jqplot.CategoryAxisRenderer
// 			}
// 		},
// 		grid: {
// 			drawGridlines:false
// 		}

// 	});
// 	var plot2 = $.jqplot('chart2', [yearDispVis], {
// 		title: 'Gym visits this 2014',
// 		series:[{renderer:$.jqplot.BarRenderer}],
// 		axesDefaults: {
// 			tickRenderer: $.jqplot.CanvasAxisTickRenderer ,
// 			tickOptions: {
// 				angle: -30,
// 				fontSize: '10pt'
// 			}
// 		},
// 		axes: {
// 			xaxis: {
// 				renderer: $.jqplot.CategoryAxisRenderer
// 			}
// 		},
// 		grid: {
// 			drawGridlines:false
// 		}
// 	});
// 	var plot3 = $.jqplot('chart3', [monthDispHr], {
// 		title: 'Visit length Sept',
// 		series:[{renderer:$.jqplot.BarRenderer}],
// 		axesDefaults: {
// 			tickRenderer: $.jqplot.CanvasAxisTickRenderer ,
// 			tickOptions: {
// 				angle: -30,
// 				fontSize: '10pt'
// 			}
// 		},
// 		axes: {
// 			xaxis: {
// 				renderer: $.jqplot.CategoryAxisRenderer
// 			}
// 		},
// 		grid: {
// 			drawGridlines:false
// 		}
// 	});
// 	var plot4 = $.jqplot('chart4', [yearDispHr], {
// 		title: 'Visit Length 2014',
// 		series:[{renderer:$.jqplot.BarRenderer}],
// 		axesDefaults: {
// 			tickRenderer: $.jqplot.CanvasAxisTickRenderer ,
// 			tickOptions: {
// 				angle: -30,
// 				fontSize: '10pt'
// 			}
// 		},
// 		axes: {
// 			xaxis: {
// 				renderer: $.jqplot.CategoryAxisRenderer
// 			}
// 		},
// 		grid: {
// 			drawGridlines:false
// 		}
// 	});
	
// }

