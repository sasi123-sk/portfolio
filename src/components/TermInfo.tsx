import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>sasikaran.vercel.dev</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
