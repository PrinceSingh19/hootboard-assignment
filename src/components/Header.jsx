// eslint-disable-next-line react/prop-types
const Header = ({ additionalElement }) => {
	return (
		<div className="margin-header">
			<div className="headerAlign">
				<span>{additionalElement}</span> <h4> Weather App</h4>
			</div>
		</div>
	);
};

export default Header;
