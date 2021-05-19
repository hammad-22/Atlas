import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: "block",
            register: "none",
            value: ""
        }
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }

    save = () => {
        localStorage.setItem("username", this.state.value)
    }

    change = () => {
        if (this.state.login == "block") {
            this.setState({ login: "none", register: "block" })
        }
        else {
            this.setState({ login: "block", register: "none" })
        }
    }
    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@1,700&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                <h1 className="display-1">Atlas</h1>
                <form className="registerClass" id="register" style={{ display: this.state.register }}>
                    <div class="form-group">
                        <label for="inputName">Name</label>
                        <input type="text" class="form-control" id="inputName" placeholder="Enter name" />
                    </div>
                    <div class="form-group" id="usernameDiv">
                        <label for="inputUsername">Username</label>
                        <input type="text" class="form-control" id="inputUsername" placeholder="Enter username" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="phoneNumber">Phone Number</label>
                        <input type="tel" class="form-control" id="phoneNumber" placeholder="Enter Phone Number" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="login-radio">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"
                                checked />
                            <label class="form-check-label" for="exampleRadios1">
                                Male
                </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                            <label class="form-check-label" for="exampleRadios2">
                                Female
                </label>
                        </div>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">I agree to the terms and service</label>
                    </div>
                    <center><button type="submit" class="btn btn-primary" onClick={this.change}
                        style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>Register</button></center>
                </form><br /><br /><br /><br />
                <div class="login" id="loginId" style={{ display: this.state.login }}>
                    <div class="form-group" id="emailDiv">
                        <label for="loginUsername">Username</label>
                        <input type="text" class="form-control" id="loginUsername" placeholder="Enter username" onChange={this.handleChange} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                    </div><br /><br />
                    <Link to="/main"><center>
                        <button type="submit" class="btn btn-primary"
                            style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
                            onClick={this.save}>Login</button></center></Link>
                </div><br /><br />
                <h6 class="register-link">
                    <a a href="#" onClick={this.change} id="signupId" style={{ display: this.state.login }}>Register</a>
                </h6>
            </div>
        );
    }
}

export default Login;