import styled from 'styled-components';

const SearchInput = styled.input`
    color: var(--white);
	border: 1px solid var(--primary);
	box-sizing: border-box;
	padding: 10px 18px;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	border-radius: 5px;
    display: inline-block;
	color: black;
	width: 250px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;

	@media (max-width: 830px) {
		width: 70%;
	}
`;

export default SearchInput;