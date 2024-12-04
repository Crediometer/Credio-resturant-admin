import { faker } from '@faker-js/faker';

export const generateOrders = (count) => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    foodName: faker.food.dish(),
    foodDetail: faker.food.adjective(),
    image: `https://loremflickr.com/200/200/food?random=${faker.number.int({ min: 1, max: 1000 })}`,
    date: faker.date.recent().toLocaleDateString(),
    status: faker.helpers.arrayElement(['ongoing', 'completed', 'pending']),
  }));
};