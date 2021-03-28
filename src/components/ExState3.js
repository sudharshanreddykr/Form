import React from "react";
import { useInput } from "./helper/Input-hooks";

export default function ExState3() {
  const { value: name, reset: resetName, bind: bindName } = useInput("");
  const { value: email, reset: resetEmail, bind: bindEmail } = useInput("");
  const { value: mobile, reset: resetPhone, bind: bindMobile } = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      mobile: mobile,
    };
    console.log("output=", data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron text-center">
            <h1 className="display-3">useState in multiple Input</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form action="" onSubmit={submitHandler}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    {...bindName}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="name"
                    {...bindEmail}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    id="mobile"
                    {...bindMobile}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="SignUp"
                    className="btn btn-outline-warning"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
