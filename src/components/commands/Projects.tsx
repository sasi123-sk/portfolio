import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Technoxploit",
    desc: "A Python script to analyze server versions, search for exploits, and perform security checks on websites.",
    url: "https://github.com/sasi123-sk/Techn0xploit",
  },
  {
    id: 2,
    title: "HiddenHarbor",
    desc: "This Python tool provides a user-friendly interface for steganography and cipher decoding. It includes various steganography methods using tools like Stegcrack, Zsteg, Exiftool, and Steghide. Additionally, it offers decoding capabilities for ciphers such as Caesar Cipher, Morse Code, XOR Cipher, and General Cipher.",
    url: "https://github.com/sasi123-sk/HiddenHarbor",
  },
  {
    id: 3,
    title: "Reconify",
    desc: "Automate the recon process for bug hunters.",
    url: "https://github.com/sasi123-sk/reconify",
  },
  {
    id: 4,
    title: "SSRFY",
    desc: "A minimal, accessible A Server-Side Request Forgery (SSRF) attack involves an attacker abusing server functionality to access or modify resources. The attacker targets an application that supports data imports from URLs or allows them to read data from URLs.",
    url: "https://github.com/sasi123-sk/ssrfy",
  },
];

export default Projects;
