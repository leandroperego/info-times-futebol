import *  as React from "react";
import {
    Card,
    Input,
    Button,
    Typography,
    Select,
    Option,
    Textarea,
} from "@material-tailwind/react";
import Layout from "../components/Layout";
import Controller from "../infra/Controller";

export default function Contato() {

    const [inputs, setInputs] = React.useState({
        nome: "",
        email: "",
        estado: {
            id: "",
            value: ""
        },
        cidade: "",
        mensagem: "",
    });
    const [estados, setEstados] = React.useState([]);
    const [cidades, setCidades] = React.useState(["Selecione..."]);

    React.useEffect(() => {
        const opt = [{ id: "", value: "Selecione..." }];
        Controller.getEstados()
            .then((data) => {
                data.forEach(uf => {
                    opt.push({
                        id: uf.id,
                        value: uf.sigla
                    });
                });
                setEstados(opt);
            })
            .catch((error) => console.log(error));
    }, []);

    React.useEffect(() => {
        if (inputs.estado.id !== "") {
            const opt = ["Selecione..."];
            Controller.getMunicipios(inputs.estado.id)
                .then((data) => {
                    data.forEach(cidade => {
                        opt.push(cidade.nome);
                    });
                    setCidades(opt);
                })
                .catch((error) => console.log(error));
        }
    }, [inputs.estado]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
    };

    const handleChangeSelectEstado = (valueSelected) => {
        setInputs((inputs) => ({ ...inputs, estado: { id: valueSelected, value: estados.find(uf => uf.id === valueSelected).value } }));
    };

    const handleChangeSelectCidade = (valueSelected) => {
        setInputs((inputs) => ({ ...inputs, cidade: valueSelected }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const response = Controller.enviarContato(inputs);

        if (response) {
            alert("Mensagem enviada com sucesso! Em breve retornaremos seu contato.");
            setInputs({
                nome: "",
                email: "",
                estado: {
                    id: "",
                    value: ""
                },
                cidade: "",
                mensagem: "",
            });
        } else {
            alert("Ocorreu um erro ao enviar sua mensagem.");
        }
    };

    return (
        <Layout>
            <Card color="transparent" shadow={false} className="mt-12 mx-auto w-96">
                <Typography variant="h4" color="blue-gray">
                    Fale Conosco
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Venha fazer parte da nossa comunidade
                </Typography>
                <form name="form_contato" method="post" data-netlify="true" data-netlify-honeypot="bot-field" className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <input type="hidden" name="form-name" value="form_contato" />
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Seu nome
                        </Typography>
                        <Input
                            name="nome"
                            value={inputs.nome}
                            onChange={handleChange}
                            size="lg"
                            placeholder="digite seu nome"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Seu e-mail
                        </Typography>
                        <Input
                            name="email"
                            value={inputs.email}
                            onChange={handleChange}
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Selecione seu estado
                        </Typography>
                        <Select label="Selecione..." name="estado" onChange={handleChangeSelectEstado}>
                            {
                                estados.map((estado) => (
                                    <Option key={estado.id} value={estado.id}>{estado.value}</Option>
                                ))
                            }
                        </Select>
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Selecione sua cidade
                        </Typography>
                        <Select label="Selecione..." name="cidade" disabled={inputs.estado.id ? false : true} onChange={handleChangeSelectCidade}>
                            {
                                cidades.map((cidade, index) => (
                                    <Option key={index} value={cidade}>{cidade}</Option>
                                ))
                            }
                        </Select>
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Escreva sua mensagem
                        </Typography>
                        <div className="flex w-auto flex-col gap-6">
                            <Textarea variant="outlined" placeholder="Sua mensagem..." name="mensagem" value={inputs.mensagem} onChange={handleChange} />
                        </div>
                    </div>
                    <Button type="submit" onClick={handleSubmit} className="mt-6" fullWidth>
                        enviar
                    </Button>
                </form>
            </Card>
        </Layout>
    );
}