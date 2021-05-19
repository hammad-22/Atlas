import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

class StocksComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stocks: [],
            tempStock: "",
            tempVol: "",
            delStock: "",
            delVol: "",
            updateStock: "",
            updateVol: "",
            updateID: 0
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/stocks/')
            .then(res => res.json())
            .then(data => {
                this.setState(
                    (prevState) => { return { stocks: data.info } }
                )
            });
    }
    postData(event) {
        event.preventDefault();
        let data = { name: this.state.tempStock, vol: this.state.tempVol };
        let options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch('http://localhost:3001/stocks/', options).then();
        window.location.reload(false);
    }
    delData() {
        let data = { name: this.state.delStock, vol: this.state.delVol };
        let options = {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch('http://localhost:3001/stocks/', options);

    }
    updateData() {
        let data = { name: this.state.updateStock, vol: this.state.updateVol, id: this.state.updateID };
        let options = {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch('http://localhost:3001/stocks/', options);

    }
    getData() {
        fetch('http://localhost:3001/stocks/')
            .then(res => res.json())
            .then(data => {
                this.setState(
                    (prevState) => { return { vol: data.info } }
                )
            });
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
      }

    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@1,700&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                <h1 className="display-1">Atlas</h1>
                <h1 className="display-5">Stock Tracker</h1>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="display-5">Post stock information</h1>
                            <form className="registerClass" onSubmit={(e) => { this.postData(e) }}>
                                <div className="form-group">
                                    <label for="inputName">Enter Stock</label>
                                    <input className="form-control" type="text" name="tempStock" value={this.state.tempStock} onChange={(e) => { this.handleChange(e) }}></input>
                                    <label for="inputName">Enter Volume</label>
                                    <input className="form-control" type="text" name="tempVol" value={this.state.tempVol} onChange={(e) => { this.handleChange(e) }}></input>< br />
                                    <input className="form-control" type="submit" value="Submit"></input>
                                </div>
                            </form>
                        </div>
                        <div className="col">
                            <h1 className="display-5">Delete stock information</h1>
                            <form className="registerClass" onSubmit={() => { this.delData() }}>
                                <div className="form-group">
                                    <label for="inputName">Enter Stock</label>
                                    <input className="form-control" type="text" name="delStock" value={this.state.delStock} onChange={(e) => { this.handleChange(e) }}></input>
                                    <label for="inputName">Enter Volume</label>
                                    <input className="form-control" type="text" name="delVol" value={this.state.delVol} onChange={(e) => { this.handleChange(e) }}></input>< br />
                                    <input className="form-control" type="submit" value="Submit"></input>
                                </div>
                            </form>
                        </div>
                        <div className="col">
                            <h1 className="display-5">Update stock value information</h1>
                            <form className="registerClass" onSubmit={() => { this.updateData() }}>
                                <div className="form-group">
                                    <label for="inputName">Enter Stock</label>
                                    <input className="form-control" type="text" name="updateStock" value={this.state.updateStock} onChange={(e) => { this.handleChange(e) }}></input>
                                    <label for="inputName">Enter Volume</label>
                                    <input className="form-control" type="text" name="updateVol" value={this.state.updateVol} onChange={(e) => { this.handleChange(e) }}></input>< br />
                                    <input className="form-control" type="submit" value="Submit"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <h4 style={{color:"white", marginLeft:"22px"}}>Watchlist</h4>
                <ol>
                {this.state.stocks.map((stock) =>
                    <li style={{color:"white"}} key = {stock.id}> {stock.name} {stock.vol} shares</li>)}
                </ol>
            </div>
        )
    }

}

export default StocksComponent;