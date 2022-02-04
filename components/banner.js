export default function Banner(){
  return <div
    className="w-full relative z-0 after:block after:content-[''] after:w-full after:h-full after:bg-blue-200 after:left-0 after:top-0 after:absolute after:z-10"
  >
    <img 
      src="/images/pollution.webp" 
      alt='A forest coated in smog, with factories spewing emissions visible on the horizon' 
      title='Factories emitting more carbon dioxide than thousands of people can hope to offset' 
    />
    <div
      className="w-full h-full flex flex-row items-center justify-center px-4 absolute left-0 top-0"
    >
      <div
        className="border-l-4 border-l-solid border-lime-900 text-ironore m-auto w-max pl-4"
      >
        <h1
          className="font-bold text-2xl"
        >Reducing Your Carbon Footprint</h1>
        <h2
          className="text-xl"
        >As if that&apos;s Going to do Anything</h2>
      </div>
    </div>
  </div>
}