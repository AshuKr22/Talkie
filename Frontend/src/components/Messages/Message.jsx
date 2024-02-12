import React from 'react'
import { PiFinnTheHumanBold } from "react-icons/pi";
const Message = () => {
  return (
    <div className="chat chat-end">
			<div className='chat-image avatar'>
				<div className='w-8 rounded-full'>
                
				</div>
			</div>
			<div className="chat-bubble  bg-blue-500 text-white  pb-2">How you doin?</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12.40</div>
		</div>
  )
}

export default Message