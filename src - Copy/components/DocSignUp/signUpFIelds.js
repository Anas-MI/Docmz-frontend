import React from "react";
import { Form, Field } from "formik";
import { InputField, SelectField } from "../Fields/FormFields";
import {
  validateEmail,
  isRequired,
  validatePassword
} from "../Fields/ValidateFields";
import { Icon,  Row, Col, Divider } from "antd";
import InfoCard from "../Card/InfoCard"
//import "./login.css"

export default ({ handleSubmit, values, submitCount }) => (
  <div>
    <Form  onSubmit={handleSubmit} layout="vertical">
      <Row>
        <Col span="24">
          <InfoCard
            values={values}
          />
        </Col>
      </Row>
      
      <Row>
        <Col xs={24} sm={24} md={12} lg={8} xl={12}>
          <div className="user-info-input">
            <Field
              component={InputField}
              name="email"
              type="email"
              label="Email"
              className="custom-from"
              validate={validateEmail}
              submitCount={submitCount}
              hasFeedback
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="user-info-input">
            <Field
              component={InputField}
              name="password"
              label="Password"
              type="password"
              validate={validatePassword}
              submitCount={submitCount}
              hasFeedback
              password
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="user-info-input">
            <Field
              component={SelectField}
              name="specialty"
              validate={isRequired}
              submitCount={submitCount}
              selectOptions={values.doctors}
              hasFeedback
              label="Specialty"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={12}>
          <div className="user-info-input">
            <Field
              component={InputField}
              name="phone"
              type="number"
              label="Phone"
              className="custom-from"
              validate={isRequired}
              submitCount={submitCount}
              hasFeedback
              prefix={<Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />}
            />
          </div>
        </Col>
      </Row>
      <Divider />
      

     
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} span="24">
          <h3>Details</h3>
          <div className="ant-table ant-table-default ant-table-bordered ant-table-scroll-position-left">
            <div class="ant-table-content">
              <div className="ant-table-body">
                <table className="custom-table">
                  <thead className="ant-table-thead">
                    <tr>
                      <th>Name</th>
                      <th>Values</th>
                    </tr>
                  </thead>
                  <tbody className="ant-table-tbody">
                    <tr>
                      <td>NPI</td>
                      <td>{values.doctorInfo.number}</td>
                    </tr>
                    <tr>
                      <td>Enumeration Date</td>
                      <td> {values.doctorInfo.basic.enumeration_date}</td>
                    </tr>
                    <tr>
                      <td>NPI Type</td>
                      <td>{values.doctorInfo.enumeration_type}</td>
                    </tr>
                    <tr>
                      <td>Sole Proprietor</td>
                      <td>{values.doctorInfo.basic.sole_proprietor}</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td>
                        {values.doctorInfo.basic.status === "A"
                          ? "Active"
                          : "In-Active"}
                      </td>
                    </tr>

                    {values.addresses.map((address, index) => (
                      <tr>
                        <td>{address.address_purpose.toLowerCase()} Address</td>
                        <td>
                          {" "}
                          {address.address_1}, {address.address_2},{" "}
                          {address.city} {address.state}, {address.postal_code}{" "}
                          {address.country_name}.
                          <Divider />
                          Phone : {address.telephone_number}
                          <Divider type="vertical" />
                          Fax : {address.fax_number}
                        </td>
                      </tr>
                    ))}
                   <tr>
                      <td>Other Identifiers</td>
                      <td>
                        <table>
                          <thead className="ant-table-thead">
                            <tr>
                              <th>Issuer</th>
                              <th>State</th>
                              <th>Number</th>
                            </tr>
                          </thead>
                          <tbody className="ant-table-tbody">
                            {values.identifiers.map(identifier => (
                              <tr>
                                <td>
                                  {identifier.desc} <Divider type="vertical" />{" "}
                                  {identifier.issuer}
                                </td>
                                <td>{identifier.state} </td>
                                <td>{identifier.identifier}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>Taxonomy</td>
                      <td>
                        <table>
                          <thead className="ant-table-thead">
                            <tr>
                              <th>Primary Taxonomy</th>
                              <th>Selected Taxonomy</th>
                              <th>State</th>
                              <th>License Number</th>
                            </tr>
                          </thead>
                          <tbody className="ant-table-tbody">
                            {values.taxonomies.map(taxonomy => (
                              <tr>
                                <td>{taxonomy.primary ? "Yes" : "False"}</td>
                                <td>{taxonomy.code} - {taxonomy.desc}</td>
                                <td>{taxonomy.state}</td>
                                <td>{taxonomy.license}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <div className="submit-container">
        <button className="ant-btn ant-btn-primary" type="submit">
          Submit
        </button>
      </div>
    </Form>
  </div>
);
