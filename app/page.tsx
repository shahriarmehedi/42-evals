import React from 'react';
import Hero from '@/components/homecomponents/Hero';
import Evolution from '@/components/homecomponents/Evolution';
import Contributing from '@/components/homecomponents/Contributing';
import Navigating from '@/components/homecomponents/Navigating';
import Language from '@/components/homecomponents/Language';
import Resources from '@/components/homecomponents/Resources';
import Voice from '@/components/homecomponents/Voice';
import FunnyStats from '@/components/homecomponents/FunnyStats';

export default function Home() {
    return (
        <main className="max-w-7xl mx-auto py-20" >
            <Hero />
            <Evolution />
            <Contributing />
            <Navigating />
            <Language />
            <Resources />
            <Voice />
            <FunnyStats />
        </main>
    );
}
