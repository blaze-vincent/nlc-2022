export default function HappyEarths(){

  const bgColors = ['bg-orange-200', 'bg-lime-200', 'bg-violet-200']
  const borderColors = ['border-orange-200', 'border-lime-200', 'border-violet-200']

  return <div
    className="flex md:flex-row flex-col justify-between w-full h-max max-w-screen-md m-auto md:gap-4 gap-0"
  >
    {[,,,].fill('').map((element, index) => {
      return <div key={index} className={`w-max max-w-[75%] md:relative h-auto relative rounded-full overflow-hidden border-2 border-solid ${borderColors[index]}`}  >
          <img 
          src='/images/happyearth.png' 
          alt=''
        />
        <div className={`absolute block w-full h-full left-0 top-0 ${bgColors[index]} mix-blend-multiply`} />
      </div>
    })}

  </div>
}