const Displaydata = (prop) => {
    return(
        <>
         <li>
            <div>
                <img src={prop.ImageUrl} alt={prop.Name}/>
                <h1>{prop.Name}</h1>
                <p>{prop.ShortDesc}</p>
                <button>View</button>
            </div>
         </li>
        </>
    )
}

export default Displaydata;