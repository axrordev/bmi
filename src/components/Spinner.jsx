import spinner from "../assets/svg/spinner.svg"
const Spinner = () => {
	return (
		<div className="bg-black bg-opacity-40 flex items-center justify-center fixed left-0 bottom-0 right-0 top-0 ">
			<div>
				<img src={spinner} alt="" className="h-24"/>
			</div>
		</div>
	);
};

export default Spinner;
