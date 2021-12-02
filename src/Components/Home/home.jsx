import { useState, useEffect } from 'react';

export function FoodList(props) {
    let data = props.listData;

    console.log(data, 'export data');
    return (
        <>
        <table className="table">
            {data.length == 0 ? <p>* Go to the Guide to add expiry foods *</p> :
                <div>
                    <TableHead/>
                    <TableRows listData={data} setList={props.setList}/>
                </div>}
        </table>
        </>
    );
}

function TableHead() {
    const header = ['Product Name', 'Type', 'Expiry', 'Fridge', 'Freezer', 'Remove'];
    return (
        <thead className="thead">
            <tr className="trow">
                {header.map(head => <th>{head}</th>)}
            </tr>
        </thead>
    );
}

function TableRows(props) {
    let data = props.listData;
    const [rows, setRows] = useState([]);
    console.log(data.length, 'rows parent');
    
    useEffect(() => {
        let rowHolder = [];
        let listHolder = [];
        if (data != undefined) {
            data.map((item) => {
                if (!rowHolder.includes(item) && item.removed !== true) {
                    listHolder.push(item);
                    rowHolder.push(
                        <TableRow food={item} updateList={updateList}/>
                    );
                }
            });
        } else {
            props.rowCount(data.length);
        }
        props.setList(listHolder);
        // props.rowCount(listHolder.length);
        setRows(rowHolder);
        console.log(rowHolder.length, 'length');
        console.log(listHolder, 'new list');
    }, []);

    const updateList = (item) => {
        // if (data != undefined || data.length !== 0) {
        //     console.log(item, 'remove item');
        //     
        // }
        item.removed = true;
        console.log(item, 'remove item');
        let newList = data.filter(row => row.removed != true);
        console.log(data, 'rows send');
        props.setList(newList);
    }

    console.log(data.length, 'rows send');

    return (
        <>
        <tbody>
            {rows}
        </tbody>
        </>
    );
}

function TableRow(props) {
    let item = props.food;
    const [removed, setRemoved] = useState(false);

    const updateList = () => {
        setRemoved(true);
        item['removed'] = removed;
        props.updateList(item);
    }

    return (
        <>
        {removed ? null : 
            <tr>
                <td>{item['name']}</td>
                <td>{item['dateType'] === '' ? `---` : item['dateType']}</td>
                <td>{item['date']}</td>
                <td>{item['expDateFridge']}</td>
                <td>{item['expDateFreeze']}</td>
                <td>
                    <input 
                    type='button' 
                    value={`X`} 
                    onClick={updateList}/>
                </td>
            </tr>
        }
        </>
    );
}