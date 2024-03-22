import { SOCIAL_TYPE } from "~/constants/common";
import { MediaModel } from "./common.model";

export type CompanyModel = {
  id: number;
  thumbnail: MediaModel;
  name: string;
  url: string;
  description?: string;
  employeeNumber?: string;
  industry?: string;
  subIndustry?: string;
  specialties?: string[];
  annualRevenue?: string;
  country?: string;
  social?: Array<{
    type: SOCIAL_TYPE;
    url: string;
  }>;
};
