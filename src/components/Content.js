import React from 'react'
import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';

export const HTMLContent = ({ content, ...other}) => (
  <div {...other} dangerouslySetInnerHTML={{ __html: content }} />
)

export const MDContent = ({ content, ...other }) => {
  // TODO: Check to make sure MD treatment is same for this and MD file body
  const html = remark()
      .use(recommended)
      .use(remarkHtml)
      .processSync(content).toString();
  return (
    <HTMLContent {...other} content={html} />
  );
}

const Content = ({ content, ...other }) => (
  <div {...other}>{content}</div>
)

export default Content
