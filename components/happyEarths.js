export default function HappyEarths(){

  return <div
    className="flex md:flex-row flex-col justify-between w-full h-max max-w-screen-md m-auto md:gap-4 gap-0"
  >
    {[,,,].fill('').map((element, index) => {
      return <div key={index} className={`w-max max-w-[75%] md:relative h-auto relative rounded-full overflow-hidden border-2 border-solid border-lime-200`}  >
          <img 
          src='/images/happyearth.png' 
          alt=''
        />
        <div className={`absolute block w-full h-full left-0 top-0 bg-lime-200 mix-blend-multiply`} />
      </div>
    })}

  </div>
}