import React from 'react';
import _ from 'lodash';
import Agenda from './agenda';
import Slide from './slide';
import Switcher from './switcher';
import KeyboardSwitcher from './keyboardSwitcher';
import * as presentationData from '../presentationSchema';

let Presentation = React.createClass({

    getInitialState () {
        return {
            currentSlideNumber: 0,
            isAgendaOpen: false
        };
    },

    _handleSlideChange (newSlideNumber) {
        this.setState(() => {
            return {
                currentSlideNumber: newSlideNumber
            };
        });
    },

    _toggleAgenda () {
        this.setState((oldState) => {
            return {
                isAgendaOpen: !oldState.isAgendaOpen
            };
        });
    },

    render () {
        return (
            <div className="Presentation">
                <Agenda
                    currentSlideNumber={this.state.currentSlideNumber}
                    handleItemClick={this._handleSlideChange}
                    isAgendaOpen={this.state.isAgendaOpen}
                    items={presentationData.agendaItems}
                />

                <Slide
                    slideData={presentationData.slides[this.state.currentSlideNumber]}
                />

                <Switcher
                    currentSlideNumber={this.state.currentSlideNumber}
                    handleSlideChange={this._handleSlideChange}
                    slidesCount={presentationData.slides.length}
                    toggleAgenda={this._toggleAgenda}
                />

                <KeyboardSwitcher
                    currentSlideNumber={this.state.currentSlideNumber}
                    handleSlideChange={this._handleSlideChange}
                    slidesCount={presentationData.slides.length}
                    toggleAgenda={this._toggleAgenda}
                />
            </div>
        );
    }

});

export default Presentation;
