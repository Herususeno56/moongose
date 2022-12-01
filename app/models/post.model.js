module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    name: String,
    price: Number,
    stock: Number ,
    status:  Boolean
  });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Post = mongoose.model("try", schema);
  return Post;
};
