import Link from 'next/link';
import Image from 'next/image';

import { inter, caveat_brush } from '@/app/ui/fonts';
import LandingHeader from '../shared_components/header';

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col">
            <LandingHeader></LandingHeader>
        </main>
    );
}
