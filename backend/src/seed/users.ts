type UserType = {
  name: string;
  email: string;
  password: string;
  citizenshipNumber: string;
  admin: boolean;
  verified: boolean;
};

export const users: UserType[] = [
  {
    name: "Rahul",
    citizenshipNumber: "9800056323",
    email: "rahul@gmail.com",
    password: "$2b$10$X9cGXV/mZj0fs.pfEaWI/O.HOv74iNp1VMwv4KFQg02C9HtRgJCpi",
    admin: true,
    verified: true,
  },
  {
    name: "Kumar",
    citizenshipNumber: "9860777907",
    email: "kumar@gmail.com",
    password: "$2b$10$.dIa4e1s/bQCyUXFDtOwv.zsCfm3123l8Vb1n5G6mgCJswhsL5IOq",
    admin: false,
    verified: true,
  },
  {
    name: "Madheshiya",
    citizenshipNumber: "9860777908",
    email: "madheshiya@gmail.com",
    password: "$2b$10$n6UaXknyNGjuNgTi24TwdOi.HFMojZaHyn5Z/XNeQPun/GuJdz1Xi",
    admin: false,
    verified: true,
  },
];

export default users;
