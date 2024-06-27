import Saludo from './Saludo';

const App = () => {
	return (
		<div>
			<Saludo nombre="Juanin" apellido="Perez" edad={13} />
			<Saludo nombre="Pepe" />
			<Saludo nombre="Maria" />
			<Saludo nombre="Juana" />
			<Saludo nombre="Daniel" />
		</div>
	);
};

export default App;
