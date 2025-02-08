import Image from "next/image";

export default function PromoSection() {
  return (
    <div className="flex flex-col items-center bg-[#f8f8f8] p-6">
      {/* Top Image with "Easy" Bubble */}
      <div className="relative w-full max-w-md mb-4">
        <div className="absolute -top-6 -left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm shadow-lg">
          Easy
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-blue-200">
          <Image
            src="/images/easy.jpg"
            width={400}
            height={300}
            alt="Easy process"
            className="w-full"
          />
        </div>
      </div>

      {/* Middle Image */}
      <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-blue-300 w-full max-w-md mb-4">
        <Image
          src="/images/happy-seller.jpg"
          width={400}
          height={300}
          alt="Happy seller"
          className="w-full"
        />
      </div>

      {/* Bottom Image with "Empower" Bubble */}
      <div className="relative w-full max-w-md">
        <div className="absolute -bottom-6 -right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm shadow-lg">
          Empower
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-blue-200">
          <Image
            src="/images/financial-literacy.jpg"
            width={400}
            height={300}
            alt="Financial Literacy"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
