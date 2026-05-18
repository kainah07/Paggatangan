import goldRibbon from '../assets/gold_ribbon.png';
import storeImg from '../assets/store_img.png';
import maleModel from '../assets/male_model.png';
import femaleModel from '../assets/female_model.png';

function HeroSection() {
  return (
    <section className="hero-section h-screen flex items-center px-12 relative overflow-hidden">
      <img src={goldRibbon} alt="Gold Ribbon" className='absolute left-[0%] top-[0%] w-[25%]'/>

      <div className='absolute left-[5%] top-[35%] z-40 p-10'>
        <h1 className='text-6xl mb-2'>Elevate Your Wardrobe</h1>
        <p className='mb-2'>Discover premium fashion for confidence and comfort</p>
        <button className='bg-[#CAB073] hover:bg-[#B89A5C] px-10 py-3 mt-4 rounded'>Shop Now</button>
      </div>

      <img src={maleModel} alt="Male Model" className="absolute right-[13%] top-[11%] z-30 w-[35%]" />
      <img src={femaleModel} alt="Female Model" className="absolute right-[22%] top-[10%] z-20 w-[35%]"/>

      <div className="absolute right-[16%] top-0 w-[15%] h-screen bg-[#D8D2C5] skew-x-[-25deg] z-10"></div>
      <div className="absolute right-[31%] top-0 w-[15%] h-screen bg-[#806855] skew-x-[-25deg] z-10"></div>
      <img src={storeImg} alt="Store Image" className='absolute right-0 top-0 h-screen z-5'/>

    </section>
  );
}

export default HeroSection;