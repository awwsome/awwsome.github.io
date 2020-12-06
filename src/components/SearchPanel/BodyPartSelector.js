import React from 'react';
import styled from 'styled-components';
import colors from '../../style/colors';

function BodyPartSelector({
  bodyParts,
  handleBodyPartSelect,
  selectedBodyPart,
}) {
  return (
    <Container>
      <ul>
        {bodyParts.map((bodyPart, index) => (
          <li
            onClick={() => handleBodyPartSelect(bodyPart)}
            key={index}
            className={selectedBodyPart === bodyPart.name ? 'selected' : ''}
          >
            <span className="hash">#</span>
            {bodyPart.name}
          </li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  ul {
    padding: 20px 16px;
    border-bottom: 1px solid ${colors.gray8};
    overflow-x: auto;
    white-space: nowrap;
    margin: 0;
    li {
      color: ${colors.gray6};
      font-size: 20px;
      display: inline;
      font-weight: 500;
      margin-right: 10px;
      .hash {
        font-size: 0.8em;
        margin-right: 4px;
      }
      &.selected {
        color: #fff;
        padding-bottom: 15px;
        border-bottom: 2px solid #fff;
      }
    }
  }
`;

export default BodyPartSelector;
