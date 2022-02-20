import Category from "./category"
import { useEffect, useState } from "react"
import ItemsContainer from "./items/itemsContainer"

export default function CategoriesContainer(){

  const items = {
    recycle: [
      {
        title: 'Install solar panels',
        body: 'While installing solar panels is pricey they allow you to reduce your carbon footprint as well as your energy costs. The up-front cost of solar panel installation stops many from making the leap to solar energy. Depending on your state you may be able to claim 30% of installation costs. With that in mind after you do take the leap there are a few other advantages to solar power for your home or business. You will be reducing the energy costs of your home or business as well as being able to get money by selling your excess energy back to the grid. The most important advantage is being able to reduce your carbon footprint by utilizing the sun, an infinite source of energy, for power. By not utilizing fossil fuels you are able to use clean energy which will save you money in the long-run from energy costs.'
      },
      {
        title: 'Recycle',
        body: 'Recycling allows you to reduce your garbage by recycling your aluminum, paper, and plastic so it can be turned into different items and reduce waste in dumps which contribute to our carbon footprint. Most cities and municipalities offer recycling with their trash collection services. Though if you want to recycle without paying an extra cost you could find a local recycling center that will take your recycling for free as long as you bring it to them.'
      },      {
        title: 'Switch to a renewable energy option through your utility or a certified renewable energy provider',
        body: 'This option will depend more on your area than the other points. You would have to contact your local energy company to see if they offer these kinds of services. If they do then you should attempt to switch to the renewable energy source. That way you are able to utilize renewable energy without the extra labor to install your own renewable energy, reducing your carbon footprint for little to no effort.'
      },
    ],
    reduce: [
      {
        title: 'Minimize driving by setting concrete reduction goals and walking, biking, carpooling and using public transit as much as possible. Set a goal of walking or biking anywhere within 2 miles of your home',
        body: 'In many smaller areas where there is less car traffic it provides a greater opportunity for you to better yourself and the environment by walking or biking for your commute to wherever you may be headed. Setting reachable goals will help you accomplish them with the added side effect of getting your daily exercise.'
      },
      {
        title: 'Embrace a minimalist lifestyle',
        body: 'A minimalist lifestyle means living with the bare minimum of what you need. This means living with fewer possessions and decorations. By doing this you limit unnecessary purchases and reduce the amount of waste you can generate.'
      },
      {
        title: 'Reduce energy use',
        body: 'Reducing the amount of energy used in your household by ensuring that nothing unnecessary is plugged in or turned on is a great way to reduce the amount of energy you use along with your carbon footprint. It also has the added bonus of decreasing your monthly bill.'
      }
    ],
    food: [
      {
        title: 'Buy from local farmers and farmer markets',
        body: 'Buying locally helps you support your community. It also helps you reduce your carbon footprint. Many of the sellers at farmer markets produce less waste that allows you to purchase their goods guilt free.'
      },
      {
        title: 'Reduce food waste',
        body: 'Reducing food waste will generate less trash and allow you to possibly spending less on groceries. By buying less and reducing your waste you are able to reduce your carbon footprint by generating less waste.'
      },
      {
        title: 'Compost food waste and garden waste',
        body: 'By composting food and garden waste you are providing a natural and easy way to reduce landfill waste, provide natural fertilizer to your lawn or garden, and it is more helpful to the environment than chemical fertilizers.'
      }
    ]
  }

  const [selectedCategory, selectCategory] = useState(null)
  const categoryColors = {
    food: 'orange-200',
    recycle: 'lime-200',
    reduce: 'violet-200'
  }

  return <div
    className="flex flex-col gap-4 max-w-full"
  >
    <div
      className="flex md:flex-row flex-col justify-between max-w-full m-auto gap-4"
    >
      <Category onClick={_ => selectCategory('food')} category='food' selectedCategory={selectedCategory} imgUrl='/images/food.png' color={categoryColors['food']} href='/' title='Food and Water' />
      <Category onClick={_ => selectCategory('recycle')} category='recycle' selectedCategory={selectedCategory} imgUrl='/images/recycle.png' color={categoryColors['recycle']} href='/' title='Recycle and Renew' />
      <Category onClick={_ => selectCategory('reduce')} category='reduce' selectedCategory={selectedCategory} imgUrl='/images/reduce.png' color={categoryColors['reduce']} href='/' title='Reduce and Minimize' />

    </div>
    
    {selectedCategory && <ItemsContainer items={items[selectedCategory]} color={categoryColors[selectedCategory]} />}
  </div>
}