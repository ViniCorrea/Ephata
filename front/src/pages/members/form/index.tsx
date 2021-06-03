import React, { useState } from "react";
import { Form, Button, Upload, Input, Col, Row, Select } from "antd";
import { routes, options } from "../data";
import Layout from "../../../components/layout";
import { WrapperForm } from "./styles";
import ImgCrop from "antd-img-crop";

const FormPage = () => {
  // Creating action buttons

  const { Option } = Select;

  const [fileList, setFileList] = useState();

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <Layout
      breadcrumb={{ routes: routes }}
      title="Cadastro de Membros"
      subtitle="Preencha todos os campos possiveis."
    >
      <WrapperForm>
        <Form
          name="basic"
          //initialValues={{ remember: true }}
          //onFinish={onFinish}
          //onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Foto"
            name="picture"
            rules={[{ required: true, message: "Selecione a foto!" }]}
          >
            <ImgCrop rotate>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview} //Erro no onPreview | dentro do Upload => //{fileList.length < 5 && '+ Upload'}  //Erro no fileList
              >
                Adicionar foto
              </Upload>
            </ImgCrop>
          </Form.Item>
          <Form.Item
            label="Nome"
            name="name"
            rules={[{ required: true, message: "Informe o nome completo!" }]}
          >
            <Input style={{ width: "80%" }} />
          </Form.Item>

          <Form.Item
            label="Endereço"
            name="endereco"
            rules={[{ required: true, message: "Informe o endereço!" }]}
          >
            <Input.Group compact>
              <Select defaultValue="Rua" style={{ width: "10%" }}>
                <Option value="Avenida">Avenida</Option>
                <Option value="Quadra">Rua</Option>
              </Select>
              <Input style={{ width: "60%" }} placeholder="Endereço" />
              <Input style={{ width: "10%" }} placeholder="Número" />
            </Input.Group>
          </Form.Item>
          <br />

          <Form.Item
            label="Cargo"
            name="cargo"
            rules={[{ required: true, message: "Selecione a foto!" }]}
          ></Form.Item>
          <br />
          <Form.Item
            label="Congregação"
            name="congregacao"
            rules={[{ required: true, message: "Selecione a foto!" }]}
          ></Form.Item>
          <br />
          <Form.Item
            label="Data Nascimento"
            name="datebirth"
            rules={[{ required: true, message: "Selecione a foto!" }]}
          ></Form.Item>
          <br />
          <Form.Item
            label="Estado Civil"
            name="estadoCivil"
            rules={[{ required: true, message: "Selecione a foto!" }]}
          ></Form.Item>
          <br />
          <Form.Item
            label="Naturalidade"
            name="naturalidade"
            rules={[{ required: true, message: "Selecione a foto!" }]}
          ></Form.Item>
          <br />
          <Form.Item
            label="Documento"
            name="document"
            rules={[{ required: true, message: "Selecione a foto!" }]}
          ></Form.Item>
          <br />
          <Form.Item
            label="Nome do Pai"
            name="fatherName"
            rules={[{ required: true, message: "Selecione a foto!" }]}
          ></Form.Item>
          <br />
          <Form.Item
            label="Nome da Mãe"
            name="momName"
            rules={[{ required: true, message: "Selecione a foto!" }]}
          ></Form.Item>
          <br />
          <Form.Item
            label="Data de Batismo"
            name="dataBatismo"
            rules={[{ required: true, message: "Selecione a foto!" }]}
          ></Form.Item>
          <br />
          <Form.Item
            label="Data de Admissão"
            name="dataAdmissao"
            rules={[{ required: true, message: "Selecione a foto!" }]}
          ></Form.Item>
          <br />

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </WrapperForm>
    </Layout>
  );
};

export default FormPage;
