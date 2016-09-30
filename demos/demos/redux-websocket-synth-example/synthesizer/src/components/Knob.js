import React, {Component} from 'react';
export default class Knob extends Component {

	constructor(props) {
		super(props);
		this.onKnobChanged = this.onKnobChanged.bind(this); 
	}

	onKnobChanged(event) {
		let data = Number.parseInt(event.target.value, 10);
		this.props.onKnobChanged(data);
	}

    render() {
        return (
              <input type="range"
					 min={this.props.min}
					 max={this.props.max}
                     onChange={ this.onKnobChanged } 
                     value={this.props.value} />
        );
    }
}