interface Style {
  globalCss: string;
  layerCss: string;
  keyCss: string;
}
const oceanBlue: Style = {
  globalCss: `background-color: #e8e8e8;
	height:300vh;
	padding-top:1rem;`,
  layerCss: `background-color: #82a5e0;
	border:1px;
	height:18rem;
	margin-top:2rem;
	margin-left:2rem;
	border-radius: 0.5rem;`,
  keyCss: `background-color: #fff;
	opacity:0.5;
	color:#000;
	border-radius: 0.25rem;
	height:3rem;
	width:3rem;
	font-size:1.2rem;
	padding-top:0.5rem;`,
};

const grass: Style = {
  globalCss: `background-color: #e8e8e8;
  height:300vh;
  padding-top:1rem;`,
  layerCss: `background-color: #c9dead;
	border:1px;
	height:18rem;
	margin-top:2rem;
	margin-left:2rem;
	border-radius: 0.5rem;`,
  keyCss: `background-color: #000;
	opacity:0.5;
	color:#fff;
	border-radius: 0.25rem;
	height:3rem;
	width:3rem;
	font-size:1rem;
	padding-top:0.8rem;`,
};

const styles = [ oceanBlue,grass];
export const defaultStyle = styles[0];
