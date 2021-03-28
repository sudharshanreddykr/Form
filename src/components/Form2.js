import React, { Component } from 'react'

export default class Form2 extends Component {
  
    constructor(props) {
      super(props);
        this.email = React.createRef();
        this.pass = React.createRef();
        this.cnPass = React.createRef();
        this.agree = React.createRef();
        this.submitHandler =this.submitHandler.bind(this);
    }

    submitHandler(e) {
      e.preventDefault();
      const data = {
        email: this.email.current.value,
        pass: this.pass.current.value,
        cnPass: this.cnPass.current.value,
        agree: this.agree.current.value
      };
      console.log("final output = ",data);
    }

        render() {
            return (
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-body">
                                
                                <form onSubmit={this.submitHandler}> 
                                    <div className="m-auto">
                                        <div className="form-group">
                                          <label htmlFor="email">Email address</label>
                                          <input type="email" name="email" className="form-control" id="email"  ref={this.email}  placeholder="Enter email" />
                                        </div>
                                        <div className="form-group">
                                          <label htmlFor="password">Password</label>
                                          <input type="password" name="password" className="form-control" id="password" ref={this.pass} placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                          <label htmlFor="cnPassword">Password</label>
                                          <input type="password" name="password2" className="form-control" id="cnPassword" ref={this.cnPass} placeholder="Password Again" />
                                        </div>
                                        <div className="form-check">
                                          <input type="checkbox" name="checkbox" className="form-check-input" ref={this.agree}  id="remember" />
                                          <label className="form-check-label" htmlFor="remember">
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
            )
        }
}
