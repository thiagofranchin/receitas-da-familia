import styled from 'styled-components'
import { Link } from "gatsby"

const primary = "#45725A"
const success = "#FE8340"
const light = "#FCF9F4"

export const MainNavigationWrapper = styled.div`
  background: ${success};
`

export const MainNavigationLink = styled(Link)`
  font-size: 1.8rem;
  padding: 5px 15px;
  color: ${primary};

  &:hover {
    color: ${light};
  }
`