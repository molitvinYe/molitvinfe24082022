import styled from "styled-components";

export const Item  = styled.li`
  display: flex;

  & + & {
    margin-top: 10px;
  }
`

export const Name = styled.span`
  flex: 1 0 15%;
`

export const TimeLineContainer = styled.div`
  display: flex;
  flex: 1 0 85%;
  position: relative;
`

export const TimeLine = styled.div<{left: string, width: string}>`
  position: absolute;
  left: ${props => props.left};
  width: ${props => props.width};

  display: flex;
  justify-content: center;

  background-color: gray;
`