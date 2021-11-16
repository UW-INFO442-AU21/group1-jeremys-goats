import { useEffect, useState } from 'react';

const Guide = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("csvjson.json")
                .then(res => res.json())
                .then(jsonData => setData(jsonData));
    }, [])

    console.log(data)
    return (
        <div>
            <p>Guide</p>
        </div>
    )
}

export default Guide;