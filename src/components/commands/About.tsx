import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Sasikaran M</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Cyber Security Enthusiast</HighlightAlt> based in Chennai,
        Tamil Nadu, India.
      </p>
      <p>
      Detail-oriented Cyber Security Enthusiast dedicated to safeguarding digital assets against cyber threats. Proficient in identifying vulnerabilities, implementing robust security measures, and conducting thorough assessments. Skilled in utilizing cutting-edge tools to ensure data integrity and confidentiality.<br />
      I am committed to staying updated on emerging security trends and eager to contribute to secure software development in dynamic environments.
      </p>
      <p>
      I had the opportunity to lead, securing the 76th position in India in April 2024. This provided me with the chance to guide the team for its advancement, directing our collective efforts toward shared goals.
      Team Link - https://techn0xploit.vercel.app/
      </p>
    </AboutWrapper>
  );
};

export default About;
