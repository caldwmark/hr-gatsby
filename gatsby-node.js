exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/template/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
