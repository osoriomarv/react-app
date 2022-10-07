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
          I am a Graduate Student at Tulane University pursuing a Master's in Geology. I work at the High Temperature and High Pressure Laboratory (HiTap) as a Research Assistant. I am also a Teaching Assistant for the Geology Department. By working with computation models I have found a passion for programming. This passion led me down a path of self learning using websites like CodeAcademy, Datacamp and sitting in on computer science lectures in my free time. While developing my skills on codeacademy I discoved another passion, Cybersecurity. Since then I have used TryHackMe (top 7%) and HackTheBox to increase my skills.
          
        </SectionText>
        <Button onClick={() => window.location = 'https://github.com/osoriomarv'}>
          Learn More
        </Button>
    </LeftSection>
  </Section>
);

export default Hero;