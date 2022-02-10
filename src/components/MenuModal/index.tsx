import Modal from 'react-modal';
import { useMenu } from '../../hooks/useMenu';

import { CgClose } from 'react-icons/cg';
import { Container } from './styles';
import { CustomButton } from '../CustomButton';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import Divider from '@mui/material/Divider';
import { SignInButton } from '../SignInButton';

export function MenuModal() {
    const { menuIsOpen, closeMenu } = useMenu();

    function handleButtonClick() {
        closeMenu();
    }

    return (
        <Modal
            isOpen={menuIsOpen}
            onRequestClose={closeMenu}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            ariaHideApp={false}
        >
            <button type="button" onClick={closeMenu} className="react-modal-close">
                <CgClose />
            </button>
            <Container>
                <nav>
                    <CustomButton linkTo={'/'} onClick={handleButtonClick}>Home</CustomButton>
                    <CustomButton linkTo={'/'} onClick={handleButtonClick}>Women</CustomButton>
                    <CustomButton linkTo={'/'} onClick={handleButtonClick}>Men</CustomButton>
                    <CustomButton linkTo={'/'} onClick={handleButtonClick}>Kids</CustomButton>
                </nav>
                <Divider className="divider"/>
                <CustomButton linkTo={'/'} onClick={handleButtonClick}><FaSearch /></CustomButton>
                <CustomButton linkTo={'/'} onClick={handleButtonClick}><FaShoppingCart /></CustomButton>
                <SignInButton />
            </Container>
        </Modal>
    );
}