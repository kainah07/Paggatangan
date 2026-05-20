import CollectionCard from "../../../components/CollectionCard";
import { collections } from "../../../data/collections";
function CollectionsSection() {
  return (
    <section className="p-5">
      <div className="flex justify-between items-center">
        <div className="w-[40%] h-1 bg-[#CAB073] m-3"></div>
        <h2 className="text-center m-3">Collections</h2>
        <div className="w-[40%] h-1 bg-[#CAB073] m-3"></div>
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
      
      <div className="w-full h-1 bg-[#CAB073] m-3"></div>
    </section>
  );
} 
export default CollectionsSection;