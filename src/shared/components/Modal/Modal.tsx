import React, { CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from "framer-motion";

import Backdrop from '../Backdrop/Backdrop';

import "./Modal.css";

type ModalOverlayProps = {
    className?: string;
    style?: CSSProperties;
    headerClassName?: string;
    footerClassName?: string;
    contentClassName?: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    onSubmit?: (event: React.SyntheticEvent<HTMLFormElement>) => void;
};

const ModalOverlay: React.FC<ModalOverlayProps> = (props) => {
    const content = <div className={`modal ${props.className}`} style={props.style}>
        <header className={`modal__header ${props.headerClassName}`}>
            <h2>
                {props.header}
            </h2>
        </header>
        <form action="" onSubmit={(e) => {
            e.preventDefault()
            props.onSubmit && props.onSubmit(e);
        }} >
            <div className={`modal__content ${props.contentClassName}`}>
                {props.children}
            </div>
            <footer className={`modal__footer ${props.footerClassName}`}>
                {props.footer}
            </footer>
        </form>
    </div>

    //external div with position fixed is needed to get the correct animation in the model 
    return <motion.div initial={{ y: "-100vh" }} animate={{ y: 0 }} exit={{ y: "-100vh" }} key="modal" >
        {content}
    </motion.div>
}

interface ModalProps extends ModalOverlayProps {
    show?: boolean;
    onClose?: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {

    return <AnimatePresence>
        {props.show && <>
            <Backdrop onClick={props.onClose} portal={true} key="backdrop2">
                <ModalOverlay  {...props} key="modal2" />
            </Backdrop>
        </>}
    </AnimatePresence>

}
export default Modal;