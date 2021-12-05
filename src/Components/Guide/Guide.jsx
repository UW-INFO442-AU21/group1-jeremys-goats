import dayjs from 'dayjs';
import Select from 'react-select'
import { useState, useEffect } from 'react';
import './guide.css';
let customParseFormat = require('dayjs/plugin/customParseFormat');
let localizedFormat = require('dayjs/plugin/localizedFormat');

const GuideForm = ({
    setList,
    listData,
    type
}) => {
    const [dateType, setDateType] = useState("");
    const [date, setDate] = useState("");
    const [name, setName] = useState("");
    const [productName, setProductName] = useState("");
    const [data, setData] = useState(null);
    const [expDateFridge, setExpDateFridge] = useState("");
    const [expDateFreeze, setExpDateFreeze] = useState("");
    const [addButton, setButton] = useState(false);
    const [added, setAdded] = useState(false);

    useEffect(() => {
        fetch("csvjson.json")
                .then(res => res.json())
                .then(jsonData => 
                    jsonData.map(item => {
                        const obj = {
                            value: JSON.stringify(item),
                            label: item["Item Name"]
                        }
                        return obj;
                    })
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
        const formattedName = JSON.parse(item.value);
        console.log(formattedName);
        setName(formattedName);
        setProductName(item['Item Name']);
        setAdded(false);
    }

    const addList = {};
    const newList = [];

    const updateList = () => {
        setAdded(true);
        addList['dateType'] = dateType;
        addList['date'] = date;
        addList['name'] = name["Item Name"];
        addList['expDateFridge'] = expDateFridge;
        addList['expDateFreeze'] = expDateFreeze;
        addList['removed'] = false;
        if (listData !== undefined) {
           listData.forEach((item) => {
                if (!newList.includes(item)) {
                    newList.push(item);
                }
            });
        }
        newList.push(addList);
        // setList(newList);
        // type(dateType);
        console.log(typeof(setList));
    }

    const typeOptions = [
        {value: "use by", label: "use by"},
        {value: "sell by", label: "sell by"},
        {value: "best by", label: "best by"}
    ];
    
    return (
        <form>
            <h2>Find out what the date label actually means:</h2>
            <div className={"input-container"}>
                <Select 
                    className={"guide-select"}
                    placeholder={"What does your expiry label say?"} 
                    options={typeOptions} 
                    onChange={item => setDateType(item.value)}/>
            </div>
            <h2>Find out when your food actually goes bad:</h2>
            <br/>
            <div className="input-container">
                <Select 
                    className={"guide-select"}
                    placeholder={"Select your grocery item"} 
                    options={data} 
                    onChange={wrangleName}/>
            </div>

            <input 
            name="date" 
            type="date" 
            value={date}
            onChange={(e) => {
                setDate(e.target.value);
                setAdded(false);
            }}/>
            
            <br/>

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
                name === "" || date === "" ? `` : `${name["Item Name"]} will expire on ${expDateFridge} in the fridge and ${expDateFreeze === "Invalid Date" ? "should not be frozen" : `${expDateFreeze} in the freezer.`}.`
                }
            </p>
            <p>{dateType === "" ? `` : `Here is what ${dateType} means...`}</p>
        </form>
    );
}

export default GuideForm;