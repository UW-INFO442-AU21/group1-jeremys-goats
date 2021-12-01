import { useState, useEffect } from 'react';
import styled from "styled-components";

export function FoodList(props) {
    //let data = props.listData;
    // const [data, setData] = useState(props.listData);
    const [rows, setRows] = useState([]);
    const [empty, setEmpty] = useState(false);

    return (
        <table className="table">
            <TableHead/>
            <TableRows listData={props.listData} setList={props.setList}/>
        </table>
    );
}

function TableHead() {
    const header = ['Product Name', 'type', 'expiration', 'fridge', 'freezer', 'remove'];
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
    const [newList, setNewList] = useState([]);
    
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

        

        console.log(listHolder, 'new list');
    }, []);

    const updateList = (item) => {
        if (data != undefined) {
            console.log(item, 'remove item');
            item.removed = true;
        }
        if (data.length === 0) {
            setRows([]);
        }
        console.log(rows.length, 'row count');
    }

    return (
        <>
        {(rows.length === 0) || data === undefined ? <tbody>{`No foods in your list. Go to the guide to add some!`}</tbody>
            : <tbody>{rows}</tbody>
        }
        </>
        // <tbody>
        //     {rows.length === 0 ? 
        //                         <h3>{`No foods in your list. Go to the guide to add some!`}</h3>
        //                         : rows}
        // </tbody>
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