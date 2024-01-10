import { StaticImageData } from "next/image"

import icon from "@/assets/icons/rocket.svg"
import postImage1 from "@/assets/images/post1.png"
import postImage2 from "@/assets/images/post2.png"
import postImage3 from "@/assets/images/post3.png"
import postImage4 from "@/assets/images/post4.png"
import postImage5 from "@/assets/images/post5.png"

import { Tags } from "./tags"

export const blogPosts = [
  {
    image: postImage1,
    category: "Startup",
    title: "Design tips for designers that cover everything you need",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    createdAt: "27th January, 2023",
    author: "Floyd Miles",
    content: {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      points: [
        "Lorem ipsum dolor sit amet",
        "Non blandit massa enim nec scelerisque",
        "Neque egestas congue quisque egestas",
      ],
    },
    tags: [Tags.LIFE],
    icon,
    id: 1,
  },
  {
    image: postImage2,
    category: "Business",
    title: "How to build rapport with your web design clients",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    createdAt: "4th June, 2020",
    author: "Dianne Russell",
    content: {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      points: [
        "Lorem ipsum dolor sit amet",
        "Non blandit massa enim nec scelerisque",
        "Neque egestas congue quisque egestas",
      ],
    },
    tags: [Tags.BUSINESS, Tags.SCREEN, Tags.MARKETING, Tags.LIFE],
    icon,
    id: 2,
  },
  {
    image: postImage3,
    category: "Startup",
    title: "Logo design trends to avoid in 2022",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    createdAt: "11th April, 2023",
    author: "Robert Fox",
    content: {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      points: [
        "Lorem ipsum dolor sit amet",
        "Non blandit massa enim nec scelerisque",
        "Neque egestas congue quisque egestas",
      ],
    },
    tags: [Tags.MARKETING, Tags.LIFE],
    icon,
    id: 3,
  },
  {
    image: postImage4,
    category: "Technology",
    title: "8 Figma design systems you can download for free today",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    createdAt: "5th October, 2022",
    author: "Leslie Alexander",
    content: {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      points: [
        "Lorem ipsum dolor sit amet",
        "Non blandit massa enim nec scelerisque",
        "Neque egestas congue quisque egestas",
      ],
    },
    tags: [Tags.TECHNOLOGY],
    icon,
    id: 4,
  },
  {
    image: postImage5,
    category: "Economy",
    title: "Font sizes in UI design: The complete guide to follow",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    createdAt: "1st September, 2023",
    author: "Guy Hawkins",
    content: {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      points: [
        "Lorem ipsum dolor sit amet",
        "Non blandit massa enim nec scelerisque",
        "Neque egestas congue quisque egestas",
      ],
    },
    tags: [Tags.LIFE, Tags.SCREEN, Tags.MARKETING],
    icon,
    id: 5,
  },
  {
    image: postImage5,
    category: "Business",
    title: "Some business stuff: new business methodology",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    createdAt: "3rd December, 2020",
    author: "Jacob Jones",
    content: {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      points: [
        "Lorem ipsum dolor sit amet",
        "Non blandit massa enim nec scelerisque",
        "Neque egestas congue quisque egestas",
      ],
    },
    tags: [Tags.TECHNOLOGY, Tags.MARKETING],
    icon,
    id: 6,
  },
  {
    image: postImage3,
    category: "Startup",
    title: "Somebody named someone started a new startup",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    createdAt: "12th March, 2023",
    author: "Eleanor Pena",
    content: {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      points: [
        "Lorem ipsum dolor sit amet",
        "Non blandit massa enim nec scelerisque",
        "Neque egestas congue quisque egestas",
      ],
    },
    tags: [Tags.TECHNOLOGY, Tags.LIFE],
    icon,
    id: 7,
  },
  {
    image: postImage4,
    category: "Economy",
    title: "10 things that you can buy for almost free!",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    createdAt: "17th June, 2022",
    author: "Jenny Wilson",
    content: {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      points: [
        "Lorem ipsum dolor sit amet",
        "Non blandit massa enim nec scelerisque",
        "Neque egestas congue quisque egestas",
      ],
    },
    tags: [Tags.MARKETING, Tags.SCREEN],
    icon,
    id: 8,
  },
  {
    image: postImage4,
    category: "Business",
    title: "8 Figma design systems you can download for free today",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    createdAt: "27th May, 2021",
    author: "Dianne Russell",
    content: {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      points: [
        "Lorem ipsum dolor sit amet",
        "Non blandit massa enim nec scelerisque",
        "Neque egestas congue quisque egestas",
      ],
    },
    tags: [Tags.BUSINESS, Tags.EXPERIENCE, Tags.MARKETING, Tags.LIFE],
    icon,
    id: 9,
  },
  {
    image: postImage1,
    category: "Startup",
    title: "Design tips for designers that cover everything you need",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    createdAt: "27th January, 2022",
    author: "Jacob Jones",
    content: {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      points: [
        "Lorem ipsum dolor sit amet",
        "Non blandit massa enim nec scelerisque",
        "Neque egestas congue quisque egestas",
      ],
    },
    tags: [Tags.LIFE],
    icon,
    id: 10,
  },
  {
    image: postImage2,
    category: "Economy",
    title: "Economics are gonna crash soon in some countries",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    createdAt: "30th May, 2021",
    author: "Jacob Jones",
    content: {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      points: [
        "Lorem ipsum dolor sit amet",
        "Non blandit massa enim nec scelerisque",
        "Neque egestas congue quisque egestas",
      ],
    },
    tags: [Tags.EXPERIENCE, Tags.MARKETING],
    icon,
    id: 11,
  },
  {
    image: postImage5,
    category: "Business",
    title: "These business tips will definetely help you in your life",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    createdAt: "23th February, 2022",
    author: "Jacob Jones",
    content: {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      points: [
        "Lorem ipsum dolor sit amet",
        "Non blandit massa enim nec scelerisque",
        "Neque egestas congue quisque egestas",
      ],
    },
    tags: [Tags.BUSINESS, Tags.EXPERIENCE, Tags.LIFE],
    icon,
    id: 12,
  },
]
export interface Post {
  image: StaticImageData
  category: string
  text: string
  title: string
  tags: Tags[]
  id: number
}

export const postsPerPage = 5
