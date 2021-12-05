import dayjs from 'dayjs';
import Select from 'react-select'
import { useState, useEffect } from 'react';
import './guide.css';
let customParseFormat = require('dayjs/plugin/customParseFormat');
let localizedFormat = require('dayjs/plugin/localizedFormat');

const GuideForm = ({
    setList,
    listData
}) => {
    const [dateType, setDateType] = useState("");
    const [date, setDate] = useState("");
    const [name, setName] = useState("");
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
        setAdded(false);
    }

    

    const updateList = () => {
        const addList = {};
        const newList = [...listData];
        let i = 0;
        let itemInList = false;
        while (!itemInList && i < listData.length) {
            itemInList = listData[i].name === name["Item Name"] && listData[i].date === date;
            i++;
        }
        if (!itemInList) {
            addList['name'] = name["Item Name"];
            addList['date'] = date;
            addList['expDateFridge'] = expDateFridge;
            addList['expDateFreeze'] = expDateFreeze;
            
            newList.push(addList);
            setList(newList);
        }
        setAdded(true);
    }

    const typeOptions = [
        {value: "use by", label: "use by"},
        {value: "sell by", label: "sell by"},
        {value: "best by", label: "best by"}
    ];

    const dateTypeInfo = value => {
        switch(value) {
            case "use by":
                setDateType("According to the USDA, \"use by\" date is the last date recommended for the use of the product while at peak quality. It is not a safety date.");
                break;
            case "sell by":
                setDateType("According to the USDA, \"sell by\" date tells the store how long to display the product for sale for inventory management. It is not a safety date.");
                break;
            case "best by":
                setDateType("According to the USDA, \"best by\" date indicates when a product will be of best flavor or quality.  It is not a purchase or safety date.");
                break;
            default:
                break;
        }
    }
    
    return (
        <form>
            <h2>Find out what the date label actually means:</h2>
            <div className={"input-container"}>
                <Select 
                    className={"guide-select"}
                    placeholder={"What does your expiry label say?"} 
                    options={typeOptions} 
                    onChange={item => dateTypeInfo(item.value)}/>
            </div>
            <p>{dateType}</p>
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
        </form>
    );
}

export default GuideForm;