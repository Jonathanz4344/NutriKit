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
  
  const CarbohydrateGoal = ({
    carbohydrate,
    carbohydrateGoal,
    modalOpen,
    toggleModal,
    changeCarbohydrateGoal,
  }) => {
    return (
      <Container className="text-center mt-3">
        <Modal isOpen={modalOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>
            Update your carbohydrate goal
          </ModalHeader>
          <ModalBody>
            <Input
              type="number"
              className="w-50"
              value={carbohydrateGoal}
              onChange={changeCarbohydrateGoal}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={toggleModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
  
        <Col>
          <h3 className="text-primary">Carbohydrate goal: {carbohydrateGoal}</h3>
        </Col>
        <Col>
          <Button color="primary" onClick={toggleModal}>
            Update carbohydrate
          </Button>
        </Col>
        <Col className="mt-3">
          <Progress
            animated
            value={carbohydrate}
            max={carbohydrateGoal}
            id="tooltip-progress"
          />
          <UncontrolledTooltip target="tooltip-progress" placement="bottom">
            Carbohydrate goal progress
          </UncontrolledTooltip>
        </Col>
      </Container>
    );
  };
  
  export default CarbohydrateGoal;