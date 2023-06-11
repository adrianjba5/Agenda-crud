const openModal = document.getElementById('openRegisterModal');
const modal = document.getElementById('modal');
const closeModal =document.getElementById('closeRegisterModal')
const registerForm = document.getElementById('register-form')
const decirAlgo = document.querySelector('.alarma')


const showRegisterModal = () => {
	modal.classList.toggle('is-active');
}
decirAlgo.addEventListener('click', ()=>{
	alert("Hola mundo")
})

openModal.addEventListener('click', showRegisterModal);
closeModal.addEventListener('click', showRegisterModal);


registerForm.addEventListener('submit', (e)=>{
	e.preventDefault()

	const orden = registerForm['orden'].value
	const nombreCliente = registerForm['cliente'].value
	const stb = registerForm['stb'].value
	const extensor = registerForm['extensor'].value
	const descripcion = registerForm['desc'].value


	const stbTotal = () => {

	if ( stb >= 1 || stb < 6) {

		 return stb * 1873
	 }
	}
	const totalStb = stbTotal();

	const extTotal = () => {
		if (extensor >= 1 || extensor < 3)
			return extensor * 1873
	}
	const totalExt = extTotal();

	let data = {

		orden: orden,
		nombreCliente: nombreCliente,
		stb: stb,
		totalStb: totalStb,
		extensor: extensor,
		totalExt: totalExt,
		descripcion: descripcion
	};
     	  // Guardar los datos en Firebase Firestore

	  var db = firebase.firestore();
  db.collection('Agenda').add(data)
    .then(function(docRef) {
      console.log('Documento guardado con ID: ', docRef.id);
      // Aquí puedes realizar acciones adicionales después de guardar los datos
    })
    .catch(function(error) {
      console.error('Error al guardar el documento: ', error);
    });

  // Restablecer el formulario después de enviar los datos
  registerForm.reset();
});

