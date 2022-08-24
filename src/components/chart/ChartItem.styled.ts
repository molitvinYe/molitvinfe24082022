import styled from "styled-components";

export const Item  = styled.li`
  display: flex;

  & + & {
    margin-top: 10px;
  }

  color: ${props => props.theme.palette.primary.main};
`

export const Name = styled.span`
  font-size: ${props => props.theme.title};
  flex: 1 0 20%;

  @media (max-width: 800px) {
    font-size: ${props => props.theme.text};
  }

  @media (max-width: 520px) {
    font-size: 12px;
    flex: 1 0 30%;
  }
`

export const TimeLineContainer = styled.div`
  display: flex;
  flex: 1 1 80%;
  position: relative;

  box-sizing: border-box;
  border: 1px solid ${props => props.theme.palette.primary.main};
  background-color: ${props => props.theme.palette.primary.contrastText};

  @media (max-width: 520px) {
    flex: 1 0 70%;
  }
`

export const TimeLine = styled.div<{left: string, width: string}>`
  position: absolute;
  left: ${props => props.left};
  width: ${props => props.width};
  height: 100%;

  display: flex;
  justify-content: center;

  font-size: ${props => props.theme.text};
  background-color:  ${props => props.theme.bg.secondary};

  @media (max-width: 520px) {
    font-size: 10px;
  }
`