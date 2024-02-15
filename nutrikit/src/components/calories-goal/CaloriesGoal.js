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

const CaloriesGoal = ({
  calories,
  caloriesGoal,
  modalOpen,
  toggleModal,
  changeCalorieGoal,
}) => {
  return (
    <Container className="text-center mt-5">
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          Update your total calorie goal
        </ModalHeader>
        <ModalBody>
          <Input
            type="number"
            className="w-50"
            value={caloriesGoal}
            onChange={changeCalorieGoal}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>

      <Col>
        <h3 className="text-primary">Total calorie goal: {caloriesGoal}</h3>
      </Col>
      <Col>
        <Button color="primary" onClick={toggleModal}>
          Update goal
        </Button>
      </Col>
      <Col className="mt-3">
        <Progress
          animated
          value={calories}
          max={caloriesGoal}
          id="tooltip-progress"
        />
        <UncontrolledTooltip target="tooltip-progress" placement="bottom">
          Total calorie goal progress
        </UncontrolledTooltip>
      </Col>
    </Container>
  );
};

export default CaloriesGoal;
