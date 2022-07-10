import React from 'react'
import { IPost } from '../types/IPost'

type Props = {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

export default function PostItem({post, remove, update}: Props) {
  
  function handleRemove (event: React.MouseEvent) {
    event.stopPropagation()
    remove(post)
  }
  function handleUpdate (event: React.MouseEvent) {
    const title = prompt() || ''
    update({...post, title})
  }

  return (
    <div onClick={handleUpdate}>
      <div>{post.id}, {post.title}</div>
      <button onClick={handleRemove}>Delete</button>
    </div>
  )
}