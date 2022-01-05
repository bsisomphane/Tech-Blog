const router = require("express").Router();
const homeRoutes = require("./homeroutes");
const commentRoutes = require("./api/commentroutes");
const userRoutes = require("./api/userroutes");
const postRoutes = require("./api/postroutes");



router.use("/", homeRoutes);

router.use("/api/comments", commentRoutes);

router.use("/api/users", userRoutes);

router.use("/api/posts", postRoutes);

module.exports = router
