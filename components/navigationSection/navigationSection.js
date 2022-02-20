import NavigationOption from "./navigationOption"

export default function NavigationSection({
  options = [
    {
      destination: '/', 
      previewImage: '/navigationOptions/test.jpg',
      title: 'testing',
      description: 'this is a test!!! i am testing this!!!'
    }
  ]
}){
  return <div
    className="flex flex-row flex-wrap items-center bg-blue max-w-screen-md gap-2"
  >
    {options.map((option, index) => {
      return <NavigationOption 
        destination={option.destination}
        previewImage={option.previewImage}
        title={option.title}
        description={option.description}
        key={index}
      />
    })}
  </div>
}