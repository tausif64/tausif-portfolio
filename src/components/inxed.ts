// src/types/TechnologyArray.ts

import { ReactNode } from 'react';

// Define the type for the technology array
export type TechnologyComponent = ReactNode; // Use ReactNode instead of TechnologyComponent

export type projectDataType = {
  id: string;
  name: string;
  role: string;
  description: string | string[];
  url: string;
  technology: TechnologyComponent[];
  images: string[];
};
