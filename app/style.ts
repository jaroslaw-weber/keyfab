


const oceanBlue2  = `
.global {
	background-color:  #edf0ee;
	height:300vh;
	padding-top:1rem;
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
	background-color: #fff;
	opacity:0.5;
	color:#000;
	border-radius: 0.25rem;
	height:2.8rem;
	width:2.8rem;
	font-size:1.2rem;
}


.special-key-1
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

.special-key-2
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



`

function cleanupCss(css:string){
	//remove empty line at the beginning of the string
	return css.replace('\n','')

}

const styles = [oceanBlue2].map(cleanupCss)
export const defaultStyle = styles[0];
