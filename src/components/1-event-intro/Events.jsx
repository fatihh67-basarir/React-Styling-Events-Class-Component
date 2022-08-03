
let info = "EVENTS";
const Events = () => {
    const handleClick = () => {
        alert("Btn Clicked")
    }

    const handleClear = (text) => {
        alert(text) ;
    }
    const handleChange = (e) => {
        info = "HOOKS";
        console.log(info)
        console.log(e.target)
    }
   return (
    <div className="container text-center mt-4">
        <div className="display-4 text-danger m-4">{info}</div>
        <button onClick={handleClick} className="btn btn-warning">Click</button>
        <button onClick={() => handleClear("Clear Btn pressed")} className="btn btn-dark">Clear</button>
        <button onClick={(e) => handleChange(e)} className="btn btn-danger" >Change</button>
    </div>
  )
}

export default Events