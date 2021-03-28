import React from "react";
import "./App.css";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import ExState1 from "./components/ExState1";
import ExState2 from "./components/ExState2";
import ExState3 from "./components/ExState3";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron text-center">
            <h3>React Form</h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <nav className="nav nav-tabs" id="nav-tab">
            <a href="#form1" data-toggle="tab" className="nav-link active">
              Form-1
            </a>
            <a href="#form2" data-toggle="tab" className="nav-link">
              Form-2
            </a>
            <a href="#ExState1" data-toggle="tab" className="nav-link">
              ExState1
            </a>
            <a href="#ExState2" data-toggle="tab" className="nav-link">
              ExState1
            </a>
            <a href="#ExState3" data-toggle="tab" className="nav-link">
              ExState3
            </a>
          </nav>
          <div className="tab-content" id="tabContent">
            <div
              className="tab-pane fade show active"
              id="form1"
              role="tabpanel">
              <Form1 />
            </div>
            <div className="tab-pane fade " id="form2" role="tabpanel">
              <Form2 />
            </div>
            <div className="tab-pane fade " id="ExState1" role="tabpanel">
              <ExState1 />
            </div>
            <div className="tab-pane fade " id="ExState2" role="tabpanel">
              <ExState2 />
            </div>
            <div className="tab-pane fade " id="ExState3" role="tabpanel">
              <ExState3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
