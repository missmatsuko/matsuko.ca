import React from 'react'
import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';

export const HTMLContent = ({ content }) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
)

export const MDContent = ({ content }) => {
  // TODO: Check to make sure MD treatment is same for this and MD file body
  const html = remark()
      .use(recommended)
      .use(remarkHtml)
      .processSync(content).toString();
  return (
    <HTMLContent content={html} />
  );
}

const Content = ({ content }) => (
  <div>{content}</div>
)

export default Content
