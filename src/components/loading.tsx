import './loading.css';

import React, { FunctionComponent } from 'react';

type LoadingProps = {
    color?: string;
}

const Loading: FunctionComponent<LoadingProps> = ({color = '#E2E2E2'})=> (<div className='loading' style={{backgroundColor: color}} />);

export default Loading;