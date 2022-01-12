import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, <br />
          I am Sospeter Nyabuti
        </SectionTitle>
        <SectionText>
        I am an aspiring Data Scientist currently in graduate school with experience in Predictive modeling, 
        data mining, and machine learning. My goal is to improve results and make the right decisions that save costs.
        </SectionText>
        <Button onClick={() => window.location = "https://www.linkedin.com/in/sospeternyabuti/"} >Learn More</Button> 
      </LeftSection>
    </Section>
  </>
);

export default Hero;