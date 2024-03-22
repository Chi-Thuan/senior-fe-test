import { CONTACT_TYPE } from "~/constants/common";
import { MediaModel, SubscriptionModel } from "~/models";

export const MOCK_MEDIA: MediaModel[] = [
  {
    id: 1,
    src: "https://static-assets.lusha.com/plugin/avatars/DefaultAvatar.svg",
    alt: "avatar",
  },
  {
    id: 2,
    src: "https://logo.lusha.co/d/company_6388028_logo.jpg",
    alt: "InterTwine LLC",
    name: "InterTwine LLC",
  },
  {
    id: 3,
    src: "https://logo.lusha.co/d/company_1241_logo.jpg",
    alt: "HSBC",
    name: "HSBC",
  },
  {
    id: 4,
    src: "https://logo.lusha.co/d/company_33222678_logo.jpg",
    alt: "Lusha",
    name: "Lusha",
  },
  {
    id: 5,
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    alt: "Tesla",
    name: "Tesla",
  },
  {
    id: 6,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png",
    alt: "Amazon",
    name: "Amazon",
  },
  {
    id: 7,
    src: "https://i.pinimg.com/736x/74/65/f3/7465f30319191e2729668875e7a557f2.jpg",
    alt: "Google",
    name: "Google",
  },
  {
    id: 8,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    alt: "Microsoft",
    name: "Microsoft",
  },
  {
    id: 9,
    src: "https://seeklogo.com/images/W/walmart-spark-logo-57DC35C86C-seeklogo.com.png",
    alt: "Walmart",
    name: "Walmart",
  },
  {
    id: 10,
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    alt: "Apple",
    name: "Apple",
  },
];

export const MOCK_CONTACTS = [
  {
    id: 1,
    type: CONTACT_TYPE.EMAIL,
    value: "root_1@gmail.com",
  },
  {
    id: 2,
    type: CONTACT_TYPE.EMAIL,
    value: "root_2@gmail.com",
  },
  {
    id: 3,
    type: CONTACT_TYPE.PHONE,
    value: "+8411111111",
  },
  {
    id: 4,
    type: CONTACT_TYPE.PHONE,
    value: "+8422222222",
  },
];

export const MOCK_SUBSCRIPTION: SubscriptionModel[] = [
  {
    id: 1,
    name: "Free",
    price: 0,
    benefits: {
      email: 50,
      phone: 17,
    },
  },
];
