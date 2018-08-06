
import * as React from 'react';
import { PlainConfirmModal, ReactConfirmProps } from 'react-confirm';

export default class ConfirmationDialog extends React.Component<IExtendedReactConfirmProps> {

	listenKeyboard = (e:KeyboardEvent) => {
		if (e.key === 'Escape' || e.keyCode === 27) {
			this.props.cancel();
		}
	}

	componentDidMount() {
		if (this.props.cancel) {
			window.addEventListener('keydown', this.listenKeyboard, true);
		}
	}

	componentWillUnmount() {
		if (this.props.cancel) {
			window.removeEventListener('keydown', this.listenKeyboard, true);
		}
	}
 
	onDialogClick = (event:React.MouseEvent) => {
		event.stopPropagation();
   }

   handleCancel= () => {
      this.props.cancel();
   }

   handleProceed = () => {
      this.props.proceed();
   }

	render() {
		const {confirmation, show, dismiss, heading } = this.props;

		// Render nothing if the "show" prop is false
		if (!this.props.show) {
			return null;
		}

		return (
			<div className="modal-fade" onClick={this.handleCancel}>

				<div className="modal-box animated--scaleIn sm" onClick={this.onDialogClick}>
					<div className="modal-heading">
						{heading && <h3 className="themeheading">{heading}</h3>}
						<button onClick={this.handleCancel} type="button" className="close-button noborder"></button>
					</div>

					<div className="modal-content-wrap">
						{confirmation}
					</div>

					<div className="row-flex spaced">
						<button className="themebutton" onClick={this.handleCancel}>Cancel</button>
						<button className="themebutton" autoFocus={true} onClick={this.handleProceed}>Ok</button>
					</div>
				</div>

			</div>
		);
	}
}

interface IExtendedReactConfirmProps extends ReactConfirmProps {
   heading:string;
}