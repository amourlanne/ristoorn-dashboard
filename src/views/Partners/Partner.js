import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import {connect} from "react-redux";
import {partnerActions} from "../../actions/Partner";

class Partner extends Component {

  componentDidMount() {
    const {params} = this.props.match;
    this.props.fetchOne(params.id)
  }

  render() {

    const {partner} = this.props;

    if(partner) delete partner.Images;

    const partnerDetails = partner ? Object.entries(partner) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]];

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>Partner id: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                      {
                        partnerDetails.map(([key, value]) => {
                          return (
                            <tr key={key}>
                              <td>{`${key}:`}</td>
                              <td><strong>{value}</strong></td>
                            </tr>
                          )
                        })
                      }
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
