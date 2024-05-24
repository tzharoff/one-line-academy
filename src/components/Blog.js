import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const BlogContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Blog = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    import(`../blog/${slug}.md`)
      .then(res => {
        fetch(res.default)
          .then(response => response.text())
          .then(text => setContent(text));
      })
      .catch(err => console.log(err));
  }, [slug]);

  return (
    <BlogContainer>
      <ReactMarkdown>{content}</ReactMarkdown>
    </BlogContainer>
  );
};

export default Blog;
