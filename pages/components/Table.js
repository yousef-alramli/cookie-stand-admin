import React from 'react'

function Table(props) {
    const { hourly, data, deleteHandler } = props
    const hourList = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]
    // console.log("from table: ",data)
    return (
        <div className="m-5 p-4 w-full">
            {data[0] == null && "No Coockie Stand Available"}
            {data[0] != null &&

                <table className='w-10/12 mx-auto mt-4 text-center border border-red-300  rounded-lg '>
                    <thead className='bg-red-500 border border-red-300'>
                        <th>Location</th>
                        {hourList.map(hour => {
                            return (<th>{hour}</th>)
                        })}
                        <th>Totals</th>
                    </thead>

                    <tbody>
                        {
                            data.map((stand, index) => {

                                let randomized = stand.hourly_sales.map(th => {
                                    return <td className='border border-black'>{th}</td>
                                })

                                return (
                                    index % 2 == 0 ? (<tr className='bg-red-400'>
                                        <td className='px-2 border border-black' >
                                            {stand.location}
                                            <button
                                                onClick={() => { deleteHandler(stand.id) }}
                                                className='w-8 bg-orange-50 rounded-full text-red-900 font-black float-right'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-8 h-8 "
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </td>
                                        {randomized}
                                    </tr>) : (<tr className='bg-red-300'>
                                        <td className='px-2 border border-black' >
                                            {stand.location}
                                            <button
                                                onClick={() => { deleteHandler(stand.id) }}
                                                className='w-8 bg-orange-50 rounded-full text-red-900 font-black float-right'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-8 h-8 "
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </td>
                                        {randomized}
                                    </tr>)
                                )
                            })
                        }
                    </tbody>

                    <tfoot>
                        <tr className='bg-red-500'>
                            <td className='font-semibold border border-black'>Totals</td>
                            {
                                hourly.map(th => {
                                    return <td className='font-semibold border border-black'>{th}</td>
                                })
                            }


                        </tr>
                    </tfoot>

                </table>}
        </div>
    )
}

export default Table

