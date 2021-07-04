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
import ImgCrop from "antd-img-crop";
import FormSelect from "../../../components/form/select";
import FormDatePicker from "../../../components/form/datepicker";
import {
  responsibilityOption,
  maritalStatus,
  church,
  publicPlace,
} from "./data";
//import {Input, Select, DatePicker} from  '../../../components/form'
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
          <Row gutter={24}>
            <Col span={18}>
              <Row gutter={0}>
                <Col span={6}>
                  <FormSelect
                    label="Endereço"
                    name="publicPlace"
                    options={publicPlace}
                  />
                </Col>
                <Col span={18}>
                  <Input placeholder="Endereço" />
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <Input placeholder="Número" />
            </Col>
          </Row>
          <br />
          <Row gutter={24}>
            <Col span={8}>
              <FormSelect
                label="Igreja"
                name="church"
                defaultValue="headOffice"
                options={church}
              />
            </Col>
            <Col span={8}>
              <FormSelect
                label="Estado Civil"
                name="maritalStatus"
                defaultValue="married"
                options={maritalStatus}
              />
            </Col>

            <Col span={8}>
              <Form.Item
                label="Naturalidade"
                name="naturalidade"
                rules={[
                  { required: true, message: "Informe a Naturalidade!!" },
                ]}
              >
                <Input placeholder="Naturalidade" />
              </Form.Item>
            </Col>
          </Row>
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
          <Row gutter={24}>
            <Col span={8}>
              <FormDatePicker name="birthDate" label="Data de Nascimento" />
            </Col>
            <Col span={8}>
              <FormDatePicker name="baptismDate" label="Data de Batismo" />
            </Col>
            <Col span={8}>
              <FormDatePicker name="admissionDate" label="Data de Admissão" />
            </Col>
          </Row>
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
