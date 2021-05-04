import React from 'react';
import { ModalWrapper, ModalInner, ModalHeader, Title, BtnQuit } from './ModalStyle';
import { GrClose } from 'react-icons/gr';

export const Modal = (props) => {

    return (
        <ModalWrapper>
            <ModalInner>
                <ModalHeader>
                    <Title>Add Event</Title>
                    <BtnQuit onClick={props.hideModal}><GrClose size={24}/></BtnQuit>
                </ModalHeader>
                {props.children}
            </ModalInner>
        </ModalWrapper>
    );
}