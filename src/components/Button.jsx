import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ bgColor, bgHoverColor, color, size, text, icon, borderRadius }) => {

  const { handleClick } = useStateContext();

  return (
    <button
      type="button"
      onClick={ handleClick }
      style={{ backgroundColor:bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl hover:opacity-70 hover:${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  )
}

export default Button;