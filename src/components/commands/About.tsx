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
        TamilNadu, India.
      </p>
      <p>
      Detail-oriented Cyber Security Enthusiast dedicated to safeguarding digital assets against cyber threats. Proficient in identifying vulnerabilities, implementing robust security measures, and conducting thorough assessments. Skilled in utilizing cutting-edge tools to ensure data integrity and confidentiality.<br />
      Committed to staying updated on emerging security trends and eager to contribute to secure software development in dynamic environments.
      </p>
    </AboutWrapper>
  );
};

export default About;
