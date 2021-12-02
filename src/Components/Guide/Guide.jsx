import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import './guide.css';
var customParseFormat = require('dayjs/plugin/customParseFormat');
var localizedFormat = require('dayjs/plugin/localizedFormat');

export function GuideForm(props) {
    const [dateType, setDateType] = useState("");
    const [date, setDate] = useState("");
    const [name, setName] = useState("");
    const [data, setData] = useState(null);
    const [expDateFridge, setExpDateFridge] = useState("");
    const [expDateFreeze, setExpDateFreeze] = useState("");
    const [addButton, setButton] = useState(false);
    const [added, setAdded] = useState(false);
    const addList = {};
    const newList = [];

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



    useEffect(() => {
        const calcDate = (type, setFn) => {
            const fridgeWords = name[type].split(' ');
            let fridgeCase = fridgeWords.pop();
            const fridgeTime = fridgeWords.pop();
    
            if (fridgeCase.slice(-1) === 's') {
                fridgeCase = fridgeCase.slice(0, -1);
            }
    
            dayjs.extend(customParseFormat);
            dayjs.extend(localizedFormat);
            const startDate = dayjs(date, "YYYY-MM-DD");
            const newDate = startDate.add(fridgeTime, fridgeCase);
    
            setFn(newDate.format("LL"));
        }

        if (date !== "" && name !== "") {
            calcDate("Refrigerator", setExpDateFridge);
            calcDate("Freezer", setExpDateFreeze);
            setButton(true);
        }
    }, [date, name])

    const wrangleName = item => {
        const formattedName = JSON.parse(item);
        setName(formattedName);
        setAdded(false);
    }

    const updateList = () => {
        setAdded(true);
        addList['dateType'] = dateType;
        addList['date'] = date;
        addList['name'] = name["Item Name"];
        addList['expDateFridge'] = expDateFridge;
        addList['expDateFreeze'] = expDateFreeze;
        addList['removed'] = false;
        if (props.listData != undefined) {
            props.listData.map((item) => {
                if (!newList.includes(item)) {
                    newList.push(item);
                }
            });
        }
        newList.push(addList);
        console.log(newList);
        console.log(newList.length, 'newList length')
        props.setList(newList);
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
            onChange={(e) => {
                setDate(e.target.value);
                setAdded(false);
            }}/>
            
            <br/>

            <select
                name="product" 
                type="name" 
                value={name["Freezer"]} 
                onChange={(e) => {
                    wrangleName(e.target.value)
                    setAdded(false);
                }}
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
            {addButton ?
            <input 
            name="add" 
            type="button" 
            value={added ? 'Added!' : `Add to my list`}
            onClick={updateList}/> 
                : null
            }
            <br/>
            <p>
                {
                name === "" || date === "" ? `` : `${name["Item Name"]} will expire on ${expDateFridge} in the fridge and ${expDateFreeze} in the freezer.`
                }
            </p>
            <p>{dateType === "" ? `` : `Here is what ${dateType} means...`}</p>
        </form>
    );
}