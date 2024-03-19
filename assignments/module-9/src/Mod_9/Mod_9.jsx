import React,{Component} from 'react'

export default class Mod_9 extends Component  {

    constructor()
    {
        super();
        this.state = {
            number : 1
        }
    };
 
render(){
    return (
        <div>
            <button onClick={() => this.setState({ number: this.state.number + 1 })}> Plus </button>
            <h1>{this.state.number}</h1>
            <button onClick={() => this.setState({ number: this.state.number - 1 })}> Minus </button>
        </div>
    )
}

}