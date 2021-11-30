import { useState, useEffect } from 'react';
import styled from "styled-components";

export function FoodList(props) {
    const header = ['Product Name', 'expiration', 'fridge', 'freezer', 'remove'];
    let data = props.listData;
    const [rows, setRows] = useState([]);
    let removeList = {};
    const newList = [];

    const updateList = (removeList) => {
        rows.map((food) => {
            if (!newList.includes(food) && (food != removeList)) {
                newList.push(food);
                console.log(newList, 'updated');
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
                        onClick={updateList(item)}/>
                    </td>
                </tr>
            )
        });
    }

    return (
        <table className="table">
            <thead className="thead">
                <tr className="trow">
                    {header.map(head => <th>{head}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}