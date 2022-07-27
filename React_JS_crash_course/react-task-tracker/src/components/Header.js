import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    // const onClick = () => {
    //     console.log('Click');
    // }
    return (
        <header className="flex w-device justify-between items-center p-4">
            <h1 className="font-bold text-4xl text-center">Task Tracker</h1>            
            <Button type={showAdd ? "error" : "primary"} onClick={onAdd} text={showAdd ? "Close" : "Add"} classes="" />
            {/* <Button type="primary" text="Add" classes="" onClick={onClick} /> */}
            {/* <Button text='Hello' />
            <Button text='World' /> */}
            {/* <p>{title}</p> */}
        </header>
    )
}

Header.defaultProps = {
    title: 'Default subtitle'
}


// CSS in JS
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header