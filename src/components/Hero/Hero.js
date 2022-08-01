import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, My name is Marvin
        </SectionTitle>
        <SectionText>
          I am a Graduate Student at the Tulane University of New Orleans. I work in the High Temperature and High Pressure Laboratory (HiTap). By working with computational models I have found a passion for progamming and coding which i hope to explore and develop.
        </SectionText>
        <Button onClick={() => window.location = 'https://github.com/osoriomarv'}>
          Learn More
        </Button>
    </LeftSection>
  </Section>
);

export default Hero;