

class Controller {

    encode (data) {
        return Object.keys(data)
            .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };
    enviarContato(campos) {
        return fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: this.encode.bind()({ "form-name": "form_contato", ...campos })
        }).then(() => {
            console.log("enviado");
            return true
        }).catch((error) => {
            console.log(error);
            return false
        })
    }

    getEstados() {
        return fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
            .then(response => response.json())
            .catch(error => console.log(error));
    }

    getMunicipios(idEstado) {
        return fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idEstado}/municipios?orderBy=nome`)
            .then(response => response.json())
            .catch(error => console.log(error));
    }
}

export default new Controller();