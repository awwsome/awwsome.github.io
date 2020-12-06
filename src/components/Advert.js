import React from 'react';
import styled from 'styled-components';
import colors from 'style/colors';

function Advert({
  name,
  price_dc,
  price_origin,
  thumbnail,
  onClick,
  url,
  desc,
}) {
  return (
    <Wrapper onClick={onClick(url)}>
      <Thumbnail>
        <img src={thumbnail} alt={name} />
      </Thumbnail>
      <TextWrapper>
        <h4 className="name">{name}</h4>
        <div className="price-wrapper">
          <div className="price-origin">{price_origin}</div>
          <div className="price-dc">{price_dc}</div>
          <div className="desc">{desc}</div>
        </div>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Thumbnail = styled.div`
  width: 100px;
`;

const TextWrapper = styled.div`
  color: white;
`;

export default Advert;
