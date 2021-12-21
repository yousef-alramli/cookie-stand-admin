import { useState } from "react";
import Table from "./Table";
import Footer from "./Footer";


const Main = (props) => {
    const [branch, setBranch] = useState([]);
    const [hourly, setHourly] = useState([]);

    const formHandler = (e) => {
        e.preventDefault();

        let totalHour = []
        let totalOftotals = 0
        let branchInfo = {
            location: e.target.location.value,
            min: Number(e.target.min.value),
            max: Number(e.target.max.value),
            avg: Number(e.target.avg.value),
            totalDay: 0,
            cookiePerHour: [],
            hourList: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
            allTotal: 0,
        }


        for (let i = 0; i < branchInfo.hourList.length; i++) {
            let numCookie = random(branchInfo.min, branchInfo.max, branchInfo.avg)
            branchInfo.cookiePerHour.push(numCookie);
            branchInfo.totalDay += numCookie
        };
        for (let i = 0; i < branchInfo.cookiePerHour.length; i++) {
            let sum = 0;
            for (let j = 0; j < branch.length; j++) {
                sum += branch[j].cookiePerHour[i]
            }
            sum += branchInfo.cookiePerHour[i]
            totalOftotals += sum
            totalHour.push(sum)
        }
        setBranch([...branch, branchInfo]);
        setHourly([...totalHour, totalOftotals])

    }
    const random = (min, max, avg) => {
        return (Math.floor(Math.random() * max) + min) * avg
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
                branch={branch}
                hourly={hourly}
            />
        </main >
        <Footer counter={branch.length} />
    </>

    )
}
export default Main