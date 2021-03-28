import React, {useState} from "react";

export default function ExState1(props) {

    const [count, setCount] = useState(1); //number
    const [title, setTitle] = useState('MEAN FULLSTACK'); //string
    const [txt, setTxt] = useState(false)

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-12">
                    <div className="jumbotron text-center">
                        <h3>React State Hooks</h3>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <h2 className="display-3">
                        count = {count}
                    </h2>
                    <button className="btn btn-info" onClick={() => setCount(count+1)} >Add + 1</button>
                    <button className="btn btn-warning" onClick={() => setCount(count+10)} >Add + 10</button>
                    <button className="btn btn-danger" onClick={() => setCount(count+100)} >Add + 100</button>
                    <hr/>

                    <h1 className="display-3">{title}</h1>
                    <button className="btn btn-online-info" onClick={()=> setTitle("MERN STACK")}>Change Title</button>

                    <hr/>

                    <h3 className="display-3">{txt ? ( <span className="text-success" > True </span>) : (<span className="text-danger">False</span>)}</h3>

                    <button className="btn btn-outline-info" onClick={() => setTxt(!txt)}>Toggle state</button>
                </div>
            </div>
        </React.Fragment>
    )
}