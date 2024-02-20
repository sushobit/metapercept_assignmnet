import React, { UseEffect, UseState } from "react";


const apiData = () => {
    const [data, setData] = UseState([])

    UseEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await 
                fetch('https://raw.githubusercontent.com/metapercept/CodeExcercise/master/Excercise-1/data/class.json')
                const result = await response.json()
                setData(result)
            } catch (error) {
                console.error('error', error)
            }
        }
        fetchdata()
    }, [])

    return (
        <div>
            <ul>
                {data.map(item => (
                    <li key={item.ID}>
                        <strong>{item.Name}</strong>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default apiData;