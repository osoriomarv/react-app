import React from 'react';
//import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { RiComputerFill } from 'react-icons/ri';
import { GiCheckedShield } from 'react-icons/gi';
import { AiOutlineExperiment } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id = "tech">
  <SectionDivider/>
  <br/>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I have experience working with the following technologies and equipment:
  </SectionText>
  <List>
    <ListItem>
      <RiComputerFill size="3rem"/>
        <ListContainer>
          <ListTitle>Computational</ListTitle>
          <ListParagraph>
            Expirience with the following: <br/>
            MATLAB <br/>
            Python <br/>
            SQL <br/>
            JavaScript <br/>
            React <br/>
          </ListParagraph>
        </ListContainer>
    </ListItem>
    <ListItem>
      <GiCheckedShield size="3rem"/>
        <ListContainer>
          <ListTitle>Cybersecurity</ListTitle>
          <ListParagraph>
            Expirience with the following: <br/>
            Kali Linux <br/>
            Metasploit <br/>
            BurpSuite <br/>
            Nmap <br/>
            Wireshark <br/>
            google <br/>
          </ListParagraph>
        </ListContainer>
    </ListItem>
    <ListItem>
      <AiOutlineExperiment size="3rem"/>
        <ListContainer>
          <ListTitle>Laboratory Equipment</ListTitle>
          <ListParagraph>
            Expirience with the following: <br/>
            One Atmosphere Gas Mixing Furnace <br/>
            Diamond Anvil Cells <br/>
            Material Synthesis <br/>
            Microscopy <br/>
          </ListParagraph>
        </ListContainer>
    </ListItem>
  </List>
 </Section>
);

export default Technologies;
