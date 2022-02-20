export default function Category({color = 'lime-200', href='https://example.com', title='Test Title', imgUrl, onClick, selected = false}){

  //this probably seems dumb but tailwind classes are not generated at runtime so dynamic classes only show if theyre already in your cache
  const colors = {
    'lime-200': {
      hoverBorder: 'hover:border-lime-200',
      selectedBorder: 'border-lime-200',
      hoverBG: 'hover:bg-lime-200',
      bg: 'bg-lime-200'
    },
    'orange-200': {
      hoverBorder: 'hover:border-orange-200',
      selectedBorder: 'border-orange-200',
      hoverBG: 'hover:bg-orange-200',
      bg: 'bg-orange-200'
    },
    'violet-200': {
      hoverBorder: 'hover:border-violet-200',
      selectedBorder: 'border-violet-200',
      hoverBG: 'hover:bg-violet-200',
      bg: 'bg-violet-200'
    },
  }

  return <button 
      href={href} 
      className={`w-max m-auto max-w-full h-auto relative border-2 border-solid ${colors[color].hoverBorder} ${selected && colors[color].selectedBorder}`}
      onClick={onClick}
    >
    <img 
      src={imgUrl} 
      alt=''
    />

    <div 
      className={`absolute block w-full h-full left-0 top-0 ${colors[color].bg} mix-blend-multiply pointer-events-none`}
    />
    <p
      href={href}
      className={`absolute w-full left-0 top-0 p-4 text-ironore font-bold text-2xl ${colors[color].bg}  font-[Syne]`}
    >{title.toUpperCase()}</p>
  </button>
}