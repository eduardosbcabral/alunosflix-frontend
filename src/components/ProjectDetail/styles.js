import styled from 'styled-components';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export const Container = styled.div`
    position: relative;
    height: 60vh;
    width: 100%;
`;

export const Header = styled.div`
    height: 200px;
    background: url(${props => props.url});
    background-size: cover;
    filter: blur(1px);
`;


export const Profile = {};

Profile.Image = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 50%;
`;

Profile.Image.Container = styled.div`
    width: 132px;
    height: 132px;

    position: absolute;

    left: 50px;
    top: 135px;

    border: 1px solid var(--black);
    border-radius: 50%;

    border-bottom-left-radius: 9999px;
    border-bottom-right-radius: 9999px;
    border-top-left-radius: 9999px;
    border-top-right-radius: 9999px;

    border-bottom-style: solid;
    border-left-style: solid;
    border-right-style: solid;
    border-top-style: solid;

    border-bottom-color: var(--blackLighter);
    border-left-color: var(--blackLighter);
    border-right-color: var(--blackLighter);
    border-top-color: var(--blackLighter);

    border-bottom-width: 4px;
    border-left-width: 4px;
    border-right-width: 4px;
    border-top-width: 4px;
`;

Profile.Info = {};

Profile.Info.Container = styled.div`
    padding: 15px;
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: space-between;
    flex-direction: column;
`;

Profile.Info.Name = styled.span`
    margin-left: 36px;
    font-weight: 800;
    font-size: 1.3rem;
    color: var(--blackLighter);
    margin-top: 15px;
`;

Profile.Info.Name.Container = styled.div`
    display: flex;
    flex: 1;
`;


Profile.Info.Title = styled.span`
    margin-left: 36px;
    font-weight: 800;
    font-size: 1.3rem;
    color: var(--primary);
    margin-top: 15px;
`;

Profile.Info.Title.Container = styled.div`
    display: flex;
    flex: 1;
`;

Profile.Info.Likes = styled.span`
    color: var(--black);
    font-weight: 400;
    font-size: 3rem;
`;

Profile.Info.Likes.Icon = {};

Profile.Info.Likes.Icon.Container = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    color: var(--blackLighter);
    font-size: 3rem;
`;
Profile.Info.Likes.Icon.Dislike = styled(AiFillHeart)`
    color: #FF0035;
    cursor: pointer;
`;

Profile.Info.Likes.Icon.Like = styled(AiOutlineHeart)`
    color: #FF0035;
    cursor: pointer;
`;
Profile.Info.Likes.Dislike = styled(AiOutlineHeart)`
    
`;

Profile.Info.Likes.Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-start;
    margin-left: 215px;

    @media (max-width: 800px) {
        justify-content: flex-end;
    }
`;

Profile.Info.Button = styled.a`
    height: 50px;
    width: 150px;
    background-color: var(--primary);
    border: 0;
    color: var(--white);
    border-radius: 5px;
    font-weight: 600;
    margin-top: 10px;
    margin-left: 35px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .9rem;

    transition: all .5s;
    
    cursor: pointer;
    &:hover {
        opacity: .7;
    }

    @media (min-width: 800px) {
        width: 150px;
    }
`;

Profile.Info.Button.Container = styled.div`
    display: flex;
    flex: 1;
`;