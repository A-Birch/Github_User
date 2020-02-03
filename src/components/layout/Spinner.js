import React, { Fragment } from 'react';
import spinner from './spinner-icon.gif';

const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt="Loading..." style={{width: '200px', margin: 'auto', display: 'block' }}/>
        </Fragment>
    )
}

export default Spinner;