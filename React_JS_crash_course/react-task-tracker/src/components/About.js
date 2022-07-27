import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h4 className="text-3xl">Version 1.0.0</h4>
        <Link to='/' className=" text-blue-500 hover:underline">Go Back</Link>
        {/* <a href="/" className=" text-blue-500 hover:underline">Go back</a> */}
    </div>
  )
}

export default About