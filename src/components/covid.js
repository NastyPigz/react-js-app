import React, {useState, useEffect} from 'react';

import { Cards, Charts } from './covidComp';
import { fetchData } from './api';

function Covid19() {
    const [data, setData] = useState({});
    useEffect(() => {
        (async () => {
        const fetchedData = await fetchData();
        setData(fetchedData);
        })()
    }, [])
    return (
        <div className="container">
            <Cards data={data} />
            <Charts />
        </div>
    )
}

export {Covid19};

