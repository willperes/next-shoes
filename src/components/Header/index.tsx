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
                    <a>Home</a>
                    <a>Women</a>
                    <a className="active">Man</a>
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