import React from "react"
import Image from "next/image"
import Cry from "@/assets/images/kid/crying.jpg" 
import Cute from "@/assets/images/kid/cute.jpg"
import Dog from "@/assets/images/kid/dog.jpg"
import Kid from "@/assets/images/kid/kid.jpg"



/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products  = [ 
  
  { 
      id: 1,
      name: 'Hoody',
      href: '#',
      
      imageSrc: Cry,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$65',
      color: 'Gray',
    },
    { 
      id: 2,
      name: 'Hoody',
      href: '#',
      
      imageSrc: Cute,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$69',
      color: 'Cream',
    },
    { 
      id: 3,
      name: 'Shirt',
      href: '#',
      
      imageSrc: Dog,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$28',
      color: 'Blue',
    },
    { 
      id: 4,
      name: 'cap and sweeter',
      href: '#',
      
      imageSrc: Kid,
      imageAlt: "wool",
      price: '$74',
      color: 'Brown',
    },  { 
      id: 5,
      name: 'Slave Shirt',
      href: '#',
      imageSrc: 'https://st3.depositphotos.com/1465849/19257/i/450/depositphotos_192575388-stock-photo-smiling-little-boy-green-clothes.jpg',
      imageAlt: "",
      price: '$64',
      color: 'Green',
    }, { 
      id: 6,
      name: 'Shirt',
      href: '#',
      imageSrc: 'https://st3.depositphotos.com/1465849/19257/i/450/depositphotos_192575614-stock-photo-smiling-little-boy-green-clothes.jpg',
      imageAlt: "",
      price: '$44',
      color: 'Green',
    },
    


 
    // More products...
    
  ]
  
  export default function Example() {
    return (
       <main>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products For Kids </h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  
                  <Image src={product.imageSrc} alt={product.imageAlt} width={100} height={100} className="h-full w-full object-cover object-center lg:h-full lg:w-full"></Image>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </main>
    )
  }
  