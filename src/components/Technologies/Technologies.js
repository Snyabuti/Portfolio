import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the Data Science world.
      From Cloud Services such as Microsoft Azure, AI, Machine Learning, and Predictive Modeling. 
      
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Scripting Languages</ListTitle>
          <ListParagraph>
            Python <br />
            R <br />
            JavaScript <br />
            SQL <br />
            React.js (Front-end)<br />
            Node (Back-end) <br />
            HTML/CSS <br />
            Matlab
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Experience with<br />
            RapidMiner<br />
            Tableau<br />
            Apache hadoop
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
        
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            PostGreSQL <br />
            MySQL <br />
            Microsoft Access <br />
            Oracle Database
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
