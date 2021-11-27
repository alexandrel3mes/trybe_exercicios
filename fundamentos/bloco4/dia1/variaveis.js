let trafficLight = "verde";

switch (trafficLight) {
	case "vermelho":
		console.log("pare");
		break;

	case "amarelo":
        console.log("atenção");
		break;
	
	case "verde":
		console.log("siga")
		break;

	default: //irá executar caso nenhum dos anteriores for real
		console.log("valor não identificado")
}