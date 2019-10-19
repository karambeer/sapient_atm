import React, { Component } from 'react';

class UserInput extends Component {
    render() {
        let {change, calculate} = this.props;
        return (
            <div className="left">
                <h2> Welcome To ATM</h2>
                <label>Enter the Amount</label><br/>
                <input type="number" min="0" onChange={change}/><br/>
                <input type="button" value="Get Money" onClick={calculate}/>
            </div>
        )

    }
}
export default UserInput;