const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [],
			full_name: null,
			email: null,
			agenda_slug: "cristian_parra",
			address: null,
			phone: null
		},
		//(Arrow) Functions that update the Store
		// Remember to use the scope: scope.state.store & scope.setState()
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			// Read
			getContacts: async () => {
				const store = getStore();
				const data = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/cristian_parra");
				const response = await data.json();
				setStore((store.contacts = response));
			},
			// Create
			postContact1: () => {
				//To access to data from the store(obj), use getstore. You will use frequently to change the data stored.

				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: "cristian parra",
						email: "cristian.a.parra@gmail.com",
						agenda_slug: "cristian_parra",
						address: "brasilia 2730",
						phone: "988863544"
					})
				};
				fetch("https://assets.breatheco.de/apis/fake/contact/", requestOptions)
					.then(response => response.json())
					.then(data => setStore({ contacts: data }));
			},
			postContact2: () => {
				//To access to data from the store(obj), use getstore. You will use frequently to change the data stored.
				const store = getStore();
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: store.full_name,
						email: store.email,
						agenda_slug: store.agenda_slug,
						address: store.address,
						phone: store.phone
					})
				};
				fetch("https://assets.breatheco.de/apis/fake/contact/", requestOptions)
					.then(response => response.json())
					.then(data => data);
			},
			handleChange: e => {
				const store = getStore();
				setStore({
					[e.target.name]: e.target.value
				});
			},
			handleClickSubmit: e => {
				e.preventDefault();
				getActions().postContact2();
			},
			// Update
			putContact: id => {
				const store = getStore();
				const requestOptions = {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: store.full_name,
						email: store.email,
						agenda_slug: store.agenda_slug,
						address: store.address,
						phone: store.phone
					})
				};
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, requestOptions)
					.then(response => response.json())
					.then(data => setStore(data));
			},
			handleClickUpdate: (e, id) => {
				e.preventDefault();
				getActions().putContact(id);
			},
			// Delete
			deleteContact: id => {
				const store = getStore();
				const requestOptions = {
					method: "DELETE",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: store.full_name,
						email: store.email,
						agenda_slug: store.agenda_slug,
						address: store.address,
						phone: store.phone
					})
				};
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, requestOptions)
					.then(response => response.json())
					.then(data => getActions().getContacts());
			},

			handleSetContact: contact => {
				setStore({ contact: contact });
			},

			handleDelete: (e, id) => {
				e.preventDefault();
				getActions().deleteContact(id);
			}
		}
	};
};

export default getState;
