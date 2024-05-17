import "../src/components/signup";
import React from "react";

import { Flex, Image, Layout, Typography } from "antd";
const { Text, Link } = Typography;
import { Button, Checkbox, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function App() {
  return (
    <>
      <div>
        <Layout
          style={{
            width: "100%",
            minHeight: "100%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Layout>
            {" "}
            <Image
              width={"full"}
              src="./assets/banner.png"
              placeholder={
                <Image
                  preview={false}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                  width={200}
                />
              }
            />
          </Layout>
          <Layout
            style={{
              width: "100%",
              minHeight: "100vh",
              display: "flex",
              flexDirection: "col",
            }}
          >
            <Layout
              style={{
                width: "100%",
                minHeight: "10vh",
                display: "flex",
                justifyContent: "start",
                flexDirection: "col",
              }}
            >
              <Image src="./assets/vector.svg" width={20} height={20} />
            </Layout>
            <Layout
              style={{
                width: "90vh",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Layout
                style={{
                  width: "90vh",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <Text type="success">Sign Up</Text>
                <Layout
                  style={{
                    width: "90vh",
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                  }}
                >
                  <Text>Or</Text>
                  <Text type="success">Sign In</Text>
                </Layout>
              </Layout>
            </Layout>
            <Layout>
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                  placeholder="Username"
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  placeholder="Password"
                  style={{
                    borderRadius: "50%",
                  }}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  placeholder="Password"
                  style={{
                    borderRadius: "50%",
                  }}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item style={{ backgroundcolor: "green" }}>
                  <Button type="primary" htmlType="submit">
                    login
                  </Button>
                </Form.Item>
              </Form>
            </Layout>
          </Layout>
        </Layout>
      </div>
    </>
  );
}

export default App;
