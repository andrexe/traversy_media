import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className="px-4 text-center">
        <p>Copyright &copy; 2022</p>
        <Link to='/about' className=" text-blue-500 hover:underline">About</Link>
        {/* <a href="/about" className=" text-blue-500 hover:underline">About</a> */}
    </footer>
  )
}

export default Footer