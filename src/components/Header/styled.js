import styled from "styled-components"
import media from "styled-media-query"

export const TextLogoHeader = styled.h1`
  font-size: 60px;

  ${media.lessThan("large")`
    font-size: 40px;
  `}
`