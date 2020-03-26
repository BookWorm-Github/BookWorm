import React, {Component} from 'react'

import PropTypes from 'prop-types'
import './wormhole.css'

class WormHole extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
	    return (
		    <div className = 'wormhole' >
			    <a href="https://google.com"> Loading WormHole...</a>
		    </div>
	    )
    }
}

export default WormHole;