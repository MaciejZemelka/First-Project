import Image from 'next/image'
import ProductImages from './Product_images'
import RecomendedProducts from './Recomended_products'
import OtherProducts from './Recomended_products'
import Stars from './stars.tsx'


export default function Home() {
  return (
    <main >
      <div className='flex items-center justify-center my-[2%]'>
      <div className='bg-black py-[20px] flex justify-between'>
        <div className='w-[30%] max-[1000px]:w-[60%] items-center justify-center min-[1000px]:pl-[0px] max-[600px]:w-[50%] max-[600px]:ml-[-40px]'>
          <ProductImages></ProductImages>
        </div>
        <div className='w-[30%] min-[1725px]:text-[30px] min-[1350px]:text-[20px] text-[15px] py-1 max-[1000px]:hidden'>
          <span className='text-[40px] font-bold'>Donec sit elit</span>
          <Stars />
          <br/>
          <span>Morbi eu ullamcorper urna, a condimentum massa. In fermentum ante non turpis cursus fringilla. Praesent neque eros, gravida vel ante sed, vehicula elementum orci. Sed eu ipsum eget enim mattis mollis.</span><br /><br/ >
          <span>Morbi eu ullamcorper urna, a condimentum massa. In fermentum ante non turpis cursus fringilla. Praesent neque eros, gravida vel ante sed, vehicula elementum orci. Sed eu ipsum eget enim mattis mollis.</span>
        </div>
        <div className='w-[25%] p-1 max-[1000px]:w-[30%] '>
          <span className='bg-zinc-600 p-1 rounded-[0.5rem] lg:text-[26px] max-[1150px]:text-[20px]'>Expires in 2 days</span><br/><br/>
          <span className='lg:text-[27px]'><b><span className='text-cyan-400'>-10% </span><sup>$</sup>37.8 <sup className='line-through text-zinc-400'>$42</sup></b></span><br/><br/>
          <span className='relative inline-flex text-[13px]  ml-[-11px] mr-[4px] lg:text-[27px] lg:mb-[5px] lg:ml-[-15px] lg:mr-[4px] h-[11px] w-[11px] rounded-full bg-pink-600'></span>
          <span className='lg:text-[27px] text-[13px]'>Get it <b>Jan 19</b> by 5pm</span><br></br><br/>
          <button className='bg-blue-500 text-[27px] w-[12rem] py-1 rounded-[0.5rem] max-[660px]:w-[100px] max-[660px]:text-[15px]'>Add to cart</button>
        </div>
      </div>
      </div>
        <div className='w-[100%] px-[10%] text-[20px] min-[1000px]:hidden py-1 '>
          <span>Donec sit elit</span>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
          </div>
          <span>Morbi eu ullamcorper urna, a condimentum massa. In fermentum ante non turpis cursus fringilla. Praesent neque eros, gravida vel ante sed, vehicula elementum orci. Sed eu ipsum eget enim mattis mollis.</span><br /><br/ >
          <span>Morbi eu ullamcorper urna, a condimentum massa. In fermentum ante non turpis cursus fringilla. Praesent neque eros, gravida vel ante sed, vehicula elementum orci. Sed eu ipsum eget enim mattis mollis.</span>
        </div>
      <div>
      <div className='pl-[9%] max-x-[1200px]'>
        <span className='text-[30px] font-bold'><span className='relative inline-flex text-[13px]  ml-[-11px] mr-[4px] lg:text-[27px] lg:mb-[5px] lg:ml-[-15px] lg:mr-[4px] h-[11px] w-[11px] rounded-full bg-pink-600'></span>Recomended Products for You</span><br/>
        <span className='text-[22px] text-black-200'>Based on your preferences and shopping habbits</span>
          <div className='grid grid-rows-1 max-[900px]:grid-rows-2 grid-flow-col items-center '>
            <div className='max-w-[300px]'>
              <OtherProducts item={1} />
              <span>BackPack</span><br />
              <Stars />
              <span>Cena</span><br />
              <span>Kiedy dostawa</span>

            </div>
            <div className='max-w-[300px]'>
              <OtherProducts item={2} />
              <span>White&Black Shirt</span><br />
              <Stars />
              <span>Cena</span><br />
              <span>Kiedy dostawa</span>
            </div>
            <div className='max-w-[300px]'>
              <OtherProducts item={3} />
              <span>Light Jacket</span><br />
              <Stars />
              <span>Cena</span><br />
              <span>Kiedy dostawa</span>
            </div>
            <div className='max-w-[300px]'>
              <OtherProducts item={4} />
              <span>Sweater</span><br />
              <Stars />
              <span>Cena</span><br />
              <span>Kiedy dostawa</span>
            </div>
          </div>
        </div>
      </div>
      <div className='pl-[8%] max-x-[1200px] pt-[50px]'>
        <span className='text-[30px] font-bold'>Customer Reviews</span>
        <div className='grid pb-[70px] '>
          <div className='grid pt-[50px] '>
              <div className='flex items-center'>
                <img src="IMG/UserPhoto.png" className=' w-[30px] h-[3-px] pb- m-4 bg-zinc-600 rounded-full'></img>
                <a className='text-[20px]'>Nullam Duis</a>
                </div>
              <Stars></Stars>
              <a className='pt-[16px] text-[18px]'>Phasellus efficitur, nisi ut varius ultricies, tortor arcu ullamcorper nisi, eu auctor enim est ut enim. Sed fringilla, nulla ut tincidunt hendrerit, risus tortor laoreet tortor, non mattis arcu elit vel ante.</a>
          </div>
          <div className='grid pt-[50px]'>
              <div className='flex items-center'>
                <img src="IMG/UserPhoto.png" className=' w-[30px] h-[3-px] pb- m-4 bg-zinc-600 rounded-full'></img>
                <a className='text-[20px]'>Donec Nulla Velit</a>
                </div>
              <Stars></Stars>
              <a className='pt-[16px] text-[18px]'>Nullam fermentum nisl non mattis fringilla!!!!</a>
          </div>
          <div className='grid pt-[50px] '>
              <div className='flex items-center'>
                <img src="IMG/UserPhoto.png" className=' w-[30px] h-[3-px] pb- m-4 bg-zinc-600 rounded-full'></img>
                <a className='text-[20px]'>J Tempus</a>
                </div>
              <Stars></Stars>
              <a className='pt-[16px] text-[18px]'>Pellentesque faucibus quam eu vehicula pulvinar. Integer cursus fringilla metus.</a>
          </div>
            
        </div>
      </div>
    </main>
  )
}
