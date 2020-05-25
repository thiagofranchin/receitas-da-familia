import React from 'react'
import PropTypes from 'prop-types'

import getThemeColors from '../../utils/getThemeColors'

import * as S from './styled'

const PostItem = ({ slug, background, category, date, timeToRead, title, description }) => (
  <S.PostItemLink to={slug} cover direction="right" bg={getThemeColors()} duration={0.6}>
    <S.PostItemWrapper>
      <S.PostItemTag background={background}>{category}</S.PostItemTag>
      <S.PostItemTagInfo>
        <S.PostItemTagDate>{date} | {timeToRead} min</S.PostItemTagDate>
        <S.PostItemTagTitle>{title}</S.PostItemTagTitle>
        <S.PostItemTagDescription>
          {description}
        </S.PostItemTagDescription>
      </S.PostItemTagInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem