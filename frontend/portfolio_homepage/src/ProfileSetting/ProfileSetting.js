import React, {Component} from 'react';
import {bw_auth} from "../firebase/init";
import setting from "../Images/profile-setting.png";
import header from "../Images/header.png";
import './profileSetting.css';

class ProfileSetting extends Component {

	constructor(props) {
		super(props);
		this.state = {
			settingsEnabled: false
		}
	}
	showSettingBox = (e) => {
		e.preventDefault();
		this.setState({
			settingsEnabled : true
		}, () => {
			document.addEventListener('click', this.closeSettingBox)
		})
	}

	closeSettingBox = (e) => {
		if (!this.settingBox.contains(e.target)){
			this.setState({
				settingsEnabled: false
			}, () => {
				document.removeEventListener('click', this.closeSettingBox)
			})
		}
	}

	render() {
		return (
			<div>
				<div className="header">
					<input type="image" src={header} alt="" className="logo"/>
					<input type="image" src={setting} alt="" className="setting" onClick={this.showSettingBox}/>
				</div>
				{this.state.settingsEnabled ?
					<div className="profile-setting" ref={(element) => {
						this.settingBox = element;
					}}>
						<li>
							<button> Account Settings </button>
							<button> Switch User </button>
							<button onClick={() => {
								bw_auth.signOut().then(() => {
										this.props.updateUser(null);
									},
									onRejected => {
										//console.log("log out unsuccessful")
										//console.log(onRejected)
									}
								);
							}}> Log Out </button>
						</li>
					</div> :
					null
				}
			</div>
		)
	}
}

export default ProfileSetting;
