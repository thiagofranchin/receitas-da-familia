import React from "react"
import * as S from './styled'


const Header = () => (
  <header>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center py-5 bg-primary">
          <S.TextLogoHeader className="text-success">
            RECEITAS DA FAMILIA
          </S.TextLogoHeader>
        </div>
      </div>
    </div>
  </header>
)

export default Header
