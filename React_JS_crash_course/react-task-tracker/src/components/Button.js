import { ButtonType } from './theme'

const Button = ({ type, text, classes }) => {
    const classNames = ButtonType[type] + " " + classes;
  return (
    <button className={classNames}>{text}</button>
  )
}

export default Button