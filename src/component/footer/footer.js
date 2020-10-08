
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer-style.css';

export default class Footer extends Component {
    render() {
        return (
            <div className='app_footer'>
                <div>
                    <FontAwesomeIcon className='icon' icon='copyright' />
                    Thinkful 2020
                </div>
            </div>
        );
    };
};