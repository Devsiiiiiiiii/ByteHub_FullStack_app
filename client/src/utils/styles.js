import { C3, F1, Fi1, I1 } from "../assets";



export const isActiveStyles = 
"  text-2xl text-blue-900 font-semibold hover:text-red-700 px-4 py-2 duration-100 transition-all ease-in-out";

export const isNotActiveStyles = 
"text-xl text-textColor  hover:text-red-700 px-4 py-2 duration-100 transition-all ease-in-out";


export const statuses = [
    { id: 1, title: "Rice", category: "rice" },
    { id: 2, title: "Maggi", category: "maggi" },
    { id: 3, title: "Fried Maggi", category: "friedmaggi" },
    { id: 4, title: "Dosa", category: "dosa" },
    { id: 5, title: "Sandwich", category: "sandwich" },
    { id: 6, title: "Chinese", category: "chinese"},
    { id: 7, title: "Drinks", category: "drinks" },
];

export const heroData = [
    {
      id: 1,
      name: "YUMMPYS",
      decp: "Chocolate & vanilla",
      price: "5.25",
      imageSrc: I1,
    },
    {
      id: 2,
      name: "WICHPLEASE",
      decp: "Fresh Strawberries",
      price: "10.25",
      imageSrc: F1,
    },
    {
      id: 3,
      name: "HOTSPOT",
      decp: "Mixed Kebab Plate",
      price: "8.25",
      imageSrc: C3,
    },
    {
      id: 4,
      name: "SFC",
      decp: "Mixed Fish Kebab",
      price: "5.25",
      imageSrc: Fi1,
    },
  ];