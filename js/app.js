(function () {
	const type = document.getElementById("tipo-ingresso");
	const quantity = document.getElementById("qtd");
	const pista = document.getElementById("qtd-pista");
	const superior = document.getElementById("qtd-superior");
	const inferior = document.getElementById("qtd-inferior");
	const button = Array.from(document.getElementsByTagName("button"))[0];

	button.addEventListener("click", () => {
		const quantityValue = quantity.value;
		if (quantity.value > 0) {
			switch (type.value) {
				case "inferior":
					let inferiorValue = parseInt(inferior.textContent);
					if (inferiorValue > 0) {
						inferiorValue -= quantityValue;
						inferior.textContent = ` ${inferiorValue}`;
					} else {
						alert("Indisponivel para compra!");
					}
					break;

				case "superior":
					let superiorValue = parseInt(superior.textContent);
					if (superiorValue > 0) {
						superiorValue -= quantityValue;
						superior.textContent = ` ${superiorValue}`;
					} else {
						alert("Indisponivel para compra!");
					}
					break;

				case "pista":
					let pistaValue = parseInt(pista.textContent);
					if (pistaValue > 0) {
						pistaValue -= quantityValue;
						pista.textContent = ` ${pistaValue}`;
					} else {
						alert("Indisponivel para compra!");
					}
					break;

				default:
					break;
			}
		}
	});
})();
