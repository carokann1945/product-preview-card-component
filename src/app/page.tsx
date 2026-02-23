import Button from './components/Button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-[350px] flex flex-col bg-white rounded-[8px] overflow-hidden md:flex-row md:w-[600px]">
      <div className="w-full h-[342px] relative md:w-[300px] md:h-auto">
        <picture>
          {/* md 이상일 때 */}
          <source media="(min-width: 768px)" srcSet="/images/image-product-desktop.jpg" />
          {/* 기본 (모바일) */}
          <Image src="/images/image-product-mobile.jpg" alt="product" fill className="object-cover" />
        </picture>
      </div>
      <div className="w-full p-[32px] flex flex-col gap-[24px] md:w-[236px] md:flex-1 md:gap-[32px]">
        <div className="w-full flex flex-col gap-[24px]">
          <p className="text-preset-4 text-gray">PERFUME</p>
          <p className="text-preset-1">Gabrielle Essence Eau De Parfum</p>
          <p className="text-preset-3 text-gray">
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of
            CHANEL.
          </p>
        </div>
        <div className="flex gap-[16px] items-center">
          <p className="text-preset-1 text-green500">$149.99</p>
          <p className="text-preset-5 text-gray">$169.99</p>
        </div>
        <Button />
      </div>
    </div>
  );
}
