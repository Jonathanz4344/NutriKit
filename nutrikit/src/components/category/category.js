import { Button, Col, Container, Row } from "reactstrap";
import "./category.css";

function Category(props) {
  const AddButton = () => (
    <Button
      color="primary"
      onClick={props.handleButtonClick}
      disabled={
        props.state.buttonDirection === "<<" ||
        !props.state.categoryItems.length ||
        !props.state.selectedItem
      }
    >
      {">>"}
    </Button>
  );

  const RemoveButton = () => (
    <Button
      color="danger"
      onClick={props.handleButtonClick}
      className="mx-3"
      disabled={props.state.buttonDirection === ">>"}
    >
      {"<<"}
    </Button>
  );

  return (
    <Container fluid className="category-container">
      <Row xs="1" sm="2" md="4">
        <Col>
          <label htmlFor="foodCategorySelect">Categories</label>
          <select onChange={props.handleCategoryChange}>
            <option value="" key="emptyOption"></option>
            {props.state.categories.map(category => <option value={category} key={category}>{category}</option>)}
            {/* <option value="proteins">Proteins</option>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
            <option value="dairy">Dairy</option>
            <option value="grain">Grain</option> */}
          </select>
        </Col>

        <Col>
          <label htmlFor="foodListSelect">Menu Items</label>
          <select size="5" onChange={props.changeFoodListHandler}>
            {props.state.categoryItems.map((foodItem) => (
              <option key={foodItem.name} value={foodItem.name}>
                {foodItem.name}
              </option>
            ))}
          </select>
        </Col>

        <Col className="my-4">
          <RemoveButton />
          <AddButton />
        </Col>

        <Col>
          <label htmlFor="selectionList">Selected Items</label>
          <select size="10" onChange={props.changeSelectItemHandler}>
            {props.state.selectedItems.map((foodItem, foodItemIndex) => (
              <option key={foodItem.name + Math.random()} value={foodItem.name}>
                {foodItem.name}
              </option>
            ))}
          </select>
          <div>Total Calories: {props.state.calories}</div>
          <div>
            Total Fat:{" "}
            {props.state.selectedItems
              .reduce((acc, curr) => acc + curr.totalFat, 0)
              .toFixed(2)}
          </div>
          <div>
            Total Protein:{" "}
            {props.state.selectedItems
              .reduce((acc, curr) => acc + curr.protein, 0)
              .toFixed(2)}
          </div>
          <div>
            Total Carbohydrate:{" "}
            {props.state.selectedItems
              .reduce((acc, curr) => acc + curr.carbohydrate, 0)
              .toFixed(2)}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Category;