import IFooCepAPI from "./IFooCepAPI";
export default class MockCepApi implements IFooCepAPI {
  
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    const returnedString =  `The mock address for "cep:${cep}, n°:${number}" is "mock address"`
    return returnedString;
}
  async getCepByAddress(address: string, number: number): Promise<string> {
    const returnedString =  `The mock cep for: "${address}, n°:${number}" is "mock cep"`
    return returnedString;
}
}