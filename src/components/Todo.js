import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({onClick, text, checked }) => (
    <li
        onClick = {onClick}
        style={{
            textDecoration: checked ? 'line-through' : 'none'
        }}
    >
    {text}
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }
export default Todo