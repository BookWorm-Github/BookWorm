/*global chrome*/
import React, { Component } from 'react';
import './Desktop.css';
// import BgColor from "./ColorCustomizer/BackgroundColor"

class Desktop extends Component{

	constructor(props) {
		super(props);
		this.state = {
			windowScreenShots: {},
		}
	}

	componentDidMount = () => {
		chrome.runtime.sendMessage({rq: 'DesktopInfo'}, this.cbDesktopCapture);
	}

	cbDesktopCapture = (response) => {//TODO: tab view is possible to obtain and display. BUT to get the updated window view need to open newtab twice?
		console.log(response);
		this.setState({windowScreenShots: response.windowScreenShots}, () => {
			console.log(this.state);
		});
	}

	render(){
		return (
			<div>
				{
					this.state.windowScreenShots ?
						Object.entries(this.state.windowScreenShots).map(([windowId, dataUrl]) =>
							<img id={windowId} className={'Desktop'} src={dataUrl} alt={'Suppose to be tab image'}/>
						) :
						<p>No images at the moment</p>
				}
			</div>
		)
	}
}


export default Desktop;
