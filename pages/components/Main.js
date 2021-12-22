import { useState } from "react";
import Table from "./Table";
import Footer from "./Footer";
import axios from "axios";
import { useEffect } from "react";

const dbResponse = 'https://coockies-yousef.herokuapp.com/api/v1/cookie_stands/';

const Main = (props) => {
    const [data, setData] = useState([])

    let totalHour = []
    let totalOftotals = 0
    const config = {
        headers: { "Authorization": `Bearer ${props.token}` }
    }
    axios.get(dbResponse, config).then(res => {
        setData(res.data);
    })


    for (let i = 0; i < 14; i++) {
        let sum = 0;
        for (let j = 0; j < data.length; j++) {
            sum += data[j].hourly_sales[i]
        }
        totalOftotals += sum
        totalHour.push(sum)
    }

    totalHour.push(totalOftotals);
    let hourly = totalHour;



    const formHandler = (e) => {
        e.preventDefault();
        let cookiePerHour = []
        let totalDay = 0
        let min = Number(e.target.min.value)
        let max = Number(e.target.max.value)
        let avg = Number(e.target.avg.value)

        const random = (min, max, avg) => {
            return (Math.floor(Math.random() * max) + min) * avg
        }

        for (let i = 0; i < 14; i++) {
            let numCookie = random(min, max, avg)
            cookiePerHour.push(numCookie);
            totalDay += numCookie
        }
        console.log(cookiePerHour);
        cookiePerHour.push(totalDay)
        const configPost = {
            method: "POST",
            url: 'https://coockies-yousef.herokuapp.com/api/v1/cookie_stands/',
            headers: { "Authorization": `Bearer ${props.token}` },
            data: {
                location: e.target.location.value,
                description: '',
                hourly_sales: cookiePerHour,
                minimum_customers_per_hour: min,
                maximum_customers_per_hour: max,
                average_cookies_per_sale: avg,
                owner: 1
            }
        }

        axios(configPost)
    }

    const deleteHandler = async (id) => {
        const config = {
            method: "DELETE",
            url: `https://coockies-yousef.herokuapp.com/api/v1/cookie_stands/${id}`,
            headers: { "Authorization": `Bearer ${props.token}` }
        }
        await axios(config)
    }

    return (<>
        <main className="flex flex-col items-center m-10 w-full text-center">
            <form onSubmit={formHandler} className='bg-red-500 p-4 w-3/4 rounded-lg'>

                <h2 className='text-3xl font-mono font-bold '>Create Cookie Stand</h2>

                <label > location</label>
                <input type="text" name="location" className='flex-auto w-11/12 m-3' />

                <div className='flex w-full'>

                    <div className='flex flex-col w-3/12'>
                        <label > Min. Cutomers Per Hour</label>
                        <input type="number" name='min' className="m-3" />
                    </div>

                    <div className='flex flex-col w-3/12'>
                        <label > Max. Cutomers Per Hour</label>
                        <input type="number" name='max' className="m-3" />
                    </div>

                    <div className='flex flex-col w-3/12'>
                        <label >Average</label>
                        <input type="number" name='avg' className="m-3" />
                    </div>

                    <button className='bg-red-800 ml-5 p-2 w-60'>Create</button>
                </div>
            </form>
            <Table
                hourly={hourly}
                data={data}
                deleteHandler={deleteHandler}

            />
        </main >
        <Footer
            counter={data.length}
        />
    </>

    )
}
export default Main