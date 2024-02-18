import React from "react"
import Image from "next/image"


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
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of both man's and women's Basic Tee in black.",
      price: '$34',
      color: 'Black',
    },  { 
      id: 2,
      name: 'Track Suit',
      href: '#',
      imageSrc: 'https://st.depositphotos.com/2390973/3504/i/450/depositphotos_35048691-stock-photo-man-in-green-clothes.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$765',
      color: 'Green',
    },
 
    { 
      id: 3,
      name: 'Coat',
      href: '#',
      imageSrc: 'https://st.depositphotos.com/1001094/3696/i/450/depositphotos_36966483-stock-photo-elegant-young-handsome-man-studio.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$647',
      color: 'Black',
    },
 
    { 
      id: 4,
      name: 'Costume',
      href: '#',
      imageSrc: 'https://st.depositphotos.com/1695244/54457/i/450/depositphotos_544579668-stock-photo-urban-fantasy-cyberpunk-sci-eurasian.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$77',
      color: 'Blue',
    }, { 
      id: 5,
      name: 'Shirt',
      href: '#',
      imageSrc: 'https://st2.depositphotos.com/1049680/45909/i/450/depositphotos_459094964-stock-photo-handsome-man-beard-wearing-casual.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$57',
      color: 'Green',
    },{ 
      id: 6,
      name: 'Hoodies',
      href: '#',
      imageSrc: 'https://st2.depositphotos.com/31126772/43036/i/450/depositphotos_430360864-stock-photo-couple-standing-together-mono-colored.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$74',
      color: 'Cream Parrot ',
    },
 
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
  
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
    )
  }
  