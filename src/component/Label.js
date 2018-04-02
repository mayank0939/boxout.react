import React, { Component } from 'react';
import './css/modern.css';
import { PlayButton, PauseButton } from 'react-player-controls';
class Label extends Component {
  render () {
    return (
      
              <div className="hap-middle-cont">
                <div className="hap-player-thumb" >
                <div className="hap-preloader" >
                <div className="hap-volume-wrapper">
                  <div className="hap-player-volume" data-tooltip="Volume"><i className="fas fa-volume-up hap-icon-color" /></div>
                  <div className="hap-volume-seekbar" data-is-vertical>
                    <div className="hap-volume-bg" >
                    <div className="hap-volume-level" >
                  </div>
                </div>
              </div>
      </div></div>          </div>
      </div>
      );
    }}

export default Label    ;