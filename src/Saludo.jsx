const Saludo = (props) => {
	return (
		<div>
            <hr />
			<h1>Hola {props.nombre} {props.apellido}</h1>
			<h2>Bienvenido a React</h2>
            <p>Tu edad es: {props.edad}</p>
            <hr />
		</div>
	);
};

export default Saludo;