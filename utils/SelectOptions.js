export const customStyles = {
	menu: (provided, state) => ({
		...provided,
		color: 'white',
		padding: '0',
		zIndex: '2',
		fontSize: "1rem"
	}),
	menuList: (provided, state) => ({
		...provided,
		padding: 0,
		maxHeight: '13rem',
	}),
	control: (provided, state) => ({
		...provided,
		backgroundColor: 'unset',
		boxShadow: 'none',
		borderRadius: '12px',
		transition: '1s all',
		zIndex: '1',
		cursor: 'pointer',
		fontSize: "1rem",
		borderColor: '#ddd',
		width:"100%",
		fontFamily:"public-font",
		// fontWeight:"700",
		height:"unset",
		minHeight:"unset",
		padding:".6rem 1rem .6rem 1.5rem",
		'&:hover': {
			borderColor: '#ddd'
		}

	}),
	singleValue: (provided, state) => ({
		...provided,
		color: '#000',
		fontSize: "1rem",
		fontFamily:"public-font",
		// fontWeight:"700",
	}),
	placeholder: (provided, state) => ({
		...provided,
		color: '#d4d4d4',
		fontSize: "1rem",
		fontWeight:"500"
	}),
	dropdownIndicator: (provided, state) => ({
		...provided,
		color: '#000',
		transform:"scale(.9)"
	}),
	indicatorSeparator: (provided, state) => ({
		...provided,
		display: 'none',
	}),
	valueContainer: (provided, state) => ({
		...provided,
		padding: '0',
		fontSize: "1rem"
	}),
	option: (provided, state) => ({
		...provided,
		cursor: 'pointer',
		fontSize: "1rem",
		backgroundColor: state.isSelected ? '#005cbb' : (state.isFocused) ? 'transparent' : 'transparent',
		color:state.isSelected?"fff":"#000",
		'&:hover': {
			backgroundColor: '#000',
			color:"#fff"
		}
	}),


};
export const customStylesExtra = {
	menu: (provided, state) => ({
		...provided,
		color: 'white',
		padding: '0',
		zIndex: '2',
		fontSize: "1rem",
		// width:"",
	}),
	menuList: (provided, state) => ({
		...provided,
		padding: 0,
		maxHeight: '13rem',
		minWidth:"unset",
	}),
	control: (provided, state) => ({
		...provided,
		backgroundColor: 'unset',
		boxShadow: 'none',
		borderRadius: '12px',
		transition: '1s all',
		zIndex: '1',
		cursor: 'pointer',
		fontSize: "1rem",
		borderColor: '#ddd',
		minWidth:"9rem",
		fontFamily:"public-font",
		// fontWeight:"700",
		height:"unset",
		minHeight:"unset",
		paddingInline:".75rem",
		paddingInlineEnd:".25rem",
		'&:hover': {
			borderColor: '#ddd'
		}

	}),
	singleValue: (provided, state) => ({
		...provided,
		color: '#000',
		fontSize: "1rem",
		fontFamily:"public-font",
		// fontWeight:"700",
	}),
	placeholder: (provided, state) => ({
		...provided,
		color: '#d4d4d4',
		fontSize: "1rem",
		fontWeight:"500"
	}),
	dropdownIndicator: (provided, state) => ({
		...provided,
		color: '#000',
		transform:"scale(.9)"
	}),
	indicatorSeparator: (provided, state) => ({
		...provided,
		display: 'none',
	}),
	valueContainer: (provided, state) => ({
		...provided,
		padding: '0',
		fontSize: "1rem"
	}),
	option: (provided, state) => ({
		...provided,
		cursor: 'pointer',
		fontSize: "1rem",
		backgroundColor: state.isSelected ? '#005cbb' : (state.isFocused) ? 'transparent' : 'transparent',
		color:state.isSelected?"fff":"#000",
		'&:hover': {
			backgroundColor: '#000',
			color:"#fff"
		}
	}),


};
