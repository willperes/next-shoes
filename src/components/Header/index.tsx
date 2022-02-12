import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { useMenu } from '../../hooks/useMenu';
import { MenuModal } from '../MenuModal';
import { SignInButton } from '../SignInButton';
import { ThemeSwitch } from '../ThemeSwitch';

import { Container, Content, Menu, RightContent } from "./styles";

interface HeaderProps {
    selectedTab?: string;
}

export function Header({ selectedTab }: HeaderProps) {
    const { openMenu } = useMenu();

    const home = useRef<HTMLAnchorElement>(null);
    const women = useRef<HTMLAnchorElement>(null);
    const men = useRef<HTMLAnchorElement>(null);
    const kids = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        if (home && home.current) home.current.className = "not-active";
        if (women && women.current) women.current.className = "not-active";
        if (men && men.current) men.current.className = "not-active";
        if (kids && kids.current) kids.current.className = "not-active";

        switch(selectedTab) {
            case 'home':
                if (home && home.current) home.current.className = "active";
                return;
            case 'women':
                if (women && women.current) women.current.className = "active";
                return;
            case 'men':
                if (men && men.current) men.current.className = "active";
                return;
            case 'kids':
                if (kids && kids.current) kids.current.className = "active";
                return;
        }
    }, [])

    return (
        <Container>
            <MenuModal />
            <Content>
                <Link href={'/'}><h1>NextShoes</h1></Link>
                <nav>
                    <Link href={'/'}><a ref={home} >Home</a></Link>
                    <Link href={'/women'}><a ref={women} >Women</a></Link>
                    <Link href={'/men'}><a ref={men} >Men</a></Link>
                    <Link href={'/kids'}><a ref={kids} >Kids</a></Link>
                </nav>
                <RightContent className="rightContent">
                    <ThemeSwitch />
                    <FaSearch />
                    <Link href={'/cart'}><span><FaShoppingCart /></span></Link>
                    <SignInButton />
                </RightContent>
                <Menu className="menu">
                    <HiMenu onClick={openMenu} />
                </Menu>
            </Content>
        </Container>
    );
}