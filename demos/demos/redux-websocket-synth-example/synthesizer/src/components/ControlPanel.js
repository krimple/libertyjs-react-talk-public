import React, {Component} from 'react';
import {connect} from 'react-redux';
import adjustVolume from '../store/action-creators/volumeActionCreator';
import adjustFrequency from '../store/action-creators/setFrequencyActionCreator';
import adjustWaveform from '../store/action-creators/adjustWaveformActionCreator';

import Knob from './Knob';

class ControlPanel extends Component {

	render() {
		return (
			<div className="synth-control-panel">
				<div className="row">
					<form className="form-horizontal">
						<div className="form-group">
							<label htmlFor="volumeKnob">Volume</label>
							<div id="volumeKnob" className="col-md-10">
								<Knob min="0" max="100"
									  value={this.props.synthData.volume}
									  onKnobChanged={(value) => this.props.setVolume(value)} />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="frequencyKnob">Frequency</label>
							<div className="col-md-10">
								<Knob id="frequencyKnob" min="30" max="20000"
									  name={'frequency'}
									  value={this.props.synthData.frequency}
									  onKnobChanged={(value) => this.props.setFrequency(value)} />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="waveform">Waveform</label>
							<div className="col-md-10">
								<select id="waveform" value={this.props.synthData.waveForm}
									onChange={this.props.setWaveform}>
									<option value="sawtooth">Sawtooth</option>
									<option value="square">Square Wave</option>
									<option value="sine">Sine Wave</option>
									<option value="triangle">Triangle Wave</option>
								</select>
							</div>
						</div>
					</form>
				</div>
				<div className="row">
					<table className="table table-striped">
						<thead>
						<tr>
							<th>Volume</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>{this.props.synthData.volume}</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}

}

function mapStateToProps(state, ownProps) {
	return {
		synthData: state.synthData
	};
}

function mapDispatchToProps(dispatch) {
	return {
		setVolume: (value) => {
			dispatch(adjustVolume(value));
		},
		setFrequency: (value) => {
			dispatch(adjustFrequency(value));
		},
		setWaveform: (event) => {
			// note - this one uses a standard dropdown so the
			// event is passed automatically to the function prop
			// and the value lives in event.target.value for inputs, selects
			dispatch(adjustWaveform(event.target.value));
		}
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);


