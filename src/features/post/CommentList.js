
export const CommentList = ({ post }) => {

    const renderedComments = post.comment.map(commeted => 
      <h4>{commeted}</h4>
    )
    return(
      <>
        {renderedComments}
      </>
    )
  }