import * as translation from "../translations/translation.json";
import "../App.scss";
import "react-alice-carousel/lib/alice-carousel.css";
import React, {useEffect} from "react";
import {
    DataSheetGrid,
    checkboxColumn,
    textColumn,
    keyColumn,
} from 'react-datasheet-grid'

// Import the style only once in your app!
import 'react-datasheet-grid/dist/style.css'

const AdminPage = ({locale}) => {

    const [data, setData] = React.useState([]);

    const columns = [
        {
            ...keyColumn('firstName', textColumn),
            title: 'First name',
        },
        {
            ...keyColumn('lastName', textColumn),
            title: 'Last name',
        },
        {
            ...keyColumn('isParticipating', checkboxColumn),
            title: 'Participating',
        },
        {
            ...keyColumn('message', textColumn),
            title: 'Message',
        },
        {
            ...keyColumn('createdt', textColumn),
            title: 'Created date',
        },

    ]
    useEffect(() => {
        fetch("/api/guests", {method: "GET"})
            .then(response => response.json()
            .then(data => setData(data)))}, [])

        return(
        <div className="contentbox loggedin">
            <DataSheetGrid
                style={{width:'100%'}}
                value={data}
                onChange={setData}
                columns={columns}
            />
        </div>
        );

}

export default AdminPage;