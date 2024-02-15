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
  
  const FoodItemForm = ({
    modalOpen,
    toggleModal,
    categories,
    addFoodItemForm,
    onChangeForm,
    onSubmit,
  }) => {
    return (
      <Container>
        <Modal isOpen={modalOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Add a new food item</ModalHeader>
  
          <ModalBody>
            <Row>
              <Col sm={6}>
                <Label for="category">Category Name</Label>
                <Input
                  id="category"
                  type="select"
                  value={addFoodItemForm.category}
                  onChange={(evt) => onChangeForm(evt, "category")}
                >
                  <option value="">
                    {""}
                  </option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </Input>
              </Col>
  
              <Col sm={6}>
                <Label for="name">Food Item Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={addFoodItemForm.name}
                  onChange={(evt) => onChangeForm(evt, "name")}
                />
              </Col>
            </Row>
  
            <Label for="calories" className="mt-3">
              Calories
            </Label>
            <Input
              id="calories"
              type="number"
              className="w-50"
              value={addFoodItemForm.calories}
              onChange={(evt) => onChangeForm(evt, "calories")}
            />
  
            <Row className="mt-3">
              <Col sm={4}>
                <Label for="totalFat">Total Fat</Label>
                <Input
                  id="totalFat"
                  type="number"
                  value={addFoodItemForm.totalFat}
                  onChange={(evt) => onChangeForm(evt, "totalFat")}
                />
              </Col>
  
              <Col sm={4}>
                <Label for="saturatedFat">Saturated Fat</Label>
                <Input
                  id="saturatedFat"
                  type="number"
                  value={addFoodItemForm.saturatedFat}
                  onChange={(evt) => onChangeForm(evt, "saturatedFat")}
                />
              </Col>
  
              <Col sm={4}>
                <Label for="transFat">Trans Fat</Label>
                <Input
                  id="transFat"
                  type="number"
                  value={addFoodItemForm.transFat}
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
                  value={addFoodItemForm.protein}
                  onChange={(evt) => onChangeForm(evt, "protein")}
                />
              </Col>
  
              <Col sm={6}>
                <Label for="carbohydrate">Carbohydrate</Label>
                <Input
                  id="carbohydrate"
                  type="number"
                  value={addFoodItemForm.carbohydrate}
                  onChange={(evt) => onChangeForm(evt, "carbohydrate")}
                />
              </Col>
            </Row>
          </ModalBody>
  
          <ModalFooter className="mt-2">
            <Button
              color="primary"
              onClick={onSubmit}
              disabled={!addFoodItemForm.category}
            >
              Add
            </Button>
            <Button color="danger" onClick={toggleModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
  
        <Button color="primary" onClick={toggleModal} className="mx-auto">
          Add new food items
        </Button>
      </Container>
    );
  };
  
  export default FoodItemForm;