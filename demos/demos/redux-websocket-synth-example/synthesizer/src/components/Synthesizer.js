import React, {Component} from 'react';

import {connect} from 'react-redux';

class Synthesizer extends Component {

	constructor(props) {
		super(props);
		this.setupSynth();
		if (props.synthData) {
			this.updateSynthSettings();
		}
	}

	render() {
		return (
			<div>
			   <h2>Synth runs here</h2>
			</div>);
	}

	componentDidUpdate(prevProps, prevState) {
		this.updateSynthSettings();      
	}

	setupSynth() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        window['audioContext'] = this.audioContext;
        this.oscillator = this.audioContext.createOscillator();
        this.oscillator.type = this.props.synthData.waveForm;
        this.oscillator.frequency.value = this.props.synthData.frequency;
		this.oscillator.frequency.value = 440;
        this.oscillator.start();
        this.gainNode = this.audioContext.createGain();
        this.oscillator.connect(this.gainNode);
        this.gainNode.connect(this.audioContext.destination);
        this.gainNode.gain.value = 1;

    }

    updateSynthSettings() {
        this.gainNode.gain.value = this.props.synthData.volume / 100;
        this.oscillator.type = this.props.synthData.waveForm;
        this.oscillator.frequency.value = this.props.synthData.frequency;
	}
}

function mapStateToProps(state, ownProps) {
	return {
		synthData: state.synthData
	};
}

export default connect(mapStateToProps)(Synthesizer);

