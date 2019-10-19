import React, { Component } from 'react';
import { tsOptionalType } from '@babel/types';

class UserOutput extends Component {
    render() {
        let {total , notes} = this.props;
        let keys= Object.keys(notes);
        let list = keys.map(key =>{
            return (<li>{notes[key]} notes of Rs. {key}</li>);
        })
        return (
            notes?
            <div className="right">
                You will get following amount:
                <ul>
                    {list}
                </ul>
                Total notes dispensed are:{total}
            </div>:
            ''
        )

    }
}
export default UserOutput;