import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
         <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/31/img2021/Sportswear_21/SW_22/August/ART/Stealdeals/QC/1-PC-sd.jpg"alt="image"/>
         
         <div className='home__row'>
         <Product
          title='Macbook pro'
          price={293.9} 
          image={'https://rukminim1.flixcart.com/image/416/416/khdqnbk0/computer/e/6/n/apple-original-imafxfyq4agsgysn.jpeg?q=70'} 
          rating={5}  />
         <Product
         title='Apple watch SE'
         price={50.9} 
         image={'https://th.bing.com/th/id/OIP.I0ylBeESAgPqpoGrKV59mAHaIu?pid=ImgDet&rs=1'} 
         rating={4}/>
         </div>

         <div className='home__row'>
         <Product
         title='Home automation'
         price={100.9} 
         image={'https://i0.wp.com/www.businesstelegraph.co.uk/wp-content/uploads/2020/04/Alexa-Google-could-be-listening-to-your-work-calls.-Here039s.jpg?w=1170&ssl=1'} 
         rating={3}/>
         <Product
         title='Mac Tower'
         price={400} 
         image={'https://shoreditchmacs.co.uk/wp-content/uploads/2020/08/mac_pro_2019_pc_01-580x580.jpg'} 
         rating={5}
         />
         <Product
         title='I-MAC'
         price={499.50} 
         image={'https://cdn.shopify.com/s/files/1/0364/0416/6700/products/IM2_b1c91aa3-95ad-4a3a-a520-db7d7aecf8d5_1200x1200.png?v=1599083688'} 
         rating={4}/>        
        

         </div>
         
         <div className='home__row'>
         <Product
         title='LG B8 OLED 4K TV '
         price={150.9} 
         image={'https://www.androidheadlines.com/wp-content/uploads/2018/06/LG-B8-OLED-TV-00-800x467.jpg'} 
         rating={5}
         />

         </div>

        </div>

    </div>
  )
}

export default Home