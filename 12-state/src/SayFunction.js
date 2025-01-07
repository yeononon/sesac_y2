import React from 'react'

export const SayFunction = () => {
    const [message, setMessage]
  return (
    <>
    <div>SayFunction</div>
    <button>입장</button>
    <button>퇴장</button>
    <button>Hi로 바꾸기</button>
    <h1>{message}</h1>
    
    </>
  )
}

