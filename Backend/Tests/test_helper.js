import { find } from '../models/blog'
import { find as _find } from '../models/user'

const initialBlogs = [
  {
    title: "First Blog",
    author: "Author 1",
    url: "http://example.com/1",
    likes: 5
  },
  {
    title: "Second Blog",
    author: "Author 2",
    url: "http://example.com/2",
    likes: 10
  },
  {
    title: "Third Blog",
    author: "Author 3",
    url: "http://example.com/3",
    likes: 7
  }
]

blogsInDb = async () => {
  const blogs = await find({})
  return blogs.map(blog => blog.toJSON())
}

usersInDb = async () => {
  const users = await _find({})
  return users.map(u => u.toJSON())
}

export default {
  initialBlogs,
  blogsInDb,
  usersInDb
}