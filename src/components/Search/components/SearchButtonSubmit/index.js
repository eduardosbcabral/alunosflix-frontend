import styled from 'styled-components';

import { AiOutlineSearch } from 'react-icons/ai';

const SearchButtonSubmit = styled.button`
    color: var(--white);
	border: 1px solid var(--primary);
	background-color: var(--primary);
	box-sizing: border-box;
	font-style: normal;
	font-weight: bold;
	border-radius: 5px;
    display: inline-block;
	cursor: pointer;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	height: 39px;

	@media (max-width: 830px) {
		width: 29px;
	}

`;

SearchButtonSubmit.Icon = styled(AiOutlineSearch)`
`;

export default SearchButtonSubmit;
