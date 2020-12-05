import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

// 참고자료
// https://medium.com/@bestseob93/%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%AA%A8%EB%8B%AC-react-modal-%EB%A7%8C%EB%93%A4%EA%B8%B0-bd003458e9d

Modal.defaultProps = {
  closable: true,
  maskClosable: true,
  visible: false,
};

Modal.propTypes = {
  visible: PropTypes.bool,
};

function Modal({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
}) {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner">
          {children}
          <CloseButton onClick={close}>닫기</CloseButton>
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

// Transition

const slideUp = keyframes`
  from {
    transform: translateY(300px);
  }
  to {
    transform: translateY(0px);
  }
`;

// Children

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: absolute;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 16px 16px 0 0;
  width: 100%;
  max-width: 480px;
  bottom: 0;
  margin: 0 auto;
  padding: 32px 10px 0;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

const CloseButton = styled.div`
  background-color: grey;
  text-align: center;
  margin-top: 16px;
`;

export default Modal;
