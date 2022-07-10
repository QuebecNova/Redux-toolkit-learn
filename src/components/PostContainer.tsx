import React from 'react'
import { postAPI } from '../services/postService'
import { IPost } from '../types/IPost'
import PostItem from './PostItem'

export default function PostContainer() {
    
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(100)
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()

    async function handleCreatePost() {
        const title = prompt()
        await createPost({title, body: title,} as IPost)
    }

    function handleRemove(post : IPost) {
        deletePost(post)
    }

    function handleUpdate(post : IPost) {
        updatePost(post)
    }

    return (
    <div>
        <div>
            <button onClick={handleCreatePost}>Add new post</button>
            {isLoading && <h1>Загрузка...</h1>}
            {error && <h1>произошла ошибка при загрузке постов</h1>}
            {posts?.map(post => {
                return <PostItem post={post} key={post.id} remove={handleRemove} update={handleUpdate}/>
            })}
        </div>
    </div>
  )
}
