import React, { Component } from 'react';
import {
  Button, Card, CardBody, CardHeader, Col, CustomInput, Form, FormGroup, Input, Label, Row
} from 'reactstrap';

import {connect} from "react-redux";
import {partnerActions} from "../../actions/Partner";

class Partner extends Component {

  partner = {
    id: null,
    name: null,
    address: null,
    city: null,
    tel: null,
    description: null,
    latitude: null,
    longitude: null,
    userId: null,
    createdAt: null,
    updatedAt: null,
    Images: []
  };

  constructor(props) {
    super(props);

    this.state = {
      partner : null
    }

    this.handleChangePartner = this.handleChangePartner.bind(this);
  }

  componentDidMount() {
    const {params} = this.props.match;
    if(params.id) {
      this.props.fetchOne(params.id)
    } else {
      this.setState({
        partner: this.partner,
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.partner) {
      this.setState({
        partner: nextProps.partner,
      })
    }
  }

  handleChangePartner(e) {
    const {partner} = this.state;
    const {name, value} = e.target;
    partner[name] = value;
    this.setState({partner});
  }

  render() {

    const {partner} = this.state;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>Partner</strong> {partner && partner.name && partner.name}
              </CardHeader>
              <CardBody>
                {partner ?
                <Form action="" method="post" className="form-horizontal">
                  {partner.id &&
                  <FormGroup row>
                    <Col md="3">
                      <Label>Id</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">{partner.id}</p>
                    </Col>
                  </FormGroup>
                  }
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-name">Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="hf-name" name="name" placeholder="Enter name..."
                             autoComplete="partner-name" value={partner.name}
                             onChange={this.handleChangePartner}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-address">Address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="hf-address" name="address" placeholder="Enter address..."
                             autoComplete="partner-address" value={partner.address}
                             onChange={this.handleChangePartner}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-name">City</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="hf-city" name="city" placeholder="Enter city..."
                             autoComplete="partner-city" value={partner.city}
                             onChange={this.handleChangePartner}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="hf-name">Tel</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" id="hf-tel" name="tel" placeholder="Enter tel..."
                           autoComplete="partner-tel" value={partner.tel}
                           onChange={this.handleChangePartner}/>
                  </Col>
                </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-description">Description</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" id="hf-description" name="description" placeholder="Enter description..."
                             autoComplete="partner-description" value={partner.description}
                             onChange={this.handleChangePartner}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-latitude">Latitude</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="number" id="hf-latitude" name="latitude" placeholder="Enter latitude..."
                             autoComplete="partner-latitude" value={partner.latitude}
                             onChange={this.handleChangePartner}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-longitude">Longitude</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="number" id="hf-longitude" name="longitude" placeholder="Enter longitude..."
                             autoComplete="partner-longitude" value={partner.longitude}
                             onChange={this.handleChangePartner}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="user">User</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="userId" id="userId" onChange={this.handleChangePartner}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  {partner.createdAt &&
                  <FormGroup row>
                    <Col md="3">
                      <Label>Created At</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">{new Date(partner.createdAt).toLocaleDateString()}</p>
                    </Col>
                  </FormGroup>
                  }
                  {partner.updatedAt &&
                  <FormGroup row>
                    <Col md="3">
                      <Label>Updated At</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">{new Date(partner.updatedAt).toLocaleDateString()}</p>
                    </Col>
                  </FormGroup>
                  }
                  <FormGroup row>
                  <Col md="3">
                    <Label>Activated</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <CustomInput type="switch" id="activated" name="activated"/>
                  </Col>
                </FormGroup>
                  <Button type="submit" size="md" color="primary"> Save</Button>
                </Form> :
                  <p className="text-center"><span><i className="text-muted icon-ban"/> Not found</span></p>
                }
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { partner } = state.partnerReducer;

  return {
    partner: partner,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchOne: (id) => dispatch(partnerActions.fetchOne(id)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Partner);
