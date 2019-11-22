import React from 'react';
import { useGet } from 'restful-react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
    loader: () => import('./ButtonComponent'),
    loading : () => <div>loading ...</div>
})
const Main = () => {
    return (
        <div>
            <h1>My Component</h1>
            <LoadableComponent />
        </div>
    )
}

export default Main;