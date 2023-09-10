import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { palette } from "./palette";

const App = () => {
  return (
    <Wrapper>
      <StyledButton>
        <StyledLink to="/basics">Go to Basics</StyledLink>
      </StyledButton>
      <StyledButton>
        <StyledLink to="/dense">Go to Dense</StyledLink>
      </StyledButton>
      <StyledButton>
        <StyledLink to="/pro">Go to Pro</StyledLink>
      </StyledButton>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  color: ${palette.text};
`;

const StyledButton = styled.button`
  padding: 12px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
