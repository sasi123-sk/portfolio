import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Tech Information Technology",
    desc: "Sri Venkateswara College of Engineering | 2022 ~ 2025",
  },
  {
    title: "Mechanical Engineering",
    desc: "Vallivalam Desikar Polytechnic College | 2019 - 2022",
  }
];

export default Education;
