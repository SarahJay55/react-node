import React, { Component } from 'react';

class Packing extends Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }
    render() {
        return (
            <div className="packing">
                <h1 className="packing">Stuff to Pack!</h1>
                <input className="packing" type='text' value={this.state.input} onChange={(e) => {
                    this.setState({
                        input: e.target.value
                    })


                }
                }
                />
                <button onClick={() => this.props.packingItem(this.state.input)} >Add!</button>

                <ul>
                    {
                        this.props.packingList.map((item, i, arr) => {
                            return (
                                <li onClick={this.props.packing} key={i}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}


    export default Packing;