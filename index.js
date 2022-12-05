var h1 = document.getElementsByTagName('h1');
var p =  document.getElementsByTagName('p');
var content = document.getElementById("content");
var colors =  ["#FF00FF","#8A2BE2","#7CFC00","#7FFFD4","#FFFF00"];

			setTimeout(function(){   
				h1[0].style.opacity = "1"
			}, 300);
           setTimeout(function(){ 
            		var counter = 0;
            		var i = setInterval(function(){
					    bg.style.height=counter+"px";
					    counter+=20;
					    if(counter == 320) {
					        clearInterval(i);
					    }
					}, 100); 
            }, 1000);
  



            setTimeout(function(){ 
            	var counter = 0;
             	console.log(p.length);
				var i = setInterval(function(){
				    // do your thing
				    p[counter].style.opacity="1";
				    counter++;
				    if(counter == p.length) {
				        clearInterval(i);
				    }
				}, 700);
            }, 900);
	            setTimeout(function(){ 
		        		var counter = 0;
		        		h1[0].style.transitionDelay ="0s";
		        		h1[0].style.transition = "opacity 0.2s";
		        		var i = setInterval(function(){
						if(counter%2==0){
								var count = 0;
			        			var j = setInterval(function(){
								h1[0].style.color=""+colors[(Math.floor(Math.random() * colors.length) )]+"";
			        			h1[0].style.opacity=1
			        			content.style.opacity="1";
			        			p[0].style.color = ""+colors[(Math.floor(Math.random() * colors.length) )]+"";
			        			p[1].style.color = ""+colors[(Math.floor(Math.random() * colors.length) )]+"";
			        			p[2].style.color = ""+colors[(Math.floor(Math.random() * colors.length) )]+"";
			        			p[3].style.color = ""+colors[(Math.floor(Math.random() * colors.length) )]+"";
			        			p[4].style.color = ""+colors[(Math.floor(Math.random() * colors.length) )]+"";
			        			p[5].style.color = ""+colors[(Math.floor(Math.random() * colors.length) )]+"";
			        			count++
			        			if(count==5){
			        				clearInterval(j);
			        			}
		        			},100);
		        		}else{

		        			h1[0].style.transition = "opacity 0.2s";
							h1[0].style.opacity="0";
							content.style.opacity="0";
		        		}
						counter++;
					}, 600); 
            }, 19000);