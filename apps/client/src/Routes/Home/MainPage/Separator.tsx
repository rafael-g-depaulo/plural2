import styled from "styled-components"

export const Separator = styled.div<{ color?: string }>`
  height: 2rem;
  z-index: 3;
  background-color: ${props => props.color ?? "#FF761E"};
  box-shadow: 0px 20px 4px rgba(0, 0, 0, 0.4);
`

export default Separator
