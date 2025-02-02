import { Counter } from "./Counter/Counter";
import { Meal } from "./Meals/Meal";
import { Todos } from "./Todos/Todos";

 
export const App = () => {
 
  return (
    <div>
      {/* this simple counter app  */}
       {/* <Counter />*/}

       {/* this todo list project  */}
       {/* <Todos /> */}

       {/* This meal api fetching project  */}
       <Meal />
    </div>
  );
};
