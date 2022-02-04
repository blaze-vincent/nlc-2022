export default function Banner(){
  return <div
    className="w-full h-max relative"
  >
    <img 
      src="/images/pollution.webp" 
      alt='A forest coated in smog, with factories spewing emissions visible on the horizon' 
      title='Factories emitting more carbon dioxide than thousands of people can hope to offset'
      className="w-full h-auto min-h-[20rem] object-cover"
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
        >As if it&apos;s Your Problem</h2>
      </div>
    </div>
  </div>
}