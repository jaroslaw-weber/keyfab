const lilRainbow = {
  name: "lil rainbow",
  css: `@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
  .global {
  background-color:  #edf0ee;
	  font-family: 'Josefin Sans', sans-serif;
  }
  
  .layer-name
  {
  text-decoration: underline;
  text-transform: uppercase;
   background: transparent;
  border: none;
  color:white;
  width:100%;
  text-align: center;
  padding:1rem;
  font-size: 1rem;
  }
  
  .layer {
  font-weight: bold;
  position:relative;
  background-color: #82a5e0;
  border:1px;
  height:21rem;
  margin-bottom:2rem;
  width:44rem;
  margin-left:2rem;
  border-radius: 0.5rem;
  }
  .layer:nth-child(3n+2) {
	background-color: #4e7877;
  }
  .layer:nth-child(3n+3) {
	background-color: #784e62;
  }
  
  .key {
  margin-left:1.2rem;
	 margin-top:3rem;
  border-radius: 0.25rem;
  height:2.8rem;
  width:2.8rem;
  font-size:1.2rem;
  }
  
  .key-basic {
  background-color: #fff;
  opacity:0.5;
  color:#000;
  }
  
  
  .key-special-1
  {
  background-color: #000;
  opacity:0.5;
  color:#fff;
  border-radius: 0.25rem;
  height:2.8rem;
  width:2.8rem;
  font-size:0.7rem;
  }
  
  .key-special-2
  {
  background-color: red;
  opacity:0.5;
  color:#fff;
  border-radius: 0.25rem;
  height:2.8rem;
  width:2.8rem;
  font-size:0.7rem;
	line-height: 90%;
  }
  
  .key-empty {
  background-color: #fff;
  opacity:0.2;
  color:#000;
  }
  
  
  
  
  
  
  
  
	
	
`,
};

const blockyb = {
  name: "blocky-b",
  css: `
  @import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');

  .global {
  background-color:  #white;
  
  }
  
  .layer-name
  {
  background-color: #000;
  /*text-decoration: underline;*/
  text-transform: uppercase;
  border: solid;
  border-color:black;
  color:white;
  width:100%;
  text-align: right;
  padding:0.2rem;
  padding-right:0.5rem;
  font-size: 1.6rem;
  }
  
  .layer {
  font-weight: bold;
  position:relative;
  background-color: #22668D;
  border:5px;
  border-color:#000;
  border-style:solid;
  height:24rem;
  margin-bottom:2rem;
  width:44rem;
  margin-left:2rem;
  font-family: 'Rubik Mono One', sans-serif;
  }
  .layer:nth-child(3n+2) {
	background-color: #8ECDDD;
  }
  .layer:nth-child(3n+3) {
	background-color: #FFFADD;
  }
  
  .key {
  margin-left:1.2rem;
	 margin-top:4.5rem;
  height:3.4rem;
  width:3.4rem;
  font-size:1.2rem;
  border: 4px;
  border-style: solid;
  border-color: black;
  }
  
  .key-basic {
  border-color: black;
  background-color: #FFCC70;
  opacity:1;
  color:#000;
  
  font-size:1.8rem;
  }
  
  
  .key-special-1
  {
  background-color: #8ECDDD;
  opacity:1;
  color:#000;
  font-size:0.5rem;
  }
  
  .key-special-2
  {text-transform: uppercase;
  background-color: #FFFADD;
  opacity:1;
  color:#000;
  font-size:0.5rem;
	line-height: 90%;
  }
  
  .key-empty {
  background-color: #fff;
  opacity:0.1;
  color:#000;
  }
  
  
  
				
	`,
};

const macbook = {
  name: "macbook",
  css: `
	
	.global {
		background-color:  #d9d9d9;
		}
		
		.layer-name
		{
		//text-decoration: underline;
		text-transform: lowercase;
		 background: transparent;
		border: none;
		color:000;
		opacity:0.5;
		width:100%;
		text-align: left;
		padding-left:4rem;
		font-size: 1rem;
		}
		
		.layer {
		font-weight: bold;
		position:relative;
		border:1px;
		height:21rem;
		margin-bottom:2rem;
		width:44rem;
		margin-left:2rem;
		border-radius: 0.5rem;
		}
		.layer:nth-child(3n+2) {
		  //background-color: #4e7877;
		}
		.layer:nth-child(3n+3) {
		 // background-color: #784e62;
		}
		
		.key {
		margin-left:1.2rem;
		   margin-top:3rem;
		border-radius: 0.25rem;
		filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
		height:2.8rem;
		width:2.8rem;
		font-size:0.8rem;
		}
		
		.key-basic {
		background-color: #fff;
		opacity:0.9;
		color:#000;
		}
		
		
		.key-special-1
		{
		background-color: #e6e6e6;
		opacity:1;
		color:#4f4f4f;
		border-radius: 0.25rem;
		height:2.8rem;
		width:2.8rem;
		font-size:0.5rem;
		}
		
		.key-special-2
		{
		background-color: #4f4f4f;
		opacity:1;
		color:#d9d9d9;
		border-radius: 0.25rem;
		height:2.8rem;
		width:2.8rem;
		font-size:0.5rem;
		  line-height: 90%;
		}
		
		.key-empty {
		background-color: #fff;
		opacity:0.2;
		color:#000;
		}
		

	`,
};

const darkBarbie = {
  name: "dark barbie",
  css: `
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

.global {
background-color:  #000;
}

.layer-name
{
text-transform: lowercase;
 background: transparent;
border: none;
color:#ffabd8;
opacity:1;
width:100%;
text-align: right;
padding-right:4rem;
font-size: 1.3rem;
}

.layer {

font-family: 'Lobster', cursive;
font-weight: bold;
position:relative;
border:1px;
height:21rem;
margin-bottom:2rem;
width:44rem;
margin-left:2rem;
}


.key {
margin-left:1.2rem;
   margin-top:3rem;
border-radius: 2rem;
color:#FF3FA4;
box-shadow: 0px 0px 5px 0.5px #FF3FA4;
height:2.5rem;
width:2.5rem;
//padding-right:0.5rem;
padding-top:0.1rem;
font-size:1.2rem;
}

.key-basic {
background-color: #000;
opacity:1;
}


.key-special-1
{
background-color: #FF3FA4;
opacity:1;
color:#000;
font-size:0.8rem;
}

.key-special-2
{
background-color: #ffabd8;
opacity:1;
color:#000;
font-size:0.8rem;
  line-height: 90%;
}

.key-empty {
background-color: #fff;
opacity:0.1;
color:#000;
}










	
`,
};

const firstComputer = {
  name: "first computer",
  css: `
	@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

.global {
background-color:  #fff;
}

.layer-name
{
text-transform: lowercase;
 background: transparent;
border: none;
color:000;
opacity:1;
width:100%;
text-align: center;
padding-top:0rem;
font-size: 2rem;
}

.layer {
font-family: 'Share Tech Mono', monospace;
font-weight: bold;
position:relative;
border:4px;
border-color:#000;
height:21rem;
margin-bottom:2rem;
width:44rem;
margin-left:2rem;
border-radius: 0.5rem;
}


.key {
margin-left:1.2rem;
  margin-top:3rem;
border: 0.2rem;
border-style:solid;
border-color:black;
height:2.8rem;
width:2.8rem;
font-size:1rem;
background-color: #fff;
color:#000;
}

.key-basic {
}


.key-special-1
{
font-size:0.6rem;
background-color:black;
color:white;
}

.key-special-2
{
font-size:0.5rem;
background-color:black;
color:white;
}

.key-empty {
background-color: #fff;
opacity:0.2;
}


`,
};

const choc = {
	name: 'choc',
	css:`
	
	@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap');
	.global {
	background-color:  #fff;
	}
	
	.layer-name
	{
	//text-decoration: underline;
	text-transform: lowercase;
	 background: transparent;
	border: none;
	opacity:1;
	width:100%;
	text-align: left;
	padding-left:4rem;
	font-size: 1rem;
	}
	
	.layer {
	font-family: 'Montserrat Alternates', sans-serif;
	font-weight: bold;
	position:relative;
	border:1px;
	height:21rem;
	margin-bottom:2rem;
	width:44rem;
	margin-left:2rem;
	border-radius: 0.5rem;
	color:#707371;
	}
	
	.key {
	margin-left:1.2rem;
	   margin-top:3rem;
	background-size: 2.8rem  2.8rem;
	height:2.8rem;
	width:2.8rem;
	font-size:0.8rem;
	
	 background-image: url("https://jaroslaw-weber.github.io/keyfab/image/key/choc.png");
	}
	
	.key-basic {
	}
	
	
	.key-special-1
	{
	font-size:0.7rem;
	}
	
	.key-special-2
	{
	font-size:0.6rem;
	}
	
	.key-empty {
	 background-image: url("https://jaroslaw-weber.github.io/butterkeys/image/key/choc.png");
	opacity:0.2;
	color:#000;
	}
	
	
	
	`
}

function cleanupCss(css: string) {
  //remove empty line at the beginning of the string
  return css.replace("\n", "").replaceAll("\t", "");
}

export interface Style {
  name: string;
  css: string;
}
export const styles: Style[] = [
  lilRainbow,
  blockyb,
  macbook,
  firstComputer,
  choc,
  darkBarbie,
].map((s) => {
  s.css = cleanupCss(s.css);
  return s;
});
export const defaultStyle = styles[0];
