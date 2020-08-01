import styled from 'styled-components';
import Button from '../Button';

import { FaSearch, FaTimes } from 'react-icons/fa';

export const Navbar = styled.header`
    background-color: var(--white);
    height: 80px;
    position: fixed;
    display: flex;
    z-index: 50;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    
    border-top: 3px solid var(--primary);
    border-bottom: 1px solid var(--grayMedium);

    transition: all .5s;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    @media(max-width: 550px) {
        padding-right: 5px;
    }
`;

Navbar.Container = styled.nav`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;

    transition: all .5s;

    @media(min-width: 1500px) {
        margin-left: auto;
        margin-right: auto;
        flex: 0.7;
    }
`;

Navbar.Container.Search = styled.div`
    display: flex;
    z-index: 150;
    position: absolute;
    width: 100%;
    background-color: var(--white);
    height: 77px;
    padding-left: 15px;
    padding-right: 15px;

    left: 0;
    transition: top .5s cubic-bezier(.165, .165,.44,1);
    top: ${props => props.show ? '0' : '-100px'};
`;

Navbar.Search = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.button`
`;

Logo.Image = styled.img`
    width: 190px;
    margin-top: 6px;

    @media(max-width: 800px) {
        width: 35%;
    }
    @media(max-width: 550px) {
        width: 100px;
    }
`;

export const Item = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

Item.Container = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

Item.Button = styled(Button)`
    display: block;
	color: var(--primary);
	font-weight: 600;
	font-size: 1rem;
	height: 100%;
	display: flex;
	align-items: center;
	padding-left: 15px;
	padding-right: 15px;
    text-decoration: none;
    background: transparent;
    border: 0;
    cursor: pointer;
    
    transition: all .5s;
    
    @media(max-width: 550px) {
        padding-left: 10px;
        padding-right: 10px;
        font-size: .9rem;
    }

	&:hover {
		background-color: var(--grayMedium);
    }
    
    &:focus {
        outline: none;
    }
`;

Item.Button.Search = styled(FaSearch)`
`;

export const Search = styled.div`
`;

Search.Container = styled.div`
    display: flex;
    flex: 1;
    align-items: center;

    @media(min-width: 1500px) {
        margin-left: auto;
        margin-right: auto;
        flex: 0.7;
    }
`;

Search.Input = styled.input`
    color: var(--primary);
    font-weight: 600;
    font-size: 1.2rem;
    border: 3px solid var(--primary);
    border-radius: 5px;
    padding: 16px;
    width: 100%;
    
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    transition: all .5s;

    &:focus {
        outline: none;
    }

    @media(max-width: 500px) {
        font-size: .8rem;
    }
`;

Search.Button = styled(FaSearch)`
    
`;

Search.Button.Container = styled.button`
    background-color: var(--primary);
    color: var(--white);
    border: 0;
    font-size: 1.2rem;
    height: 61px;
    padding: 15px 15px 15px 13px;
    border-radius: 5px;
    display: flex;
    align-items: center;

    cursor: pointer;

    transition: all .5s;

    margin-left: 10px;

    &:hover {
        opacity: .8;
    }

    @media(max-width: 500px) {
        font-size: .8rem;
        height: 53px;
    }
`;

Search.Button.Container.Group = styled(Search.Button.Container)`
    background-color: var(--primary);
    color: var(--white);
    border-radius: 0;
    background-color: var(--primary);
    font-size: 1.2rem;
    height: 61px;
    padding: 15px 15px 15px 13px;
    border: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 0;
    
    &:hover {
        opacity: .8;
    }

    &:focus {
        outline: none;
    }
`;

Search.Button.Close = styled(FaTimes)``;

export const Form = styled.form`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;