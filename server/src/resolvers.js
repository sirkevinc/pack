const User = require('./models/User');
const Item = require('./models/Item');

const resolvers = {
  Query: {
    users: () => User.find(),
  },
  Mutation: {
    createUser: (_, { username, email, password }) => {
      const newUser = new User({ username, email, password });
      return newUser.save();
    },
    createItem: (_, { name, quantity, category, owner }) => {
      const newItem = new Item({ name, quantity, category, owner });
      return newItem.save();
    }
  }
};

module.exports = {
  resolvers
}