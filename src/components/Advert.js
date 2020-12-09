import React, { useEffect } from 'react';
import styled from 'styled-components';
import colors from 'style/colors';
import formatNumber from 'utility/formatNumber';

import { faBorderNone, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Advert({ product }) {
  const linkStyle = {
    textDecoration: 'none',
    color: 'unset',
  };
  return (
    <a href={product.url} target="_blank" style={linkStyle}>
      <Inner>
        <div className="thumbnail">
          <img src={product.thumbnail} alt={product.name} />
        </div>
        {product && (
          <TextWrapper>
            <h5 className="name">{product.name}</h5>
            <div className="price-wrapper">
              {product.price_origin > product.price_dc && (
                <span className="price origin">
                  {formatNumber(product.price_origin)}
                </span>
              )}
              <span className="price dc">
                {formatNumber(product.price_dc)}원
              </span>
              {product.price_origin > product.price_dc && (
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
    width: 20%;
    height: auto;
    margin-right: 16px;
    img {
      border-radius: 8px;
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
    .price {
      font-family: 'Montserrat', 'Noto Sans CJK KR', sans-serif;
      font-size: 13px;
      &.origin {
        font-weight: 500;
        font-size: 11px;
        text-decoration: line-through;
        color: ${colors.gray6};
        margin-right: 4px;
      }
      &.dc {
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
  color: ${colors.gray6};
`;

export default Advert;
