import Link from 'next/link';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { useMenu } from '../../hooks/useMenu';
import { MenuModal } from '../MenuModal';
import { SignInButton } from '../SignInButton';
import { ThemeSwitch } from '../ThemeSwitch';

import { Container, Content, Menu, RightContent } from "./styles";

export function Header() {
    const { openMenu } = useMenu();

    return (
        <Container>
            <MenuModal />
            <Content>
                <h1>NextShoes</h1>
                <nav>
                <Link href={'/'}>
                    <a>Home</a>
                </Link>
                <a>Women</a>
                <a className="active">Men</a>
                <a>Kids</a>
                </nav>
                <RightContent className="rightContent">
                    <ThemeSwitch />
                    <FaSearch />
                    <Link href={'/cart'}><FaShoppingCart /></Link>
                    <SignInButton />
                </RightContent>
                <Menu className="menu">
                    <HiMenu onClick={openMenu}/>
                </Menu>
            </Content>
        </Container>
    );
}