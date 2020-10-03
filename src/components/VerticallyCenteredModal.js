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
                            { props.selectedIssue.data.fields.assignee && 
                            <div>
                                <img className="modal-issue-img" src={props.selectedIssue.data.fields.assignee.avatarUrls["48x48"]}></img>
                                <span>{props.selectedIssue.data.fields.assignee.displayName}</span>
                            </div>
                            }
                            { !props.selectedIssue.data.fields.assignee && 
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation">
                                    <g fill="currentColor" fill-rule="evenodd">
                                        <path d="M6 14c0-1.105.902-2 2.009-2h7.982c1.11 0 2.009.894 2.009 2.006v4.44c0 3.405-12 3.405-12 0V14z"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </g>
                                </svg>
                                <span>Unassigned</span>
                            </div>
                            }
                        </div>
                        <div>
                            <span>Reporter</span>
                            { props.selectedIssue.data.fields.reporter &&
                            <div>
                                <img className="modal-issue-img" src={props.selectedIssue.data.fields.reporter.avatarUrls["48x48"]}></img>
                                <span>{props.selectedIssue.data.fields.reporter.displayName}</span>
                            </div>
                            }
                            { !props.selectedIssue.data.fields.reporter &&
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation">
                                    <g fill="currentColor" fill-rule="evenodd">
                                        <path d="M6 14c0-1.105.902-2 2.009-2h7.982c1.11 0 2.009.894 2.009 2.006v4.44c0 3.405-12 3.405-12 0V14z"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </g>
                                </svg>
                                <span>Unassigned</span>
                            </div>
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
          </Modal.Body>
        </Modal>
      )
}

export default VerticallyCenteredModal