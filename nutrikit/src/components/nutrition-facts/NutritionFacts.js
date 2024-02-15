import { ListGroup, ListGroupItem } from "reactstrap";
import "./NutritionFacts.css";

const NutritionFacts = ({ foodItem }) => (
  <ListGroup flush className="nutrition-facts-container">
    <ListGroupItem active><h2>Nutrition Facts: {foodItem.name}</h2></ListGroupItem>
    <ListGroupItem><b>Calories</b> {foodItem.calories}</ListGroupItem>
    <ListGroupItem>
      <div><b>Total Fat</b> {foodItem.totalFat}g</div>
      <div className="mx-3"><b>Saturdated Fat</b> {foodItem.saturatedFat}g</div>
      <div className="mx-3"><b>Trans Fat</b> {foodItem.transFat}g</div>
    </ListGroupItem>
    <ListGroupItem><b>Protein</b> {foodItem.protein}g</ListGroupItem>
    <ListGroupItem><b>Carbohydrate</b> {foodItem.carbohydrate}g</ListGroupItem>
  </ListGroup>
);

export default NutritionFacts;