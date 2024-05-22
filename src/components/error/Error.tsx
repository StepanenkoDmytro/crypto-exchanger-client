import  './Error.css';

const Error = (props: any) => {

	return (
		<div className="error">
			<div>An error occurred while performing the operation.</div>
			<div>Please try again later.</div>
			<button className="btn" onClick={() => props.onRetry()}>Retry</button>
		</div>
	)
}

export default Error;