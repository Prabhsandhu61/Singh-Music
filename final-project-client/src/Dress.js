import React from 'react'
import './Dress.module.css'
class Dress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            i: 0,
            dresses: [{
                id: "1",
                name: "suit",
                color: "blue",
                description: "aiwe e",
                style: "babu rao"
            }, {
                id: "2",
                name: "jean",
                color: "gray",
                description: "aiwe e2",
                style: "babu rao ka"
            }, {
                id: "3",
                name: "pajama",
                color: "red",
                description: "aiwe e3",
                style: "babu rao g"
            }, {
                id: "4",
                name: "jhaga",
                color: "yellow",
                description: "aiwe e4",
                style: "babu rao da"
            }, {
                id: "5",
                name: "shirt",
                color: "pink",
                description: "aiwe e5",
                style: "babu rao hai"
            }]
        }
    }
    PreviousButton = () => {
        if(this.state.i>0){
        this.setState({ i: this.state.i - 1 });
        }
    }
    NextButton = () => {
        if(this.state.i<this.state.dresses.length-1){
        this.setState({ i: this.state.i + 1 });
        }
    }

    render() {

        return (
            <div className="dress" >
                <b>List of dresses from server localhost:3001/dresses</b>
                <table>
                    <thead></thead>
                    <tbody>
                    <tr>
                        <td><b>id</b></td>
                        <td>{this.state.dresses[this.state.i].id}</td>
                    </tr>
                    <tr>
                        <td><b>Name</b></td>
                        <td>{this.state.dresses[this.state.i].name}</td>
                    </tr>
                    <tr>
                        <td><b>Color</b></td>
                        <td>{this.state.dresses[this.state.i].color}</td>
                    </tr>
                    <tr>
                        <td><b>Description</b></td>
                        <td>{this.state.dresses[this.state.i].description}</td>
                    </tr>
                    <tr>
                        <td><b>Style</b></td>
                        <td>{this.state.dresses[this.state.i].style}</td>
                    </tr>
                    </tbody>
                </table>
                <button onClick={() => this.PreviousButton()}>Previous</button>{this.state.dresses[this.state.i].id} of {this.state.dresses.length}<button onClick={()=>this.NextButton()}> Next</button>
            </div>
        )
    }
}
export default Dress;