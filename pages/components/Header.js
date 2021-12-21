import Link from "next/link"

const Header = (props)=>{
    
    return(
        <header className='flex justify-between w-full text-4xl font-bold font-serif bg-red-500 p-4'>
        <h1>
          Coockie Stand Admin
        </h1>
        {props.flag ? (<Link href="/">
        <button className="bg-gray-200 rounded-lg p-2 items-center ">Home</button>
        </Link>):(<Link href="components/overveiw">
        <button className="bg-gray-200 rounded-lg p-2 items-center ">Overveiw</button>
        </Link>)}
      </header>
    )
    
}


export default Header