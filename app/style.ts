const oceanBlue2 = `
.global {	
	background-color:  #edf0ee;
		height:300vh;
		padding-top:4rem;
	}
	
	.layer {
		background-color: #82a5e0;
		border:1px;
		height:18rem;
		margin-bottom:2rem;
		width:44rem;
		margin-left:2rem;
		border-radius: 0.5rem;
	}
	
	.key {
	   margin-top:1rem;
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
	   margin-top:1rem;
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
	   margin-top:1rem;
		background-color: red;
		opacity:0.5;
		color:#fff;
		border-radius: 0.25rem;
		height:2.8rem;
		width:2.8rem;
		font-size:0.7rem;
	}
	
	.key-empty {
		background-color: #fff;
		opacity:0.2;
		color:#000;
	}
	
	
	
`;

function cleanupCss(css: string) {
  //remove empty line at the beginning of the string
  return css.replace("\n", "").replaceAll('\t', '');
}

export interface Style{
	name:string;
	css:string
}
export const styles = [
  {
    name: "ocean blue",
    css: oceanBlue2,
  },
].map((s) => {
  s.css = cleanupCss(s.css);
  return s;
});
export const defaultStyle = styles[0];
