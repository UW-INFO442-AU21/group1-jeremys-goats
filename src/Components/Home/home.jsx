import { useState, useEffect } from 'react';
import styled from "styled-components";

export function FoodList(props) {
    const [rows, setRows] = useState(0);

    const rowCount = (length) => {
        setRows(length);
        
    }

    const content = () => {
        return (
            <TableHead listData={props.listData}/>
        );
    }
    return (
        <>
        {<table className="table">
            <TableHead listData={props.listData}/>
            <TableRows listData={props.listData} setList={props.setList} rowCount={rowCount}/>
        </table>
        }
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
    
    useEffect(() => {
        let rowHolder = [];
        let listHolder = [];
        if (data != undefined) {
            data.map((item) => {
                if (!rowHolder.includes(item) && item.removed !== true) {
                    listHolder.push(item);
                    rowHolder.push(
                        <TableRow listData={item} updateList={updateList}/>
                    );
                }
            });
            props.setList(listHolder);
            setRows(rowHolder);
        }
        console.log(rowHolder.length, 'length');
        console.log(listHolder, 'new list');
    }, []);

    const updateList = (item) => {
        if (data != undefined) {
            console.log(item, 'remove item');
            item.removed = true;
        }
        console.log(rows.length, 'length remove');
    }

    return (
        <>
        <tbody>
            {rows}
        </tbody>
        </>
    );
}

function TableRow(props) {
    let item = props.listData;
    const [removed, setRemoved] = useState(item.removed);

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