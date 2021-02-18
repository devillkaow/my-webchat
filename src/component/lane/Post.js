import styled from 'styled-components'
import { AddPostForm } from '../../features/post/AddPostForm'
import { PostsList } from '../../features/post/PostList'

const PostsContainer = styled.div`
  width:66%;
  height: auto;
  padding:3rem;
  background-color: rgba(	51, 162, 255, .1);
`

export const PostsLane = () => {
  return (
    <>
      <PostsContainer>
        <AddPostForm />
        <PostsList />
      </PostsContainer>
    </>
  );
}