import React from "react";
import SpinnerJpeg from "../assets/images/spinner.png";

function Spinner() {
	return (
		<div className='h-screen bg-black flex items-center justify-center overflow-hidden'>
			<img src={SpinnerJpeg} alt='' className='h-70 w-60 animate-spin' />
		</div>
	);
}

export default Spinner;
