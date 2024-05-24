import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BlogLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const BlogLink = styled(Link)`
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  margin: 5px 0;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const BlogLinks = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/blog/posts.json')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching blog posts:', error));
  }, []);

  return (
    <BlogLinksContainer>
      {posts.map(post => (
        <BlogLink key={post.slug} to={`/blog/${post.slug}`}>
          {post.title}
        </BlogLink>
      ))}
    </BlogLinksContainer>
  );
};

export default BlogLinks;
