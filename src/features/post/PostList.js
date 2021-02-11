import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Icon } from "@blueprintjs/core";

import { PostAuthor } from './PostAuthor'
import { LikeButton } from './LikeButton'
import { CommentList } from './CommentList'

export const PostsList = (loggedUsername) => {
  const posts = useSelector((state) => state.posts)

  const renderedPosts = posts.map((post) => {
    return (
      <div key={post.id}>
        <h1>{post.content}</h1>
        <div>
          <PostAuthor userId={post.user} />
        </div>
        <LikeButton post={post} />
        <CommentList post={post} />
        <Link to={`/posts/${post.id}`} >
            <Icon icon="comment" />
        </Link>
      </div>
    )
  })
 console.log('post', posts)
 console.log('post content', posts.content)
 console.log('post user', posts.user)
 console.log('post comment', posts.comment)
 console.log('logeddddd', loggedUsername)
  return (
    <section className="posts-list">
      <h2>Posts</h2>
      <h1>{renderedPosts}</h1>
    </section>
  )
}
