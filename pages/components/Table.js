import React from 'react'

function Table(props) {
    const {branch,hourly} = props
    return (
        <div className="m-5 p-4 w-full">
        {branch[0] == null && "No Coockie Stand Available" }
        {branch[0] != null &&

            <table className='w-10/12 mx-auto mt-4 text-center border border-red-300  rounded-lg '>
                <thead className='bg-red-500 border border-red-300'>
                    <th>Location</th>
                    {branch[0].hourList.map(hour => {
                        return (<th>{hour}</th>)
                    })}
                    <th>Totals</th>
                </thead>

                <tbody>
                    {
                        branch.map((stand ,index)=> {

                            let randomized = stand.cookiePerHour.map(th => {
                                return <td className='border border-black'>{th}</td>
                            })

                            return (
                                index %2 == 0 ?( <tr className='bg-red-400'>
                                    <td className='px-2 border border-black' >{stand.location}</td>
                                    {randomized}
                                    <td className='px-2 border border-black'> {stand.totalDay}</td>
                                </tr>):(<tr className='bg-red-300'>
                                    <td className='px-2 border border-black' >{stand.location}</td>
                                    {randomized}
                                    <td className='px-2 border border-black'>{stand.totalDay}</td>
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

