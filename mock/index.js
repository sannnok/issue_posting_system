const faker = require('faker');

module.exports = () => {
  const data = {
    posts: [],
    files: [],
    'err-logs': []
  };

  for (let i = 0; i < 10; i++) {
    data.posts.push({
      userId: faker.random.uuid(),
      id: faker.random.uuid(),
      date: faker.date.past(),
      title: faker.name.title(),
      body: faker.lorem.paragraph(100)
    })
  }

  return data
};

// api methods: https://github.com/Marak/faker.js#api-methods
