function FoodCard() {
  return (
    <div className="border-2 w-fit p-6 rounded-xl shadow-md">
      <div className="w-full h-60 rounded-lg overflow-hidden">
        <img
          src="https://media.istockphoto.com/id/509568543/photo/indian-food.jpg?s=2048x2048&w=is&k=20&c=chYmzcgxamRMpagkSs1hcNPkMo9sp2MhgVCc_zXHZ_I="
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <h3 className="font-semibold text-xl">Chicken Biryani</h3>
          <p className="w-[300px] mt-5">
            Biryani is a celebratory rice and meat dish cherished in the Indian
            sub-continent
          </p>
        </div>

        {/* Food Quantity */}
        <div>
          <select name="food-quantity" id="quantity">
            {[...Array(5)].map((_, i) => (
              <option value={i + 1}>{i + 1}</option>
            ))}
          </select>

          <select name="" id="">
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>

          <p className="text-red-500 font-semibold text-2xl mt-5">$10</p>
        </div>

        {/* Add to cart button */}
        <button className="bg-red-500 text-white font-medium p-3 rounded-xl hover:opacity-80 transition-[opacity]">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
