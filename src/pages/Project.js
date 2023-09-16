import { useState } from 'react';

export default function Project() {

  const[mainImg, setMainImg] = useState(0)
  const images = [
    "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  ]
  // max 5 zdjęć

    return (
      <div className="py-[20px] px-[50px] flex gap-4">
        <div className="flex gap-2 flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-normal">
          <div className="flex-1 flex flex-row flex-wrap lg:flex-col lg:items-start items-center justify-center lg:justify-normal">
            {images.map((img, index) => {
              return (
                <img src={img} alt="" onClick={e=>setMainImg(index)} className='lg:w-[150px] lg:h-[150px] w-[75px] h-[75px] object-cover m-[10px]' key={index}/>
              )
            })}
          </div>
          <div className="flex-[3_3_0%] flex item-center justify-center">
            <img src={images[mainImg]} alt="" className='max-h-[800px] object-conatin'/>
          </div>
          <div className="flex-1 flex flex-col gap-2 bg-black bg-opacity-50 lg:text-base text-sm h-fit p-5">
            <h1 className=''>Title</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Rerum, a? Adipisci id saepe animi harum autem deserunt culpa temporibus
              inventore consectetur dignissimos debitis voluptatum rerum aut, nemo nisi corrupti. Ullam
            </p>
          </div>
        </div>
      </div>
    )}
