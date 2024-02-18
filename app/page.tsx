import Link from 'next/link';
import Image from 'next/image';

import { inter, caveat_brush } from '@/app/ui/fonts';
import LandingHeader from './shared_components/header';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <LandingHeader></LandingHeader>
      <div className="mt-4 flex grow items-center flex-col gap-2 md:flex-row">
        <div className="flex items-center justify-center p-3 md:w-3/5 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/banner.jpeg"
            width={1280}
            height={559}
            className="hidden lg:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/banner-mobile.jpeg"
            width={600}
            height={600}
            className="block lg:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>

        <div className="flex flex-col justify-center gap-3 rounded-lg bg-gray-50 px-24 py-10 md:w-2/5 hidden lg:block md:block">
          <p className={`text-5xl text-gray-800 md:text-6xl md:leading-normal`}>
            Where Every <strong className={`${caveat_brush.className} text-pink-500`}>Petal</strong> Tells a <strong className={`${caveat_brush.className} text-pink-500`}>Story!</strong>
          </p>
        </div>
      </div>
    </main>
  );
}
