import {
    Button,
    Col,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Progress,
    UncontrolledTooltip,
  } from "reactstrap";
  
  const TransFat = ({
    transFat,
    transFatGoal,
    modalOpen,
    toggleModal,
    changeTransFatGoal,
  }) => {
    return (
      <Container className="text-center mt-3">
        <Modal isOpen={modalOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>
            Update your trans fat goal
          </ModalHeader>
          <ModalBody>
            <Input
              type="number"
              className="w-50"
              value={transFatGoal}
              onChange={changeTransFatGoal}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={toggleModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
  
        <Col>
          <h3 className="text-primary">Trans fat goal: {transFatGoal}</h3>
        </Col>
        <Col>
          <Button color="primary" onClick={toggleModal}>
            Update trans fat
          </Button>
        </Col>
        <Col className="mt-3">
          <Progress
            animated
            value={transFat}
            max={transFatGoal}
            id="tooltip-progress"
          />
          <UncontrolledTooltip target="tooltip-progress" placement="bottom">
          Trans fat goal progress
          </UncontrolledTooltip>
        </Col>
      </Container>
    );
  };
  
  export default TransFat;