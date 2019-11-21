import React from 'react';
import { useGet } from 'restful-react';
const Main = () => {
    const { error, loading, data } = useGet({path: '/breeds/image/random'})
    return (
        <div>
            <h1>Hello React Conf !</h1>
            {error && <h1>{error.message}</h1>}
            {loading && <h2>Loading ...</h2>}
            {data && <img alt="good boye" src={data.message} />}
        </div>
    )
}

export default Main;