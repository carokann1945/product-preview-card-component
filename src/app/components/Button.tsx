import { Cart } from './icons/Cart';

export default function Button() {
  return (
    <button className="w-full cursor-pointer bg-green500 px-[32px] py-[16px] flex justify-center items-center gap-[8px] rounded-[8px] hover:bg-green700">
      <Cart />
      <span className="text-preset-2 text-white">Add to Cart</span>
    </button>
  );
}
