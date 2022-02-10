import Link from 'next/link';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { SignInButton } from '../SignInButton';

import { Container, Content, Menu, RightContent } from "./styles";

export function Header() {
    return (
        <Container>
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
                    <FaSearch />
                    <FaShoppingCart />
                    <SignInButton />
                </RightContent>
                <Menu className="menu">
                    <HiMenu />
                </Menu>
            </Content>
        </Container>
    );
}