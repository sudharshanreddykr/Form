import React, { Component } from "react";

export default class Form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      cnPass: "",
      agree: true,
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAgree = this.onChangeAgree.bind(this);
    this.onChangeCnPass = this.onChangeCnPass.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePass(e) {
    this.setState({
      pass: e.target.value,
    });
  }

  onChangeCnPass(e) {
    this.setState({
      cnPass: e.target.value,
    });
  }
  onChangeAgree(e) {
    this.setState({
      agree: e.target.value,
    });
  }
  submitHandler(e) {
    e.preventDefault();
    const data = {
      email: this.state.email,
      pass: this.state.pass,
      cnPass: this.state.cnPass,
      agree: this.state.agree,
    };

    console.log("final output =", data);
  }

  render() {
    return (
      <div className="row">
        <div col-md-6 className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form action="" onSubmit={this.submitHandler}>
                <div className="m-auto">
                  <div className="from-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                    />
                  </div>
                  <div className="from-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="password"
                      placeholder="password"
                      value={this.state.pass}
                      onChange={this.onChangePass}
                    />
                  </div>
                  <div className="form-check">
                    <label htmlFor="cnPassword">Password</label>
                    <input
                      type="password"
                      name="password2"
                      className="form-control"
                      id="cnPassword"
                      placeholder="password Again"
                      value={this.state.cnPass}
                      onChange={this.onChangeCnPass}
                    />
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="checkbox"
                      className="form-check-input"
                      id="remember"
                      value={this.state.agree}
                      onChange={this.onChangeAgree}
                    />
                    <label htmlFor="remember" className="form-check-label">
                      I accept terms and conditions
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary float-right">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
