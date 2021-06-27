import React, { useState } from "react";
import {
  Form,
  Button,
  Upload,
  Input,
  Select,
  DatePicker,
  Row,
  Col,
  Card,
} from "antd";
import { routes } from "../data";
import Layout from "../../../components/layout";
import { WrapperForm } from "./styles";
import ImgCrop from "antd-img-crop";
import moment from "moment";
import FormSelect from "../../../components/form/select";
import { responsibilityOption, maritalStatus } from "./data";
//import {Input, Select} from  '../../../components/form'
//trocar os Input e Select pelo personalizado

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

  //DatePicker

  const dateFormatList = ["DD/MM/YYYY"];

  return (
    <Layout
      breadcrumb={{ routes: routes }}
      title="Cadastro de Membros"
      subtitle="Preencha todos os campos possiveis."
    >
      <Card>
        <Form
          name="basic"
          //initialValues={{ remember: true }}
          //onFinish={onFinish}
          //onFinishFailed={onFinishFailed}
        >
          <Row>
            <Col>
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
                    onPreview={
                      onPreview
                    } /* {fileList.length < 5 && 'Adicionar foto'}  */
                  >
                    Adicionar foto
                  </Upload>
                </ImgCrop>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={18}>
              <Form.Item
                label="Nome"
                name="name"
                rules={[
                  { required: true, message: "Informe o nome completo!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <FormSelect
                label="Cargo"
                name="responsabilty"
                defaultValue="member"
                options={responsibilityOption}
              />
            </Col>
          </Row>

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
          <br />
          <Form.Item
            label="Congregação"
            name="congregacao"
            rules={[{ required: true, message: "Selecione a congregação!" }]}
          >
            <Select defaultValue="Sede" style={{ width: "12%" }}>
              <Option value="id1">Rosário da Limeira</Option>
              <Option value="id2">Vieiras</Option>
              <Option value="id3">Colety</Option>
            </Select>
          </Form.Item>
          <br />

          <Form.Item
            label="Estado Civil"
            name="estadoCivil"
            rules={[{ required: true, message: "Informe o estado civil!" }]}
          >
            <Select defaultValue="Casado" style={{ width: "12%" }}>
              <Option value="id1">Solteiro</Option>
              <Option value="id2">Viúvo</Option>
              <Option value="id3">Divorciado</Option>
              <Option value="id3">Separado</Option>
              <Option value="id3">Amasiado</Option>
            </Select>
          </Form.Item>
          <br />
          <Form.Item
            label="Naturalidade"
            name="naturalidade"
            rules={[{ required: true, message: "Informe a Naturalidade!!" }]}
          >
            <Input style={{ width: "50%" }} placeholder="Naturalidade" />
          </Form.Item>
          <br />
          <Form.Item
            label="Documento"
            name="document"
            rules={[
              { required: true, message: "Informe ao menos um documento!" },
            ]}
          >
            <Select defaultValue="Tipo Documento" style={{ width: "15%" }}>
              <Option value="cpf">CPF</Option>
              <Option value="rg">Identidade</Option>
            </Select>
            <Input style={{ width: "20%" }} placeholder="Documento" />
          </Form.Item>
          <br />
          <Form.Item label="Nome do Pai" name="fatherName">
            <Input style={{ width: "50%" }} placeholder="Nome do pai" />
          </Form.Item>
          <br />
          <Form.Item
            label="Nome da Mãe"
            name="momName"
            rules={[{ required: true, message: "Informe o nome da mãe!" }]}
          >
            <Input style={{ width: "50%" }} placeholder="Nome da mãe" />
          </Form.Item>
          <br />

          <Input.Group compact>
            <Form.Item
              label="Data Nascimento"
              name="lblDataNascimento"
              rules={[
                { required: true, message: "Informe a data de nascimento!" },
              ]}
            >
              <DatePicker
                name="dataNascimento"
                defaultValue={moment("01/01/2000", dateFormatList[0])}
                format={dateFormatList}
              />
            </Form.Item>

            <Form.Item label="Data de Batismo" name="lblDataBatismo">
              <DatePicker
                name="dataBatismo"
                defaultValue={moment("01/01/2000", dateFormatList[0])}
                format={dateFormatList}
              />
            </Form.Item>

            <Form.Item
              label="Data de Admissão"
              name="lblDataAdmissao"
              rules={[
                { required: true, message: "Informe a data de admissão!" },
              ]}
            >
              <DatePicker
                name="dataAdmissao"
                defaultValue={moment("01/01/2000", dateFormatList[0])}
                format={dateFormatList}
              />
            </Form.Item>
          </Input.Group>

          <br />

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  );
};

export default FormPage;
