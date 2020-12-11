import React, { memo } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Table,
  Media,
  Row,
  Col,
  Button,
  Badge,
} from 'reactstrap';
import {
  Col,
  Row,
  Card,
  CardTitle,
  CardText,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';
import {
  Button,
  Form,
  FormRow,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';

const DashboardPage = memo(props => {
  return (
    <>
      <h4>User Metrics</h4>
      <p>
        Welcome, this is your <code>User Metrics</code>, you can check for different metrics related to the NLP Engine below.
      </p>
      
      <Row>
        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Visitors
              </CardTitle>
              {/* <CardText> */}
              <Row className="mb-2">
                <Col
                  xs="4"
                  className="d-inline align-items-center text-success"
                >
                  <i className="fas fa-users fa-3x"></i>{' '}
                  <span>
                    129 <CardText>Users</CardText>
                  </span>
                </Col>
                <Col xs="4" className="d-inline align-items-center text-info">
                  <i className="fas fa-cog fa-3x"></i>{' '}
                  <span>
                    1930 <CardText>Sessions</CardText>
                  </span>
                </Col>
                <Col
                  xs="4"
                  className="d-inline align-items-center text-primary"
                >
                  <i className="fas fa-clock fa-3x"></i>{' '}
                  <span>
                    234 <CardText>Real Time</CardText>
                  </span>
                </Col>
              </Row>
              {/* </CardText> */}
              {/* <CardFooter> */}
              <Button color="danger" size="md" block>
                <i className="fas fa-chart-bar"></i> statistic
              </Button>
              {/* </CardFooter> */}
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Followers
              </CardTitle>
              {/* <CardText> */}
              <Row className="mb-2">
                <Col xs="4" className="d-inline align-items-center">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-facebook"></i> 1290
                  </CardText>
                </Col>
                <Col xs="4" className="d-inline align-items-center">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-twitter"></i> 2324
                  </CardText>
                </Col>
                <Col xs="4" className="d-inline align-items-center">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-instagram"></i> 12341
                  </CardText>
                </Col>
                <Col xs="4" className="d-inline align-items-center">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-linkedin"></i> 1331
                  </CardText>
                </Col>
                <Col xs="4" className="d-inline align-items-center">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-pinterest"></i> 4124
                  </CardText>
                </Col>
                <Col xs="4" className="d-inline align-items-center">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-github"></i> 13411
                  </CardText>
                </Col>
              </Row>
              {/* </CardText> */}
              {/* <CardFooter>
                <Row>
                  <a href="#" className="float-right">Add new</a>
                </Row>
              </CardFooter> */}
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Messages
              </CardTitle>
              <Row>
                <Media>
                  <Media left href="#" className="col-4">
                    <Media
                      className="img-thumbnail img-fluid"
                      src="/images/profile6.jpg"
                      alt="Avatar"
                    />
                  </Media>
                  <Media body className="col-8 pl-0">
                    <Media heading tag="h5">
                      Micah Immanuel
                    </Media>
                    <CardText tag="small">
                      Hi, I already sent you the design to your email.
                      {/* <span className="text-muted small float-right">
                        2 hour ago
                      </span> */}
                    </CardText>
                  </Media>
                </Media>
              </Row>
              <Button outline size="sm" color="primary" className="float-right">
                See all messages
              </Button>
            </CardBody>
          </Card>
        </Col>
         <h4>NLP Metrics</h4>
         
      <p>
        Welcome, this is your <code>NLP Metrics</code>, you can check for different metrics related to the NLP Engine below.
      </p>
        <Col md="6" lg="4" className="mb-4">
            <h2>Settings</h2>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={isOpen === '1' ? 'active' : ''}
            onClick={() => {
              toggle('1');
            }}
          >
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={isOpen === '2' ? 'active' : ''}
            onClick={() => {
              toggle('2');
            }}
          >
            Contact
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={isOpen === '3' ? 'active' : ''}
            onClick={() => {
              toggle('3');
            }}
          >
            Post
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={isOpen === '4' ? 'active' : ''}
            onClick={() => {
              toggle('4');
            }}
          >
            Widget
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={isOpen}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <div className="p-3 align-items-center text-white-50 bg-gradient-primary box-shadow">
                <h5>Profile</h5>
                <div className="bg-white p-3 text-secondary mx-auto">
                  <Form className="form-horizontal" action="" method="GET">
                    <div className="form-row">
                      <Col sm="2">
                        <span className="text-black">Public Profile</span>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="visible_profile"
                            id="visible_profile_yes"
                            className="form-check-input"
                            value="1"
                          />
                          <Label
                            className="form-check-label"
                            for="visible_profile_yes"
                          >
                            Yes
                          </Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="visible_profile"
                            id="visible_profile_no"
                            className="form-check-input"
                            value="0"
                          />
                          <Label
                            className="form-check-label"
                            for="visible_profile_no"
                          >
                            No
                          </Label>
                        </div>
                      </Col>
                      <Col sm="2">
                        <span className="text-black">Show Email</span>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="hideEmail"
                            id="hideEmailYes"
                            className="form-check-input"
                            value="1"
                          />
                          <Label
                            className="form-check-label"
                            for="hideEmailYes"
                          >
                            Yes
                          </Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="hideEmail"
                            id="hideEmailNo"
                            className="form-check-input"
                            value="0"
                          />
                          <Label className="form-check-label" for="hideEmailNo">
                            No
                          </Label>
                        </div>
                      </Col>
                      <Col sm="8"></Col>
                    </div>
                    <div className="form-row mt-3">
                      <Col sm="12" className="text-right mt-1">
                        <Button
                          type="submit"
                          name="submit"
                          className="btn btn-md btn-primary"
                        >
                          <i className="fas fa-check"></i> Save
                        </Button>
                      </Col>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <div className="p-3 align-items-center text-white-50 bg-gradient-primary box-shadow">
                <h5>Contact</h5>
                <div className="bg-white p-3 text-secondary mx-auto">
                  <Form action="" method="GET">
                    <div className="form-row">
                      <Col sm="2">
                        <span className="text-black">Disable Contact Form</span>
                        <FormGroup check>
                          <Label check for="disableFormYes">
                            <Input
                              type="radio"
                              name="disableForm"
                              id="disableFormYes"
                              defaultValue="1"
                            />
                            Yes
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check for="disableFormNo">
                            <Input
                              type="radio"
                              name="disableForm"
                              id="disableFormNo"
                              defaultValue="0"
                            />
                            No
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col sm="3">
                        <div className="form-group">
                          <Label for="contactPhone">Phone</Label>
                          <Input
                            type="text"
                            name="contactPhone"
                            className="form-control"
                            id="contactPhone"
                            placeholder="Business phone"
                          />
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="form-group">
                          <Label for="contactEmail">Email</Label>
                          <Input
                            type="text"
                            name="contactEmail"
                            className="form-control"
                            id="contactEmail"
                            placeholder="Business email"
                          />
                        </div>
                      </Col>
                      <Col sm="4">
                        <div className="form-group">
                          <Label for="contactAddress">Address</Label>
                          <Input
                            type="textarea"
                            name="contactAddress"
                            id="contactAddress"
                            className="form-control"
                            placeholder="My business address"
                          />
                        </div>
                      </Col>
                    </div>
                    <div className="form-row mt-3">
                      <Col sm="12" className="text-right mt-1">
                        <Button
                          type="submit"
                          name="submit"
                          className="btn btn-md btn-primary"
                        >
                          <i className="fas fa-check"></i> Save
                        </Button>
                      </Col>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <div className="p-3 align-items-center text-white-50 bg-gradient-primary box-shadow">
                <h5>Post</h5>
                <div className="bg-white p-3 text-secondary mx-auto">
                  <Form className="form-horizontal" action="" method="GET">
                    <div className="form-row">
                      <Col sm="2">
                        <span className="text-black font-weight-bold">
                          Maintenance Mode
                        </span>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="maintenanceMode"
                            id="maintenanceModeYes"
                            className="form-check-input"
                            value="1"
                          />
                          <Label
                            className="form-check-label"
                            for="maintenanceModeYes"
                          >
                            Yes
                          </Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="maintenanceMode"
                            id="maintenanceModeNo"
                            className="form-check-input"
                            value="0"
                          />
                          <Label
                            className="form-check-label"
                            for="maintenanceModeNo"
                          >
                            No
                          </Label>
                        </div>
                      </Col>
                      <Col sm="2">
                        <span className="text-black font-weight-bold">
                          Disable Comments
                        </span>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="comments"
                            id="disableCommentYes"
                            className="form-check-input"
                            value="1"
                          />
                          <Label
                            className="form-check-label"
                            for="disableCommentYes"
                          >
                            Yes
                          </Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="comments"
                            id="disableCommentNo"
                            className="form-check-input"
                            value="0"
                          />
                          <Label
                            className="form-check-label"
                            for="disableCommentNo"
                          >
                            No
                          </Label>
                        </div>
                      </Col>
                      <Col sm="2">
                        <Label className="font-weight-bold">Comments</Label>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="commentModerate"
                            id="commentModerationOne"
                            className="form-check-input"
                            value="1"
                          />
                          <Label
                            className="form-check-label"
                            for="commentModerationOne"
                          >
                            Always Moderate
                          </Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="commentModerate"
                            id="commentModerationTwo"
                            className="form-check-input"
                            value="0"
                          />
                          <Label
                            className="form-check-label"
                            for="commentModerationTwo"
                          >
                            Wait Moderation
                          </Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="commentModerate"
                            id="commentModerationThree"
                            className="form-check-input"
                            value="0"
                          />
                          <Label
                            className="form-check-label"
                            for="commentModerationThree"
                          >
                            Delete Instantly
                          </Label>
                        </div>
                      </Col>
                      <Col sm="6">
                        <Label className="font-weight-bold">Post Format</Label>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="postFormat"
                            id="postFormatOne"
                            className="form-check-input"
                            value="1"
                          />
                          <Label
                            className="form-check-label"
                            for="postFormatOne"
                          >
                            /your-blog-post-title/
                          </Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="postFormat"
                            id="postFormatTwo"
                            className="form-check-input"
                            value="0"
                          />
                          <Label
                            className="form-check-label"
                            for="postFormatTwo"
                          >
                            /dd-mm-yyyy/your-blog-post-title/
                          </Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="postFormat"
                            id="postFormatThree"
                            className="form-check-input"
                            value="0"
                          />
                          <Label
                            className="form-check-label"
                            for="postFormatThree"
                          >
                            /category/your-blog-post-title/
                          </Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="postFormat"
                            id="postFormatFour"
                            className="form-check-input"
                            value="0"
                          />
                          <Label
                            className="form-check-label"
                            for="postFormatFour"
                          >
                            /dd-mm-yyyy/category/your-blog-post-title/
                          </Label>
                        </div>
                      </Col>
                    </div>
                    <div className="form-row mt-3">
                      <Col sm="6">
                        <Label for="maintenanceModeText">
                          Maintenance Message
                        </Label>
                        <Input
                          type="textarea"
                          id="maintenanceModeText"
                          name="maintenanceModeText"
                          className="form-control"
                          placeholder="Your status"
                          defaultValue="We are in maintenance mode, sorry for the convinience!"
                        />
                      </Col>
                      <Col sm="6">
                        <Label for="statusText">Status</Label>
                        <Input
                          type="textarea"
                          id="statusText"
                          name="statusText"
                          className="form-control"
                          placeholder="Your status"
                          defaultValue="Hi, John Doe was here!"
                        />
                      </Col>
                    </div>
                    <div className="form-row mt-3">
                      <Col sm="12" className="text-right mt-1">
                        <Button
                          type="submit"
                          name="submit"
                          className="btn btn-md btn-primary"
                        >
                          <i className="fas fa-check"></i> Save
                        </Button>
                      </Col>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </TabPane>
        </TabContent>
           
      
          
        </Col>
      </Row>
    </>
  );
});

export default DashboardPage;
