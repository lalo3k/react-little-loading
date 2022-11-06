import './loading.scss';

import React, { FunctionComponent } from 'react';

type LoadingProps = {
    color?: string;
}

const Loading: FunctionComponent<LoadingProps> = ({color = '#E2E2E2'})=> (<div className='loading' style={{color: color}} />);

export default Loading;