// Wildcard declaration for all file types
declare module "*" {
  import { FC } from "react";
  const component: FC; // Adjust the type as necessary
  export default component;
}
