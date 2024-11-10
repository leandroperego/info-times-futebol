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
        estado: null,
        cidade: null,
        mensagem: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const response = Controller.enviarContato(inputs);

        if (response) {
            alert("Mensagem enviada com sucesso! Em breve retornamos seu contato.");
            setInputs({
                nome: "",
                email: "",
                estado: null,
                cidade: null,
                mensagem: "",
            });
        }
    };

    return (
        <Layout>
            <Card color="transparent" shadow={false} className="mt-12 mx-auto w-96">
                <Typography variant="h4" color="blue-gray">
                    Fale Conosco
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Vamos fazer parte da nossa comunidade
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
                        <Select label="Selecione..." name="estado" value={inputs.estado} onChange={handleChange}>
                            <Option value="pr">PR</Option>
                            <Option value="sc">SC</Option>
                            <Option value="rs">RS</Option>
                        </Select>
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Selecione sua cidade
                        </Typography>
                        <Select label="Selecione..." name="cidade" value={inputs.cidade} onChange={handleChange} disabled={inputs.estado ? false : true}>
                            <Option>Curitiba</Option>
                            <Option>Campo Largo</Option>
                            <Option>Pinhais</Option>
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