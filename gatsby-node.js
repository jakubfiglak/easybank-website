const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/layouts/article.js');

  const result = await graphql(`
  query queryArticles {
    allDatoCmsArticle {
      nodes {
        id
        slug
      }
    }
  }
  `);

  result.data.allDatoCmsArticle.nodes.forEach((article) => {
    createPage({
      path: `articles/${article.slug}`,
      component: blogPostTemplate,
      context: {
        id: article.id,
      },
    });
  });
};
