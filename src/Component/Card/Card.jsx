import React from "react";
import logo from "../img/images.jpg";

const Card = () => {
  return (
    <div class="flex font-sans">
      <div class="flex-none w-48 relative">
        <img src={logo} className="h-full object-cover" />
      </div>
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg font-semibold text-slate-900">Kue Sus $1.00</h1>
          <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">In stock</div>
        </div>
        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
          <div className="space-x-2 flex text-sm">
            <label>
              <input className="sr-only peer" />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">matcha</div>
            </label>
            <label>
              <input className="sr-only peer" />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">Keju</div>
            </label>

            <label>
              <input class="sr-only peer" />
              <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">Vanila</div>
            </label>
          </div>
        </div>
        <div class="flex space-x-4 mb-6 text-sm font-medium">
          <div class="flex-auto flex space-x-4">
            <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
              Buy now
            </button>
            <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
              Add to bag
            </button>
          </div>
        </div>
        <p class="text-sm text-slate-700">Free shipping on all orders.</p>
      </form>
    </div>
  );
};

export default Card;
