import { Calculator } from "./Calculator/Calculator";
import { Counter } from "./Counter/Counter";
import { Meal } from "./Meals/Meal";
import { Todos } from "./Todos/Todos";
import { ToggleProject } from "./Toggle-Color/ToggleProject";

 
export const App = () => {
 
  return (
    <div>
      {/* this simple counter app - 1  */}
       {/* <Counter />*/}

       {/* this todo list project - 2  */}
       {/* <Todos /> */}

       {/* This meal api fetching project - 3 */}
       {/* <Meal /> */}

       {/* Calculator project  - 4 */}
       {/* <Calculator /> */}

       {/* Toggle color project -5  */}

       <ToggleProject />
    </div>
  );
};
