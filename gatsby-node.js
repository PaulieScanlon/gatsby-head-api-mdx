const path = require('path');
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: { allMdx }
  } = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            title
          }
        }
      }
    }
  `);

  allMdx.nodes.forEach((node) => {
    const {
      id,
      frontmatter: { title }
    } = node;

    createPage({
      path: `/posts/${slugify(title, { lower: true })}`,
      component: path.resolve('src/templates/post-template.js'),
      context: {
        id: id
      }
    });
  });
};
