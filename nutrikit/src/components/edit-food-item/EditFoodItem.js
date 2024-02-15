import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Button,
    Container,
    Label,
    Col,
    Row,
  } from "reactstrap";
  
  const EditFoodItem = ({
    modalOpen,
    toggleModal,
    editFoodItemForm,
    onChangeForm,
    onSubmit,
  }) => (
    <Container>
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Add a new food item</ModalHeader>
  
        <ModalBody>
          <Label for="calories">Calories</Label>
          <Input
            id="calories"
            type="number"
            className="w-50"
            value={editFoodItemForm.calories}
            onChange={(evt) => onChangeForm(evt, "calories")}
          />
  
          <Row className="mt-3">
            <Col sm={4}>
              <Label for="totalFat">Total Fat</Label>
              <Input
                id="totalFat"
                type="number"
                value={editFoodItemForm.totalFat}
                onChange={(evt) => onChangeForm(evt, "totalFat")}
              />
            </Col>
  
            <Col sm={4}>
              <Label for="saturatedFat">Saturated Fat</Label>
              <Input
                id="saturatedFat"
                type="number"
                value={editFoodItemForm.saturatedFat}
                onChange={(evt) => onChangeForm(evt, "saturatedFat")}
              />
            </Col>
  
            <Col sm={4}>
              <Label for="transFat">Trans Fat</Label>
              <Input
                id="transFat"
                type="number"
                value={editFoodItemForm.transFat}
                onChange={(evt) => onChangeForm(evt, "transFat")}
              />
            </Col>
          </Row>
  
          <Row className="mt-3">
            <Col sm={6}>
              <Label for="protein">Protein</Label>
              <Input
                id="protein"
                type="number"
                value={editFoodItemForm.protein}
                onChange={(evt) => onChangeForm(evt, "protein")}
              />
            </Col>
  
            <Col sm={6}>
              <Label for="carbohydrate">Carbohydrate</Label>
              <Input
                id="carbohydrate"
                type="number"
                value={editFoodItemForm.carbohydrate}
                onChange={(evt) => onChangeForm(evt, "carbohydrate")}
              />
            </Col>
          </Row>
        </ModalBody>
  
        <ModalFooter className="mt-2">
          <Button color="success" onClick={onSubmit}>
            Save
          </Button>
          <Button color="danger" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
  
      <Button color="success" onClick={toggleModal}>
        Edit item
      </Button>
    </Container>
  );
  
  export default EditFoodItem;
  