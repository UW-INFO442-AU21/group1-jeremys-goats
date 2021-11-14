import { useEffect, useState } from 'react';
import './guide.css';

export function GuideForm() {
    const [dateType, setDateType] = useState("");
    const [date, setDate] = useState([]);
    const [name, setName] = useState("");

    const typeOptions = ['use by', 'sell by', 'best by'];
    
    return (
        <form>
            <select className="dateType" type="dateType" value={dateType}
                onChange={(e) => setDateType(e.target.value)}>
                <option value="" disabled selected hidden>use by, sell by, best by</option>
                {typeOptions.map(type => <option key={type}>{type}</option>)}
            </select><br/>
            <input name="date" type="date" value={date}
                onChange={(e) => setDate(e.target.value)}/><br/>
            <input name="product" type="text" value={name} placeholder="product name"
                onChange={(e) => setName(e.target.value)}/><br/>
            <button type="submit">Submit</button>
            <p>This {name} expires on {date}.</p>
            <p>Here is what {dateType} means...</p>
        </form>
    );
}