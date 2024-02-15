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
  
  const SaturatedFat = ({
    saturatedFat,
    saturatedFatGoal,
    modalOpen,
    toggleModal,
    changeSaturatedFatGoal,
  }) => {
    return (
      <Container className="text-center mt-3">
        <Modal isOpen={modalOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>
            Update your saturated fat goal
          </ModalHeader>
          <ModalBody>
            <Input
              type="number"
              className="w-50"
              value={saturatedFatGoal}
              onChange={changeSaturatedFatGoal}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={toggleModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
  
        <Col>
          <h3 className="text-primary">Saturated fat goal: {saturatedFatGoal}</h3>
        </Col>
        <Col>
          <Button color="primary" onClick={toggleModal}>
            Update saturated fat
          </Button>
        </Col>
        <Col className="mt-3">
          <Progress
            animated
            value={saturatedFat}
            max={saturatedFatGoal}
            id="tooltip-progress"
          />
          <UncontrolledTooltip target="tooltip-progress" placement="bottom">
          Saturated fat goal progress
          </UncontrolledTooltip>
        </Col>
      </Container>
    );
  };
  
  export default SaturatedFat;