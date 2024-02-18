import Link from 'next/link';
import Image from 'next/image';

import { inter, caveat_brush } from '@/app/ui/fonts';

export default function LandingHeader() {
    return (
        <div className='bg-gray-100 p-6'>
            <div className="flex items-center gap-5 justify-center self-center rounded-lg font-bold text-black transition-colors md:text-base">
                <span className={`text-3xl ${inter.className}`}>MAPIAN FLORIST</span>
            </div>
            <div className="flex h-10 shrink-0 gap-3 md:gap-12 justify-center rounded-lg bg-white-500 pt-8 md:h-26">
                <Link
                    href="/"
                    className="flex items-center gap-5 self-center rounded-lg px-2 py-2 font-sm text-black transition-colors hover:text-gray-500 hover:underline"
                >
                    <span className={`md:text-base`}>Home</span>
                </Link>
                <Link
                    href="/custom_order"
                    className="flex items-center gap-5 self-center rounded-lg px-2 py-2 font-sm text-black transition-colors hover:text-gray-500 hover:underline"
                >
                    <span className={`md:text-base`}>Custom Order</span>
                </Link>
                <Link
                    href="/"
                    className="flex items-center gap-5 self-center rounded-lg px-2 py-2 font-sm text-black transition-colors hover:text-gray-500 hover:underline"
                >
                    <span className={`md:text-base`}>About Us</span>
                </Link>
                <Link
                    href="/"
                    className="flex items-center gap-5 self-center rounded-lg px-2 py-2 font-sm text-black transition-colors hover:text-gray-500 hover:underline"
                >
                    <span className={`md:text-base`}>Contact</span>
                </Link>
            </div>
        </div>
    );
}