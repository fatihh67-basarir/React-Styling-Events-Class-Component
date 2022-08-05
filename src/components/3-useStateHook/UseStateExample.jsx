import { useState } from "react";

const UseStateExample = () => {
    const [count, setCount] = useState(0);

    const [info , setInfo] = useState({
        name: "Ahmet Yilmaz",
        email: "at@gmail.com",
        age: 32,
    });

    const inc = () => {
        setCount(count + 1)
    }

    const dec = () => {
        setCount(count - 1)
    }

    const incAge = () => {
        // setInfo(info.age + 1);
        // console.log(info.age);
        // setInfo({name: "mehmet yilmaz", email: "my@gmail.com" , age: 44 });
        setInfo({...info, age:info.age + 1 });
    };

    console.log(info);

    
  return (
    <div className="container text-center mt-4">
    <h1 className="display-4 text-danger m-4">USESTATE COUNT:{count} </h1>
    <button onClick={inc} className="btn btn-success">INC</button>
    <button onClick ={() => setCount(0)} className="btn btn-danger">CLR</button>
    <button onClick={dec}  className="btn btn-warning">DEC</button>

    <section>
    <h1 className="display-4 text-danger m-4">USESTATE OBJECT </h1>
    <h2 className="display-4 text-danger m-4"> {info.name} </h2>
    <h3 className="display-4 text-danger m-4">{info.email} </h3>
    <h3 className="display-4 text-danger m-4">{info.age} </h3>
    <button onClick={incAge} className="btn btn-info">inc age</button>
    </section>
    
    </div>


  )
}

export default UseStateExample