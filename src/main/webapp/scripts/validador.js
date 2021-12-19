/**
 * Validação de formulário
 *@author Guilherme Augusto
 */

function validar() {
	let nome = frmContato.nome.value
	let fone = frmContato.fone.value
	if (nome === "") {
		alerta('Preencha o campo Nome')
		frmContato.nome.focus()
		return false
	} else if (fone === "") {
		alerta('Preencha o campo Fone')
		frmContato.fone.focus()
		return false
	} else {
		document.forms["frmContato"].submit()
	}
}