import React from 'react';
import { useSelector } from 'react-redux';

import Modal from '../Modal';
import Skeleton from '../Skeleton';
import { ModalTitle, ModalContent, ModalOpen } from './styles';

export default (props) => {
  const { open, onClose } = props;
  const { items, itemSelected } = useSelector((state) => state.items);

  console.log('ModalCustom', itemSelected); //items ok

  return (
    <Modal open={open} onClose={onClose}>
      {itemSelected ? (
        <>
          <ModalTitle>{itemSelected?.name}</ModalTitle>
          <ModalContent>{itemSelected?.formatted_phone_number}</ModalContent>
          <ModalContent>{itemSelected?.formatted_address}</ModalContent>
          <ModalOpen>
            {itemSelected?.opening_hours?.isOpen ? 'Aberto Agora o/' : 'Fechado neste momento'}
          </ModalOpen>
        </>
      ) : (
        <>
          <Skeleton width="10px" height="25px" />
          <Skeleton width="10px" height="10px" />
          <Skeleton width="10px" height="10px" />
          <Skeleton width="10px" height="10px" />
        </>
      )}
    </Modal>
  );
};
