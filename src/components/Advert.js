import React, { useMemo } from 'react';
import styled from 'styled-components';
import colors from 'style/colors';
import formatNumber from 'utility/formatNumber';

import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Advert({ product }) {
  const isDiscounted = useMemo(
    () => product.price_dc && product.price_dc < product.price_origin,
    [product],
  );

  const linkStyle = {
    textDecoration: 'none',
    color: 'unset',
  };
  return (
    <a href={product.url} target="_blank" style={linkStyle} rel="noreferrer">
      <Inner>
        <div className="thumbnail">
          <img src={product.thumbnail} alt={product.name} />
        </div>
        {product && (
          <TextWrapper>
            <h5 className="name">{product.name}</h5>
            <div className="price-wrapper">
              <span className={isDiscounted ? 'price past' : 'price current'}>
                {formatNumber(product.price_origin)}
              </span>
              {isDiscounted && (
                <span className="price current">
                  {formatNumber(product.price_dc)}
                </span>
              )}
              <span className="unit">원</span>
              {isDiscounted && (
                <span className="price percent">
                  <FontAwesomeIcon icon={faSortDown} className="icon" />
                  {(
                    ((product.price_origin - product.price_dc) /
                      product.price_origin) *
                    100
                  ).toFixed(0)}
                  %
                </span>
              )}
            </div>
            {product.desc && <div className="desc">{product.desc}</div>}
          </TextWrapper>
        )}
      </Inner>
      <Notice>
        파트너스 활동을 통해 일정액의 수수료를 제공받을 수 있습니다.
      </Notice>
    </a>
  );
}

const Inner = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: white;
  .thumbnail {
    max-width: 20%;
    height: 60px;
    margin-right: 16px;
    img {
      border-radius: 2px;
      width: 100%;
      height: 100%;
    }
  }
`;

const TextWrapper = styled.div`
  .name {
    margin: 0;
    font-size: 11.5px;
    color: ${colors.gray8};
    letter-spacing: -0.5px;
  }
  .price-wrapper {
    margin-bottom: 6px;
    .unit {
      font-size: 10px;
      color: ${colors.gray8};
    }
    .price {
      font-family: 'Montserrat', 'Noto Sans CJK KR', sans-serif;
      font-size: 13px;
      &.past {
        font-weight: 500;
        font-size: 11px;
        text-decoration: line-through;
        color: ${colors.gray6};
      }
      &.current {
        font-weight: 600;
        color: ${colors.gray8};
      }
      &.percent {
        margin-left: 4px;
        background-color: ${colors.cyan4};
        font-weight: 700;
        font-size: 9px;
        padding: 2px 6px;
        border-radius: 14px;
        .icon {
          margin-bottom: 2px;
          margin-right: 2px;
        }
      }
    }
  }
  .desc {
    font-size: 11.5px;
    color: ${colors.gray7};
    letter-spacing: -0.5px;
  }
`;

const Notice = styled.div`
  font-size: 9px;
  padding-left: 10px;
  letter-spacing: -0.5px;
  color: rgba(255, 255, 255, 0.3);
`;

export default Advert;
