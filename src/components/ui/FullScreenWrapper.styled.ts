import styled from "styled-components";

export const FullScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 100vw;
  height: 100vh;

  background-color: ${props => props.theme.bg.secondary};
`