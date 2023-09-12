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
	width:44rem;
	margin-left:2rem;
	border-radius: 0.5rem;`,
  keyCss: `background-color: #fff;
	opacity:0.5;
	color:#000;
	border-radius: 0.25rem;
	height:2.8rem;
	width:2.8rem;
	font-size:1.2rem;`,
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
	width:44rem;
	border-radius: 0.5rem;`,
  keyCss: `background-color: #000;
  opacity:0.6;
  color:#fff;
  border-radius:50% 50% 52% 48% / 58% 56% 44% 42%  ;
  height:3rem;
  width:3rem;
  font-size:0.8rem;`,
};

const styles = [grass,oceanBlue, grass];
export const defaultStyle = styles[0];
