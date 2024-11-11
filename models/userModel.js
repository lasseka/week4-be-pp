// data model
/*
{
  "name": "Best of Paris in 7 Days Tour",
  "info": "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  "image": "https://www.course-api.com/images/tours/tour-1.jpeg",
  "price": "1,995"
}
*/
 
let userArray = [];
let nextId = 1;

const getAll = () => {
  return userArray;
};

const addOne = (name, email, password, phone_number, gender, date_of_birth, membership_status) => {
  if (!name | !email | !password | !phone_number | !gender | !date_of_birth | !membership_status) {
    return false;
  }
  const newUser = {
    id: nextId++,
    name: name,
    email,
    password,
    phone_number,
    gender,
    date_of_birth,
    membership_status
  };
  userArray.push(newUser);
  return newUser;
};

const findById = (id) => {
  const user = userArray.find((user) => user.id === Number(id));
  if (user) {
    return user;
  } else return false;
};

const updateOneById = (id, updatedData) => {
  const user = findById(id);
  if (user) {
    if (updatedData.name) {
      user.name = updatedData.name;
    }
    if (updatedData.info) {
      user.info = updatedData.info;
    }
    if (updatedData.image) {
      user.image = updatedData.image;
    }
    if (updatedData.price) {
      user.price = updatedData.price;
    }
    return user;
  }
  return false;
};

const deleteOneById = (id) => {
  const user = findById(id);
  if (user) {
    const initialLenght = userArray.length;
    userArray = userArray.filter((user) => user.id !== Number(id));
    return userArray.length < initialLenght;
  } else return false;
};
/*
if (require.main === module) {
  let result = addOne("Paris in 7 Days Tour", "Paris is synonymous.", "https://www.course-api.com/images/tours/tour-1.jpeg", 500);
  console.log(result);
  result = addOne("Finland in 7 Days Tour", "Finland is synonymous.", "https://www.course-api.com/images/tours/tour-2.jpeg", 800);
  console.log(result);
  console.log(`getAll called: ${getAll()}`);
  console.log(`findById called: ${findById(2)}`);
  console.log(
    `updateById called: ${updateOneById(2, {
      name: "Italy in 7 Days Tour",
      info: "Paris is synonymous.",
      image: "https://www.course-api.com/images/tours/tour-2.jpeg",
      price: 800
    })}`
  );
  console.log(`findById called after item updated: ${findById(2)}`);
  console.log(`deleteById called: ${deleteOneById(2)}`);
  console.log(`findById called after item deleted: ${findById(2)}`);
}
  */

module.exports = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};
