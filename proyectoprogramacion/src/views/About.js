import React, { Component } from 'react';
import './About.css';

import range from 'lodash/range';
import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';

const noOfCards = 3;
const chevronWidth = 1;




export default class About extends Component {
    state = {
        activeItemIndex: 0,
        isMobile: window.innerWidth < 768
    };

    onChange = value => this.setState({ activeItemIndex: value });
  
    render() {
        return (
        <div className="container">
            <ItemsCarousel
            gutter={10}
            numberOfCards={this.state.isMobile ? 1 : 3}
            activeItemIndex={this.state.activeItemIndex}
            requestToChangeActive={this.onChange}
            rightChevron={<i className="fas fa-chevron-right"></i>}
            leftChevron={<i className="fas fa-chevron-left"></i>}
            chevronWidth={chevronWidth}
            outsideChevron
            infiniteLoop={true}
            >
                <div className="informaciones caja1" align="center">
            <img alt="" className="rounded-circle imagen-circular" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="Generic placeholder image" width="140" height="140"/>
            <h4>Informaciones 1</h4>
            <p>
            Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
            </p>
        </div>
        <div className="informaciones caja1" align="center">
            <img alt="" className="rounded-circle imagen-circular" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="Generic placeholder image" width="140" height="140"/>
            <h4>Informaciones 2</h4>
            <p>
            Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
            </p>
        </div>
        <div className="informaciones caja1" align="center">
            <img alt="" className="rounded-circle imagen-circular" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="Generic placeholder image" width="140" height="140"/>
            <h4>Informaciones 3</h4>
            <p>
            Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
            </p>
        </div>
        <div className="informaciones caja1" align="center">
            <img alt="" className="rounded-circle imagen-circular" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="Generic placeholder image" width="140" height="140"/>
            <h4>Informaciones 4</h4>
            <p>
            Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
            </p>
        </div>
            </ItemsCarousel>
        </div>
        );
    }
}
