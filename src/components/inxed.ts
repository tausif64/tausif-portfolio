import { FC } from "react";

export type projectDataType = {
  id: string;
  name: string;
  role:string;
  description: string[];
  url: string;
  technology: FC[];
  images: string[];
}

