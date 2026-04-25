import "./styles/reset.css";
import {ToDo, Project} from "./data_structures.js";
import { format, addDays } from "date-fns";

const today = new Date();
const tomorrow = addDays(today, 1);
const dateFormatter = (date) => { return format(date, "dd-MM-yyyy"); };


const p1 = new Project();
const t1 = new ToDo("Clean the bathroom", "Things needed to be cleaned: toilet, sink, cabinets, etc.", dateFormatter(today), "Urgent");
const t2 = new ToDo("Cook", "Meal: Mac & Cheese", dateFormatter(tomorrow), "Unimportant");
p1.addToDo(t1);
p1.addToDo(t2);

const p2 = new Project();
p2.addToDo(t2);
p2.addToDo(t1);

console.log(p1.toDos)
console.log(p2.toDos)
