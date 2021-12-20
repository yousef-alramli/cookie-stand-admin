import { useState } from "react";

const Main = () => {
    const [branch,setBranch] = useState("Report table comming soon...");
    const formHandler = (e)=>{
        e.preventDefault()
        let branchInfo = {
            location:e.target.location.value,
            min:Number(e.target.min.value),
            max:Number(e.target.max.value),
            avg:Number(e.target.avg.value),
        };
        setBranch(JSON.stringify(branchInfo))
        
    }
    return (
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
            <div className="m-5">
                <p>{branch}</p>
                {/* <p>Location: {branch.location},Min/Hour: {branch.min},Max/Hour: {branch.max},Average: {branch.avg}</p> */}
            </div>
        </main>
    )
}
export default Main