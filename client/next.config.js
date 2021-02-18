const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
})

module.exports = {
  env: {
    MONGODB_URI: "mongodb+srv://volphax:volphax2021brasil@cluster0.tvyqn.mongodb.net/manutencao?retryWrites=true&w=majority",
  },
};
