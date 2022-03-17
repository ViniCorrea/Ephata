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
import { routes } from "../../../constants/pages/members";
import Layout from "../../../components/layout";
import ImgCrop from "antd-img-crop";
import FormSelect from "../../../components/form/select";
import FormDatePicker from "../../../components/form/datepicker";
import FormInput from "../../../components/form/input";
import {
  RESPOSABILITIES,
  MARITAL_STATUS,
  CHURCH,
  PUBLIC_PLACE,
  TYPE_DOCUMENT
} from "../../../constants/selectsOptions";
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
              <FormInput
                label="Nome"
                name="name"
              />
            </Col>
            <Col span={6}>
              <FormSelect
                label="Cargo"
                name="responsabilty"
                defaultValue="member"
                options={RESPOSABILITIES}
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
                    options={PUBLIC_PLACE}
                  />
                </Col>
                <Col span={18}>
                <FormInput
                name="address"
                placeholder="Endereço"
                  />
                </Col>
              </Row>
            </Col>
            <Col span={6}>
            <FormInput
                name="number"
                placeholder="Número"
                  />
            </Col>
          </Row>
        
          <Row gutter={24}>
            <Col span={8}>
              <FormSelect
                label="Igreja"
                name="church"
                defaultValue="headOffice"
                options={CHURCH}
              />
            </Col>
            <Col span={8}>
              <FormSelect
                label="Estado Civil"
                name="maritalStatus"
                defaultValue="married"
                options={MARITAL_STATUS}
              />
            </Col>

            <Col span={8}>
              
            <FormInput
                label="Naturalidade"
                name="naturalness"
                placeholder="Naturalidade"
            />

            </Col>
          </Row>


              <Row gutter={0}>
                <Col span={12}>
                  <FormSelect
                    label="Tipo de Documento"
                    name="typeDocument"
                    options={TYPE_DOCUMENT}
                  />
                </Col>
                <Col span={12}>
                <FormInput
                name="document"
                placeholder="Documento"
                  />
                </Col>
              </Row>
          
          <Row gutter={24}>
            <Col span={24}>
            <FormInput
                  label="Nome do Pai"
                  name="fatherName"
                  placeholder="Nome do pai"
              />
            </Col>
          </Row>
          
          <Row gutter={24}>
            <Col span={24}>
            <FormInput
                  label="Nome do Mãe"
                  name="motherName"
                  placeholder="Nome da mãe"
              />
            </Col>
          </Row>
          
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
          
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Salvar
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  );
};

export default FormPage;
