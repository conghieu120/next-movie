import Link from "next/link"

const Footer = async () => {
  return (
    <div className='text-small py-8 text-center bg-green-800 text-white'>
      <p>
        <span>Made by</span>
        <Link target="_blank" className="ml-1 underline italic decoration-solid" href='https://github.com/conghieu120'>hieumc</Link>
      </p>
      <p>Resources from The movie DB</p>
    </div>
  )
}

export default Footer