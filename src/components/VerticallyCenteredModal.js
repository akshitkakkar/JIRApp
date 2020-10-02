import React from 'react'
import {Modal, Button, Container, Row, Col} from 'react-bootstrap'

const VerticallyCenteredModal = (props) => {
    console.log(props.selectedIssue.data)
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header className="modal-header" closeButton>
            <div className="col-md-4">
                <img className="modal-issue-img" src={props.selectedIssue.data.fields.issuetype.iconUrl}></img>
                <span>{props.selectedIssue.data.key}</span>
            </div>
          </Modal.Header>
          <Modal.Body closeButton>
            <Container>
                <Row>
                    <Col md={8}>
                        <h4>{props.selectedIssue.data.fields.summary}</h4>
                    </Col>
                    <Col md={4}>
                        <Button variant="light">
                        {props.selectedIssue.data.fields.status.name}
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <p>Description</p>
                        <span>{props.selectedIssue.data.fields.description}</span>
                    </Col>
                    <Col md={4}>
                        <div>
                            <span>Assignee</span>
                            <div>
                                <img className="modal-issue-img" src={props.selectedIssue.data.fields.assignee.avatarUrls["48x48"]}></img>
                                <span>{props.selectedIssue.data.fields.assignee.displayName}</span>
                            </div>
                        </div>
                        <div>
                            <span>Reporter</span>
                            <div>
                                <img className="modal-issue-img" src={props.selectedIssue.data.fields.reporter.avatarUrls["48x48"]}></img>
                                <span>{props.selectedIssue.data.fields.reporter.displayName}</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
          </Modal.Body>
        </Modal>
      )
}

export default VerticallyCenteredModal