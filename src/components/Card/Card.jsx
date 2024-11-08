const Card = ({fashion}) => {
    const {productName,image, price, stock} = fashion;
    return (
        <div className="border border-blue-300 p-4 rounded-lg space-y-3 shadow-lg">
            <img className="mx-auto h-56" src={image} alt="" />
            <h1 className="text-2xl font-bold">{productName}</h1>
            <div className="flex items-center justify-between">
            <p>Price: ${price}</p>
            <p>{stock ? 'in Stock':'out of stock'}</p>
            </div>
            <button className="bg-blue-700 py-2 px-4 rounded-lg text-white font-bold">Show Details</button>
        </div>
    );
};

export default Card;