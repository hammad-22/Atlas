import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.logout = this.logout.bind(this)
        this.count = 0
    }
    componentDidMount() {
        var x = localStorage.getItem("username");
        document.getElementById("usernameId").innerHTML = "Welcome " + x;

        if (localStorage.getItem("selection") == "true") {
            if (localStorage.getItem("crypto") == "true") {
                document.getElementById("cryptoId").style.display = "block";
                document.getElementById("cryptoId").innerHTML = "CRYPTO";
                document.getElementById("btcId").style.display = "block";
                document.getElementById("ethId").style.display = "block";
            }
            document.getElementById("stockSelectionId").style.display = "none";
            if (localStorage.getItem("risk") == "safe") {
                document.getElementById("tickerId").style.display = "block";
                document.getElementById("tickerId").innerHTML = "ETF";
                if (localStorage.getItem("tech") == "XLK") {
                    document.getElementById("techETFId").style.display = "block";
                }
                if (localStorage.getItem("health") == "ARKG") {
                    document.getElementById("healthETFId").style.display = "block";
                }
                if (localStorage.getItem("energy") == "XLE") {
                    document.getElementById("energyETFId").style.display = "block";
                }
            }
            else {
                document.getElementById("tickerId").style.display = "block";
                document.getElementById("tickerId").innerHTML = "STOCK";
                if (localStorage.getItem("tech") == "AAPL") {
                    document.getElementById("techId").style.display = "block";
                }
                if (localStorage.getItem("health") == "MRNA") {
                    document.getElementById("healthId").style.display = "block";
                }
                if (localStorage.getItem("energy") == "XOM") {
                    document.getElementById("energyId").style.display = "block";
                }
            }
        }
        else {
            document.getElementById("stocksContainerId").style.display = "none";
            document.getElementById("stockSelectionId").style.display = "block";
        }

        if (document.getElementById("chart")) {
            const script = document.createElement('script');
            script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
            script.async = true;
            script.innerHTML = JSON.stringify({
                "symbols": [
                    {
                        "proName": "FOREXCOM:SPXUSD",
                        "title": "S&P 500"
                    },
                    {
                        "proName": "FOREXCOM:NSXUSD",
                        "title": "Nasdaq 100"
                    },
                    {
                        "proName": "FX_IDC:EURUSD",
                        "title": "EUR/USD"
                    },
                    {
                        "proName": "BITSTAMP:BTCUSD",
                        "title": "BTC/USD"
                    },
                    {
                        "proName": "BITSTAMP:ETHUSD",
                        "title": "ETH/USD"
                    }
                ],
                "showSymbolLogo": true,
                "colorTheme": "dark",
                "isTransparent": true,
                "displayMode": "regular",
                "locale": "en"
            });

            document.getElementById("chart").appendChild(script)
        }
        if (document.getElementById("energyETFId")) {
            const script = document.createElement('script');
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js"
            script.async = true;
            script.innerHTML = JSON.stringify({

                "symbol": "TAN",
                "width": 1000,
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true

            });

            document.getElementById("energyETFId").appendChild(script)
        }
        if (document.getElementById("techId")) {
            const script = document.createElement('script');
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js"
            script.async = true;
            script.innerHTML = JSON.stringify({
                "symbol": "AAPL",
                "width": 1000,
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true

            });

            document.getElementById("techId").appendChild(script)
        }
        if (document.getElementById("techETFId")) {
            const script = document.createElement('script');
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js"
            script.async = true;
            script.innerHTML = JSON.stringify({
                "symbol": "XLK",
                "width": 1000,
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true

            });

            document.getElementById("techETFId").appendChild(script)
        }
        if (document.getElementById("healthId")) {
            const script = document.createElement('script');
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js"
            script.async = true;
            script.innerHTML = JSON.stringify({
                "symbol": "MRNA",
                "width": 1000,
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true

            });

            document.getElementById("healthId").appendChild(script)
        }
        if (document.getElementById("healthETFId")) {
            const script = document.createElement('script');
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js"
            script.async = true;
            script.innerHTML = JSON.stringify({
                "symbol": "ARKG",
                "width": 1000,
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true

            });

            document.getElementById("healthETFId").appendChild(script)
        }
        if (document.getElementById("energyId")) {
            const script = document.createElement('script');
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js"
            script.async = true;
            script.innerHTML = JSON.stringify({
                "symbol": "XOM",
                "width": 1000,
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true

            });

            document.getElementById("energyId").appendChild(script)
        }
        if (document.getElementById("btcId")) {
            const script = document.createElement('script');
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js"
            script.async = true;
            script.innerHTML = JSON.stringify({
                "symbol": "BITBAY:BTCUSD",
                "width": 1000,
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true

            });

            document.getElementById("btcId").appendChild(script)
        }
        if (document.getElementById("ethId")) {
            const script = document.createElement('script');
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js"
            script.async = true;
            script.innerHTML = JSON.stringify({
                "symbol": "BITBAY:ETHUSD",
                "width": 1000,
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true

            });

            document.getElementById("ethId").appendChild(script)
        }
        if (document.getElementById("place")) {
            const script = document.createElement('script');
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js"
            script.async = true;
            script.innerHTML = JSON.stringify({
                "symbol": "BITBAY:ETHUSD",
                "width": 1000,
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true

            });

            document.getElementById("place").appendChild(script)
        }


    }
    logout = () => {
        this.count++
        if (this.count == 1) {
            document.getElementById("usernameId").innerHTML = "Logout?";
        }
        if (this.count == 2) {
            localStorage.clear();
            window.location = "/";
            this.count = 0;
        }
    }

    save = () => {

        localStorage.setItem("selection", "true");
        var radios = document.getElementsByName('riskRadios');
        var selectedRadio = "";
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                localStorage.setItem("risk", radios[i].value);
                selectedRadio = radios[i].value;
                break;
            }
        }
        var checked = document.querySelectorAll('#sectorsSelect :checked');
        var selected = [...checked].map(option => option.value);

        for (var i = 0; i < selected.length; i++) {
            if (selectedRadio == "risky") {
                if (selected[i] == "tech") {
                    localStorage.setItem("tech", "AAPL");
                }
                if (selected[i] == "health") {
                    localStorage.setItem("health", "MRNA");
                }
                if (selected[i] == "energy") {
                    localStorage.setItem("energy", "XOM");
                }
            }
            else {
                if (selected[i] == "tech") {
                    localStorage.setItem("tech", "XLK");
                }
                if (selected[i] == "health") {
                    localStorage.setItem("health", "ARKG");
                }
                if (selected[i] == "energy") {
                    localStorage.setItem("energy", "XLE");
                }
            }

        }

        var crypto = document.getElementById("cryptoCheckbox").checked;
        if (crypto == true) {
            localStorage.setItem("crypto", "true");
        }

        window.location.reload(false)


    }


    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@1,700&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-auto">
                            <a href="main.html" style={{ textDecoration: "none" }}>
                                <h1 class="display-4">Atlas</h1>
                            </a>
                        </div>
                        <div class="col-xl-9">
                            <div id="chart" style={{ float: "right", marginTop: "17px", width: "100%" }} />
                        </div>
                        <div class="col-sm-auto">
                            <br />
                            <a href="#">
                                <h6 id="usernameId" onClick={this.logout}
                                    style={{ float: "right", textAlign: "right", marginRight: "1px" }}></h6>
                            </a>
                        </div>
                    </div>
                    <div id="stockSelectionId" style={{ display: "none" }}>
                        <form>
                            <h3>Select Risk Level</h3>
                            <div class="login-radio" style={{ marginRight: "auto", marginLeft: "auto" }}>
                                <div class="form-check" style={{ float: "right" }}>
                                    <input class="form-check-input" type="radio" name="riskRadios" id="riskRadio1" value="safe" />
                                    <label class="form-check-label" for="riskRadio1">
                                        Safe
                                    </label>
                                </div>
                                <div class="form-check" style={{ float: "right" }}>
                                    <input class="form-check-input" type="radio" name="riskRadios" id="riskRadio2" value="risky" checked />
                                    <label class="form-check-label" for="riskRadio2">
                                        Risky
                                    </label>
                                </div><br /><br />
                            </div>
                            <h3>Select Sector(s)</h3>
                            <div class="form-group">
                                <select multiple class="form-control" id="sectorsSelect"
                                    style={{ marginLeft: "auto", marginRight: "auto", width: "200px" }}>
                                    <option value="tech">Tech</option>
                                    <option value="energy">Energy</option>
                                    <option value="health">Health</option>
                                </select>
                            </div>
                            <div class="form-check form-check-inline"
                                style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center", float: "none" }}>
                                <input class="form-check-input" type="checkbox" id="cryptoCheckbox" value="true" />
                                <label class="form-check-label" for="cryptoCheckbox">Include Crypto?</label>
                            </div><br /><br />
                            <center><button type="button" class="btn btn-primary" onClick={this.save}
                                style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>Save</button></center>
                        </form>
                    </div>
                    <div id="stocksContainerId">
                        <h1 id="tickerId"></h1>
                        <div id="energyETFId" style={{ display: "none" }} />
                        <div id="techId" style={{ display: "none" }} />
                        <div id="techETFId" style={{ display: "none" }} />
                        <div id="healthId" style={{ display: "none" }} />
                        <div id="healthETFId" style={{ display: "none" }} />
                        <div id="energyId" style={{display:"none"}}/>

                        <h1 id="cryptoId" style={{display:"none"}}></h1>
                        <div id="btcId" style={{display:"none"}}/>
                        <div id="ethId" style={{display:"none"}}/>
                        <div id ="place" style={{display:"none"}}/>
                    </div>
                </div>
                <Link to="/stocks"><center><button type="button" class="btn btn-primary">Stock Favorites</button></center></Link>
            </div>
        );
    }
}

export default Main;