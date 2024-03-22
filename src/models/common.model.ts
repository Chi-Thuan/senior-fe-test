import { CONTACT_TYPE } from "~/constants/common";

export type MediaModel = {
  id: number;
  src: string;
  alt?: string;
  name?: string;
};

export type ContactModel = {
  id: number;
  type: CONTACT_TYPE;
  value: string;
};

export type SubscriptionModel = {
  id: number;
  name: string;
  price: number;
  benefits: {
    email?: number;
    phone?: number;
  };
};
