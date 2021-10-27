import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

const inputSearchBarStyle = {
	marginLeft: '40px',
	width: '525px',
	marginRight: '20px',
	marginTop: '20px',
	border: '2px solid orange',
	height: '30px',
	paddingLeft: '10px',
};

const SearchBar = () => (
	<>
		<Input placeholder='Enter course name' style={inputSearchBarStyle} />
		<Button label='Search' />
	</>
);

export default SearchBar;
