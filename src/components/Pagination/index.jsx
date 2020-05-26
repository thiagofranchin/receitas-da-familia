import React from 'react'
import propTypes from 'prop-types'
import { Link } from "gatsby"
// import getThemeColors from '../../utils/getThemeColors'

import * as S from './styled'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <Link to={prevPage} bg={`red`} duration={0.6}>
        ← página anterior
      </Link>
    )}

    <p>{currentPage} de {numPages}</p>

    {!isLast && (
      <Link
        to={nextPage}
        bg={`red`}
        duration={0.6}
      >
        proxima página →
      </Link>
    )}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination