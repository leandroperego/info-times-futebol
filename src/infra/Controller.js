

class Controller {

    encode (data) {
        return Object.keys(data)
            .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };
    enviarContato(campos) {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: this.encode({ "form-name": "form_contato", ...campos })
        }).then(() => {
            return true
        }).catch((error) => {
            console.log(error);
            return false
        })
    }
}

export default new Controller();