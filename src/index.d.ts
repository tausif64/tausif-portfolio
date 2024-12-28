// Wildcard declaration for all file types
import { FC } from "react";
const component: FC; // Adjust the type as necessary

declare module "*" {
  export default component;
}




