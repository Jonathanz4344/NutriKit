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

const TotalFat = ({
  totalFat,
  totalFatGoal,
  modalOpen,
  toggleModal,
  changeTotalFatGoal,
}) => {
  return (
    <Container className="text-center mt-3">
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          Update your total fat goal
        </ModalHeader>
        <ModalBody>
          <Input
            type="number"
            className="w-50"
            value={totalFatGoal}
            onChange={changeTotalFatGoal}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>

      <Col>
        <h3 className="text-primary">Total fat goal: {totalFatGoal}</h3>
      </Col>
      <Col>
        <Button color="primary" onClick={toggleModal}>
          Update total fat
        </Button>
      </Col>
      <Col className="mt-3">
        <Progress
          animated
          value={totalFat}
          max={totalFatGoal}
          id="tooltip-progress"
        />
        <UncontrolledTooltip target="tooltip-progress" placement="bottom">
          Total fat goal progress
        </UncontrolledTooltip>
      </Col>
    </Container>
  );
};

export default TotalFat;