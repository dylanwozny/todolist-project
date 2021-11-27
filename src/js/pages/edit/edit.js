// creating html with javascript
import createBody from "../../components/cards/editform";
import makeElement from "../../utils/makeElement";
import pageHeader from "../../components/ui/pageheader";
import link from "../../components/ui/link/link";
import createToDo from "../../components/cards/createform";
import keyGenerator from "../../utils/Key";
import { v4 as uuidv4 } from "uuid";
import { Router } from "../../routes/router";
import styles from "./styles.module.scss";
import logo from "../../components/icons/logo";
// import tagLine from "../../components/ui/tagline";

// grab components fron landing page and add together
const createPage = function () {
  // create new object
  const newListItem = {
    id: "1",
    category: "Health",
    title: "Physio",
    isComplete: false,
    startDate: "tuesday nov 30th",
    startTime: "2:00pm",
    endDate: "tuesday nov 30th",
    endTime: "3:00pm",
  };
  //create new id
  newListItem.id = uuidv4().substr(0, 8);
  console.log(newListItem.id);

  const page = document.createElement("div");

  // clean out page contents before building
  page.innerHTML = "";

  const template = `
    <aside class="${styles.form_aside}" data-key="">
    <form class="create_form" id="form" action=""
    " method="">
    <div>
      <p>id is auto generated and cannot be edited</p>
      <label for="id">id:</label><br>
      <input type="text"  readonly id="id" name="id" value="${newListItem.id}"><br>
    <div/>
    <div>
      <label for="category">category:</label><br>
      <input type="text" id="category" name="category" ><br>
    <div/>
    <div>
      <label for="title">title:</label><br>
      <input type="text" id="title" name="title" v><br>
    <div/>
    <div>
      <label for="isComplete">isComplete:</label><br>
      <input type="text" id="isComplete" name="isComplete" ><br>
    <div/>
    <div>
      <label for="startDate">startDate:</label><br>
      <input type="text" id="startDate" name="startDate" ><br>
    <div/>
    <div>
      <label for="startTime">startTime:</label><br>
      <input type="text" id="startTime" name="startTime" ><br>
    <div/>
    <div>
      <label for="endDate">endDate:</label><br>
      <input type="text" id="endDate" name="endDate" ><br>
    <div/>    
    <div>
      <label for="endTime">endTime:</label><br>
      <input type="text" id="endTime" name="endTime" ><br>
    <div/>    
      <input class="${styles.submit_button}" type="submit" value="Submit">
    </form>

  </aside>
  `;

  function render() {
    // page.append(
    //   pageHeader({
    //     label: "Create a new item",
    //     tagline: "",
    //   })
    // );

    page.append(createBody());
    const form = makeElement(template);

    page.append(form);
  }

  // call functions to build page
  render();

  // grab values from form
  // document.querySelector(form).addEventListener("submit", (evt) => {
  // -----grab values from fields------
  // let createCategory = evt.target.elements.category.value;
  // let transactionType = evt.target.elements.type.value;
  // let transactionMonies = evt.target.elements.currency.value;
  // });

  return page;
};

export default createPage;
