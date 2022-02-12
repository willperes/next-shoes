import Link from 'next/link';

import Modal from 'react-modal';
import { useMenu } from '../../hooks/useMenu';

import { CgClose } from 'react-icons/cg';
import { Content } from './styles';
import { CustomButton } from '../CustomButton';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import Divider from '@mui/material/Divider';
import { SignInButton } from '../SignInButton';
import { ThemeSwitch } from '../ThemeSwitch';

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
            closeTimeoutMS={500}
            ariaHideApp={false}
        >
            <button type="button" onClick={closeMenu} className="react-modal-close">
                <CgClose />
            </button>
            <Content>
                <nav>
                    <Link href={'/'}><span><CustomButton onClick={handleButtonClick}>Home</CustomButton></span></Link>
                    <Link href={'/women'}><span><CustomButton onClick={handleButtonClick}>Women</CustomButton></span></Link>
                    <Link href={'/men'}><span><CustomButton onClick={handleButtonClick}>Men</CustomButton></span></Link>
                    <Link href={'/kids'}><span><CustomButton onClick={handleButtonClick}>Kids</CustomButton></span></Link>
                </nav>
                <Divider className="divider"/>
                <Link href={'/'}><span><CustomButton onClick={handleButtonClick}><FaSearch /></CustomButton></span></Link>
                <Link href={'/cart'}><span><CustomButton onClick={handleButtonClick}><FaShoppingCart /></CustomButton></span></Link>
                <SignInButton />
                <div className="theme-switch">
                    <ThemeSwitch />
                </div>
            </Content>
        </Modal>
    );
}