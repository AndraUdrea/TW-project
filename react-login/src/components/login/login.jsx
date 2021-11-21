import React from "react";
import {LoginImg} from "../../icons/login";

export class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <LoginImg/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" placeholder="password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    Login
                </button>
            </div>
        </div>
        );
    }
}