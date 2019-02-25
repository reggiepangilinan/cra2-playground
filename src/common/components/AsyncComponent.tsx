import React from 'react'
import Loadable from 'react-loadable';

const AsyncComponent = (func : any) => Loadable({
    loader: func,
    delay: 300,
    loading() {
        return <div>Loading Async Component...</div>;
    }
});

export default AsyncComponent;