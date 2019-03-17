import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import {connect} from "react-redux";
import {partnerActions} from "../../actions/Partner";

function UserRow(props) {
  const partner = props.partner;
  const userLink = `/partners/${partner.id}`

  return (
    <tr key={partner.id.toString()}>
      <th scope="row"><Link to={userLink}>{partner.id}</Link></th>
      <td><Link to={userLink}>{partner.name}</Link></td>
      <td>{partner.description}</td>
      <td>{partner.city}</td>
    </tr>
  )
}

class Partners extends Component {

  componentDidMount() {
    this.props.fetchAll();
  }

  render() {

    const {partners} = this.props;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Partners <small className="text-muted">All</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">description</th>
                      <th scope="col">city</th>
                    </tr>
                  </thead>
                  <tbody>
                    {partners && partners.map((partner, index) =>
                      <UserRow key={index} partner={partner}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { partners } = state.partnersReducer;

  return {
    partners: partners,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAll: () => dispatch(partnerActions.fetchAll()),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Partners);
