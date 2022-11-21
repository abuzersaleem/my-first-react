


import React, { Component } from 'react'

export class Profiles extends Component {

    constructor(props) {
        super(props)
        this.state = {
             name: "bilal",
             email: "bilal@gmail.com",
             counter: 0
        }
    }
    NameChange(){
        this.setState({
            name: "Abuzer",
            email: "Abuzer@outlook.com"
        })
    }
    incremental(){
        this.setState({
            counter: this.state.counter + 1
        })
        console.log(this.state.counter)
    }

    render() {
        return (
            <div>
                {this.state.name}  <br/>
                {this.state.email}  <br />
                {/* {this.state.counter} */}
                <button onClick={() => this.NameChange()}>Change</button>
                {/* <button onClick={() => this.incremental()}>Counter</button> */}

            </div>
        )
    }
}

export default Profiles

