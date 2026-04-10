// trubitev1-main/app/products/page.tsx

import { products } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Products | Trubite',
  description: 'Explore our range of premium peanut butter and peanut butter powders.',
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight mb-6">Our Products</h1>
          <p className="text-lg text-neutral-600">
            Whether you are looking for the pure, unadulterated taste of natural peanut butter or the low-fat, high-protein benefits of our peanut butter powder, we have something for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} className="group flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden border border-neutral-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              
              {/* Clean white framing applied inside the colored section */}
              <div className={`w-full md:w-2/5 min-h-[300px] relative p-6 md:p-8 ${product.bgColor}`}>
                <div className="relative w-full h-full bg-white rounded-2xl shadow-sm overflow-hidden flex items-center justify-center">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
                <div className="text-xs font-bold tracking-wider text-neutral-500 uppercase mb-2">{product.category}</div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-3">{product.name}</h2>
                <p className="text-neutral-600 mb-6 flex-grow">{product.shortDescription}</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-100">
                  <span className="font-medium text-neutral-900 bg-neutral-100 px-3 py-1 rounded-full text-sm">{product.weight}</span>
                  <span className="text-[#1E5631] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
