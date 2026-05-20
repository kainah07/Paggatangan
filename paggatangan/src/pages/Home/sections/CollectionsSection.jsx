import CollectionCard from "../../../components/CollectionCard";
import { collections } from "../../../data/collections";
import sale_banner from "../../../assets/sale_banner.png";
function CollectionsSection() {
  return (
    <section className="p-5">
      <div className="flex justify-between items-center">
        <div className="w-[40%] h-1 bg-gold-400 m-3"></div>
        <h2 className="text-center m-3">Collections</h2>
        <div className="w-[40%] h-1 bg-gold-400 m-3"></div>
      </div>
      
      <p className="text-center mb-5">Explore our curated collections of products.</p>

      <div className="grid grid-cols-4 gap-5 p-5">
        {collections.map((collection) => (
          <CollectionCard 
            key={collection.id}
            collection={collection} 
          />
        ))}
      </div>
      
      <div className="w-full h-1 bg-gold-400 m-3"></div>

      <div className="flex justify-center items-center p-5 m-6">
        <div className="relative group w-fit overflow-hidden">
          <img src={sale_banner} alt="Sale Banner" className="transition duration-300 group-hover:scale-105"/>

          <a href="#" className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition">
            <p className="absolute top-1/2 left-1/2 bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gold-500 transition">
              Shop Now
            </p>
          </a>
        </div>
      </div>
    </section>
  );
} 
export default CollectionsSection;