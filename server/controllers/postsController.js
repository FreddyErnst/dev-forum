module.exports = {
    topics: async (req, res) => {
        const db = req.app.get('db')
        const topics = await db.topics.getTopics()

        res.status(200).json(topics)
    },

    posts: async (req, res) => {
        const topicId = +req.params.topicId
        const db = req.app.get('db')
        const posts = await db.posts.getTopicPosts(topicId)

        res.status(200).json(posts)
    },

    addPost: async (req, res) => {
        const {topicId, userId, userPost} = req.body
        const db = req.app.get('db')
        if (!userPost) {
            res.status(409).json("Please enter a post")
        } else {
            const posts = await db.posts.addPost(topic_id, user_id, userPost)

            res.status(200).json(posts)
        }
     }
    // deletePost: async (req, res) => {
    //     const {topicId, postId} = +req.body


    //     const db = req.app.get('db')

    //     const posts = await db.posts.deletePost(topicId, postId)
    //     res.status(200).json(posts)
    // }
    
}