import { useState, useEffect } from 'react';
import styled from "styled-components";

export function FoodList(props) {
    let data = props.listData;
    const [rows, setRows] = useState([]);
    let remove = {};
    const newList = [];

    const updateList = (item) => {
        remove = item;
        console.log(remove, 'remove this');
        rows.map((food) => {
            if (!newList.includes(food) && (food != remove)) {
                newList.push(food);
            }
        });
    }

    console.log(data);
    if (data != undefined) {
        data.map((item) => {
            rows.push(
                <tr>
                    <td>{item['name']}</td>
                    <td>{item['date']}</td>
                    <td>{item['expDateFridge']}</td>
                    <td>{item['expDateFreeze']}</td>
                    <td>
                        <input 
                        type='button' 
                        value='x' 
                        onClick={updateList(item.target)}/>
                    </td>
                </tr>
            )
        });
    }

    return (
        <table className="table">
            <TableHead/>
            <TableRows trows={rows} update={updateList}/>
        </table>
    );
}

function TableHead() {
    const header = ['Product Name', 'expiration', 'fridge', 'freezer', 'remove'];
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
    let rows = props.trows;
    console.log(rows);
    return (
        <tbody>
            {rows.length == 0 ? `There are no foods in your list. Go to the guide to add some!` : rows}
        </tbody>
    );
}