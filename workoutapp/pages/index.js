import styled from "styled-components";
export default function () {
  return (
    <Wrapper className="main-container">
      <h1>Hello</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
