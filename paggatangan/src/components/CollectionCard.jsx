function CollectionCard({collection}){

  return (
    <div className="group relative overflow-hidden rounded-xl cursor-pointer w-max-50 h-auto">
      <img src={collection.image} alt={collection.name} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
      <h3 className="absolute bottom-5 left-5 z-10 text-3xl
            font-medium text-white transition-transform
            duration-500 group-hover:translate-y-5px">{collection.name}
      </h3>
      <div className="absolute inset-0  bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
    </div>
  );

}

export default CollectionCard;