import exp from 'constants'
import React from 'react'

import Image from "next/image"

const products = [
    { 
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of both man's and women's Basic Tee in black.",
        price: '$34',
        color: 'Black',
      }, 
]
export default function PCard (props: {id:number;name:string;price:string;href:string;imageSrc:string;imageAlt:string;color:string}){
return (
    <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900"> </h2>
  
          <div className="flex justify-evenly mt-16">
            {products.map((product) => (
              <div key={props.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image src={props.imageSrc} alt={product.imageAlt} width={100} height={100} className="h-full w-full object-cover object-center lg:h-full lg:w-full"></Image>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={props.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {props.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{props.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{props.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )}


