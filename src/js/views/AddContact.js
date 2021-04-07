import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const AddContact = props => {
	const { store, actions } = useContext(Context);
	const { params } = props.match;

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="full_name"
							value={store.fullname}
							onChange={e => actions.handleChange(e)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							name="email"
							value={store.email}
							onChange={e => actions.handleChange(e)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							name="phone"
							value={store.phone}
							onChange={e => actions.handleChange(e)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							name="address"
							value={store.address}
							onChange={e => actions.handleChange(e)}
						/>
					</div>
					<button
						type="submit"
						className="btn btn-primary form-control mb-3"
						onClick={e => actions.handleClickSubmit(e)}>
						save
					</button>
					<button
						type="submit"
						className="btn btn-primary form-control mb-3"
						onClick={e => actions.handleClickUpdate(e, params.id)}>
						Update
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

AddContact.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.number.isRequired
		})
	}),
	params: PropTypes.any
};
