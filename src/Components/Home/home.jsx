export const FoodList = ({
    setList,
    listData
}) => {
    let data = listData;
    console.log(data);
    return (
        <>
        {
        data.length === 0 ? 
        <></>
        :
            <table className="table">
                <TableHead/>
                <TableRows listData={data} setList={setList}/>
            </table>
        }
        </>
    );
}

function TableHead() {
    const header = ['Product Name', 'Date Bought', 'Fridge', 'Freezer', 'Remove'];
    return (
        <thead className="thead">
            <tr className="trow">
                {header.map(head => <th key={head}>{head}</th>)}
            </tr>
        </thead>
    );
}

const TableRows = ({
    listData,
    setList
}) => {

    let data = listData;

    let rows = data.map((food, i) => <TableRow food={food} setList={setList} listData={listData} index={i} />)


    return (
        <tbody>
            {rows}
        </tbody>
    );
}

const TableRow = ({
    food,
    setList,
    listData,
    index
}) => {
    let item = food;

    const updateList = () => {
        const newList = [...listData];
        newList.splice(index, 1);
        setList(newList);
    }

    return (
        <tr>
            <td>{item['name']}</td>
            <td>{item['date']}</td>
            <td>{item['expDateFridge']}</td>
            <td>{item['expDateFreeze'] === "Invalid Date" ? "Should Not Be Frozen" : `${item['expDateFreeze']}`}</td>
            <td>
                <button 
                type='button' 
                value={index} 
                onClick={updateList}>
                    Remove
                </button>
            </td>
        </tr>
    );
}