const openModal = document.getElementById('openRegisterModal');
const modal = document.getElementById('modal');
const closeModal =document.getElementById('closeRegisterModal')
const registerForm = document.getElementById('register-form')
// const app = initializeApp(firebaseConfig);
// const agendaRef = firebase.database().ref("register")


const showRegisterModal = () => {
	modal.classList.toggle('is-active');
}

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

		 return totalStb = stb * 1873
	 }
	}

	const extTotal = () => {
		if (extensor >= 1 || extensor < 3)
			return totalExt = extensor * 1873
	}

	console.log(orden);
	console.log(nombreCliente);
	console.log(stb);
	console.log(stbTotal(stb))
	console.log(extensor)
	console.log(extTotal(extensor))
	console.log(descripcion)
	
	// const registerAgenda = agendaRef.push()
	// console.log(registerAgenda)
	// console.log(registerAgenda.path.pieces_[1])
	// registerAgenda.set({
	// 	Uid : registerAgenda.path.pieces_[1],
	// })
})
