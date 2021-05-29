import React, { Component } from 'react';

class Jsonlist extends Component {
    render() {

        const myList=[
            {
                city:"Bankura",
                Zip:"722101"
            },
            {
                city:"Kolkata",
                Zip:"700003"
            },
            {
                city:"Birbhum",
                Zip:"700004"
            }
        ]

        const dataItemsCity=myList.map((dataCity)=>{
            return <option>{dataCity.city}</option>
        });

        const dataItemsZip=myList.map((dataZip)=>{
            return <option>{dataZip.Zip}</option>
        });

        return (
            <div>
                <select>
                    {dataItemsCity}
                </select>
                <select>
                    {dataItemsZip}
                </select>
            </div>
        );
    }
}

export default Jsonlist;