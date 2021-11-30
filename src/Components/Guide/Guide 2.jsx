import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import './guide.css';
var customParseFormat = require('dayjs/plugin/customParseFormat')

export function GuideForm() {
    const [dateType, setDateType] = useState("");
    const [date, setDate] = useState("");
    const [name, setName] = useState("");
    const [data, setData] = useState(null);
    const [expDateFridge, setExpDateFridge] = useState("");
    const [expDateFreeze, setExpDateFreeze] = useState("");

    useEffect(() => {
        fetch("csvjson.json")
                .then(res => res.json())
                .then(jsonData => 
                    jsonData.map(
                        item => 
                            <option key={item["Item Name"]} label={item["Item Name"]} value={JSON.stringify(item)}>
                                {item["Item Name"]}
                            </option>
                        )
                )
                .then(elementData => setData(elementData))
    }, []);

    const calcFridgeDate = () => {
        const fridgeWords = name["Refrigerator"].split(' ');
        let fridgeCase = fridgeWords.pop();
        const fridgeTime = fridgeWords.pop();

        if (fridgeCase.slice(-1) === 's') {
            fridgeCase = fridgeCase.slice(0, -1);
        }

        dayjs.extend(customParseFormat);
        const startDate = dayjs(date, "MM-DD-YYYY");

        startDate.add(fridgeTime, fridgeCase)
    }

    useEffect(() => {
        if (date !== "" && name !== "") {
            console.log(date);
        }
    }, [date, name])

    const wrangleName = item => {
        const formattedName = JSON.parse(item);
        console.log(formattedName);
        setName(formattedName);
    }

    const typeOptions = ['use by', 'sell by', 'best by'];
    
    return (
        <form>
            <select 
                className="dateType" 
                type="dateType" 
                value={dateType}
                onChange={(e) => setDateType(e.target.value)}
            >
                <option 
                    value="" 
                    disabled 
                    selected 
                    hidden
                    >use by, sell by, best by
                </option>
                {typeOptions.map(type => <option key={type}>{type}</option>)}

            </select>
            
            <br/>

            <input 
            name="date" 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}/>
            
            <br/>

            <select
                name="product" 
                type="name" 
                value={name["Item Name"]} 
                onChange={(e) => wrangleName(e.target.value)}
            >

                <option 
                    value="" 
                    disabled 
                    selected 
                    hidden
                    >Chooose a grocery item
                </option>
                {data}
            </select>
                
            <br/>

            <p>{name === "" || date === "" ? `` : `${name["Item Name"]} will expire on ${date}.`}</p>
            <p>{dateType === "" ? `` : `Here is what ${dateType} means...`}</p>
        </form>
    );
}