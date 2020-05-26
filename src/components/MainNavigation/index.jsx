import React from "react"
import * as S from './styled'

const MainNavigation = () => (
  <S.MainNavigationWrapper className="d-flex justify-content-center">
    <S.MainNavigationLink to="./">Home</S.MainNavigationLink>
    <S.MainNavigationLink to="./search">Search</S.MainNavigationLink>
  </S.MainNavigationWrapper>
)

export default MainNavigation