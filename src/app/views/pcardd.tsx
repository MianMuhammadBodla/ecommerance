import React from 'react'
import Pcard from "@/components/e/pcard"
const Pcardd = () => {
  return (
   <div className='flex'> 
    <Pcard id={1} name={'Basic Tee'} price={'$34'} href={'#'} imageSrc={'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'} imageAlt={''} color={''} />
    <Pcard id={2} name={'Coat'} price={'$765'} href={'#'} imageSrc={'https://st3.depositphotos.com/12985790/16644/i/450/depositphotos_166443638-stock-photo-stylish-girl-with-cactus-in.jpg'} imageAlt={''} color={''}/>
    <Pcard id={3} name={'Slave Shirt'} price={'$77'} href={'#'} imageSrc={'https://st3.depositphotos.com/1465849/19257/i/450/depositphotos_192575388-stock-photo-smiling-little-boy-green-clothes.jpg'} imageAlt={''} color={''}/>



    </div>)
}

export default Pcardd