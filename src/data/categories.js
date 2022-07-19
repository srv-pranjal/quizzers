import { v4 as uuid } from "uuid";

export const categories = [
  {
    _id: uuid(),
    categoryName: "HTML",
    image: "/assets/html.jpg",
  },
  {
    _id: uuid(),
    categoryName: "JavaScript",
    image: "/assets/javascript.png",
  },
  {
    _id: uuid(),
    categoryName: "MySQL",
    image: "/assets/sql.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Linux",
    image: "/assets/linux.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Docker",
    image: "/assets/docker.jpg",
  },
  {
    _id: uuid(),
    categoryName: "DevOps",
    image: "/assets/devops.png",
  },
];
