import React, { Component } from 'react';

class List extends Component {

    mydataChield=(data)=>{
        return <option>{data}</option>
    }
    
    render() {

        const contry=['Bangladesh','India','Canada','China'];
        const dataItem= contry.map(this.mydataChield);


        return (
            <div>
                <select>
                    {dataItem}
                </select>
            </div>
        );
    }
}

export default List;