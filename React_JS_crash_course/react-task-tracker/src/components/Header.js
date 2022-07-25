import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    return (
        <header className="flex w-device justify-between items-center p-4">
            <h1 className="font-bold text-4xl text-center">Task Tracker</h1>
            <Button type="primary" text="Add" classes="text-white bg-green-600 hover:bg-green-700"/>
            {/* <Button text='Hello' />
            <Button text='World' /> */}
            {/* <p>{title}</p> */}
        </header>
    )
}

Header.defaultProps = {
    title: 'Default subtitle'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header