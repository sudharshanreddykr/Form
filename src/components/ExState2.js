import React from 'react';
import {useInput} from "./helper/Input-hooks";

export default function ExState2() {
    const {value, bind, reset} = useInput("admin@be-practical");

    const submitHandler = (e) =>  {
        e.preventDefault();
        alert("value = " + value);
        reset();
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron text-center">
              <h3 className="display-3">useState in forms</h3>
              <h3>{value}</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <form action="" onSubmit={submitHandler}>
                  <div className="form-group">
                    <div htmlFor="email">email id</div>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      {...bind}
                      required
                    />
                  </div>
                        
                  <div className="form-group">
                    <input type="submit" className="btn btn-outline-success" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


