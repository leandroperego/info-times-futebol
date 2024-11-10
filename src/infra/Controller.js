

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
}

export default new Controller();