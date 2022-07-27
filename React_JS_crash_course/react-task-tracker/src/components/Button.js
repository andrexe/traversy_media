import PropTypes from 'prop-types'
import { ButtonBasic, ButtonType } from './theme'

const Button = ({ type, text, classes, onClick }) => {
  const classNames = ButtonBasic + " " + ButtonType[type] + " " + classes;
  return (
    <button
      className={classNames}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
}


export default Button