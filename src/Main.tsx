import React, { Suspense } from 'react';
import { useGet } from 'restful-react';
import Loadable from 'react-loadable';

/**
 * 1
 * Example dynamic import with react-loadable
 */
/* const LoadableComponent = Loadable({
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
} */

/**
 * 2
 * Example dynamic import with Suspense and React.lazy
 * Suspense used with fallback prop, while component is loading
 */

const ButtonComponent = React.lazy(() => import('./ButtonComponent'));
const Main = () => {
    return (
        <div>
            <h1>My Component</h1>
            <Suspense fallback={<div>Loading ...</div>}>
                <ButtonComponent />
            </Suspense>
        </div>
    )
}



export default Main;