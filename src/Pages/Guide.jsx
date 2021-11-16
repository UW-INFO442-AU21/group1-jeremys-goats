import { useEffect, useState } from 'react';
import { GuideForm } from "../Components/Guide/Guide"

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
            <GuideForm/>
        </div>
    )
}

export default Guide;