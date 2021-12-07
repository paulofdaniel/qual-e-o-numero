export function ApiService() {

  const url = process.env.API_URL;

  this.get = async() => {

    let response;

    try{
      response = await fetch(url);
      const json = await response.json();

      if (!response.ok || json["Error"]) {
        return {
          value: json.StatusCode,
          status: 'error',
          message: "ERRO"
        }
      }

      return {
        value: json.value,
        status: 'neutral',
        message: ""
      }
    }catch(e){ 

      return {
        value: response.status,
        status: 'error',
        message: "ERRO"
      }   
    }
  }
}