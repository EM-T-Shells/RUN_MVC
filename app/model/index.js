const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
const Category = require("./Category");
const Tag = require("./Tag");

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Post.belongsToMany(Category, {
  through: "PostCategories",
  foreignKey: "post_id",
});

Category.belongsToMany(Post, {
  through: "PostCategories",
  foreignKey: "category_id",
});

Post.belongsToMany(Tag, {
  through: "PostTags",
  foreignKey: "post_id",
});

Tag.belongsToMany(Post, {
  through: "PostTags",
  foreignKey: "tag_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});


module.exports = {
  User,
  Post,
  Comment,
  Category,
  Tag
};