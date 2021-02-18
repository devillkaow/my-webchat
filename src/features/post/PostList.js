import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from "@blueprintjs/core";

import { PostAuthor } from './PostAuthor'
import { LikeButton } from './LikeButton'
import { CommentList } from './CommentList'

const Container = styled.div`
  margin: 24px 0 0 0;
  background-color: rgba(	51, 162, 255, .2);
  padding: 20px 80px;
  border-radius: 4px;
`

const PostContent = styled.div`
 background-color: rgba(	51, 162, 255, .9);
  font-size: 36px;
  margin: 0 0 8px 0;
  padding: 20px;
  color: white;
  border-radius: 4px;
`

const style = {
  cursor: 'pointer',
  margin: '0 0 0 0',
  display: 'flex',
  justifyContent: 'flex-end',
}

export const PostsList = () => {

  const posts = useSelector((state) => state.posts)
  const userlogged = useSelector((state) => state.userlogged)

  const renderedPosts = posts.map((post) => {
    if(post){
    return (
      <Container key={post.id}>
       
        <PostContent>
          {post.content}
          <PostAuthor userId={post.user} />
        </PostContent> 
        <LikeButton post={post} />
        <CommentList post={post} />
        <Link to={`/posts/${post.id}`} >
            <Icon icon="comment" iconSize={32} style={style}/>
        </Link>
      </Container>
    )
  }
})
  
 console.log('userlogged', userlogged)
 console.log('post', posts)
  return (
    <>
    {/* <TitlePost>{posts[0] ? 'Post' : ''}</TitlePost> */}
      <h1>{renderedPosts}</h1>
    </>
  )
}
