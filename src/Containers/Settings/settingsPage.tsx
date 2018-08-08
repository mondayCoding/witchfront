
import * as React from 'react';
import {Radiobutton} from '../../Components';


export default class Settings extends React.Component {

   state: IState = {
      checkboxTwo: false,
      checkboxOne: true,
      checkboxThree: true,
      optionFour: true,
      selectedTheme: "default"
   };

	handleThemeChange = (event: any) => {		
		const selectTheme:IThemeString = event.target.value;
		console.log(selectTheme);		
		document.getElementById("body").className = selectTheme;

		this.setState({
			selectedTheme: selectTheme
		});
	}

	render() {
		return (
			<div className="content--md">

				<h2>this is settings page</h2>
				<p>it has very litle in terms of content</p>

				<div className="config-wrap">

					<div className="content-centered-md">
					<h3>select interface theme</h3>

					<div className="spacing"></div>

					{
						themes.map((theme, index) => 
							<Radiobutton
								key={index} 
								id={"themeselect"+index} 
								label={theme.label} 
								value={theme.value} 
								name="selectedTheme" 
								onChange={this.handleThemeChange} 
							/>
						)
					}								

					<div className="spacing"></div>

						<div className="line-thin"></div>

						<kbd className="shortcut">Ctrl + D</kbd>
						<kbd className="shortcut">Ctrl + S</kbd>
						<kbd className="shortcut">Ctrl + A</kbd>

						<div className="line-thin"></div>					
					</div>
				</div>
			</div>);
	}
}

type IThemeString = "default" | "red" | "violet" | "light";

interface IState {
	checkboxTwo: boolean;
	checkboxOne: boolean;
	checkboxThree: boolean;
	optionFour: boolean;
	selectedTheme: IThemeString;
}

const themes = [
	{ value: "default", label: "Default UI theme (dark)" },
	{ value: "violet", label: "Violet variant" },
	{ value: "red", label: "Red variant" },
	{ value: "light", label: "Light theme" },
];
 