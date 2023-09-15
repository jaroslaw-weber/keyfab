const lilRainbow = `
.global {
	background-color:  #edf0ee;
	min-height:100vh;
	padding-top:4rem;
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
	
	
	
	
`;

function cleanupCss(css: string) {
  //remove empty line at the beginning of the string
  return css.replace("\n", "").replaceAll("\t", "");
}

export interface Style {
  name: string;
  css: string;
}
export const styles = [
  {
    name: "lil rainbow",
    css: lilRainbow,
  },
].map((s) => {
  s.css = cleanupCss(s.css);
  return s;
});
export const defaultStyle = styles[0];
