import React from 'react';
import DailyOffer from '../components/DailyOffer';
import BookaTable from '../components/BookaTable';
import OurTeamNext from '../components/OurTeamNext';
import Count from '../components/Count';
import Download from '../components/Download';
import Prasadam from '../components/Prasadam';
import PrasadamHeroSection from '../components/PrasadamHeroSection';

export default function PrasadamPage() {
  return (
        <>
    <PrasadamHeroSection/>
    <DailyOffer/>
    <BookaTable/>
    <Prasadam/>
    <OurTeamNext/>
    <Count/>
    <Download/>
      </>

  );
}