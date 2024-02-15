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
  
  const ProteinGoal = ({
    protein,
    proteinGoal,
    modalOpen,
    toggleModal,
    changeProteinGoal,
  }) => {
    return (
      <Container className="text-center mt-3">
        <Modal isOpen={modalOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>
            Update your protein goal
          </ModalHeader>
          <ModalBody>
            <Input
              type="number"
              className="w-50"
              value={proteinGoal}
              onChange={changeProteinGoal}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={toggleModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
  
        <Col>
          <h3 className="text-primary">Protein goal: {proteinGoal}</h3>
        </Col>
        <Col>
          <Button color="primary" onClick={toggleModal}>
            Update protein
          </Button>
        </Col>
        <Col className="mt-3">
          <Progress
            animated
            value={protein}
            max={proteinGoal}
            id="tooltip-progress"
          />
          <UncontrolledTooltip target="tooltip-progress" placement="bottom">
          Protein goal progress
          </UncontrolledTooltip>
        </Col>
      </Container>
    );
  };
  
  export default ProteinGoal;