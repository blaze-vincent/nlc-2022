import { useState, useEffect } from 'react'

export default function CommandLine({submit_message}){

  //placeholder text
  const defaultPlaceholder = {
    head: 'Enter a command',
    tail: ''
  };
  const [placeholder, setPlaceholder] = useState(defaultPlaceholder);
  const animateplaceholderText = function(){
    setPlaceholder(
      placeholder.tail.length < 3 
      ? {head: placeholder.head, tail: placeholder.tail.concat('.')}
      : {head: placeholder.head, tail: ''}
    )
  }
  useEffect(_ => { 
    const effect = setTimeout(_ => {
      animateplaceholderText()
    }, 500)
    return _ => {clearTimeout(effect)}
  }, [placeholder])


  return <input 
    className="caret-white bg-slate-900 text-white font-mono py-1 px-2 rounded-md 
      max-w-screen-sm w-screen focus:outline-none    
      "
    placeholder={placeholder.head + placeholder.tail}
  />
}