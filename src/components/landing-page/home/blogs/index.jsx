import React from 'react'
import { BlogsWrapper } from './style'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { blogs } from '../../../../constants/landingpage'

function Blogs() {
  return (
    <BlogsWrapper>
        <Container>
            
            <h2 className="title">BLOGS</h2>
            <h3 className="title2">Pellentesque tincidunt semper risus ut consectetu</h3>

            <div className="blogs-grid">
                {
                    blogs.map((blog) => (
                        <div className="blog-card" key={blog.id}>
                            <div className="image">
                                <img src={blog.image} alt="blog image" />
                            </div>
                            <h2 className="blog-title">{blog.heading}</h2>
                            <p className="blog-para">{blog.description}</p>
                            <Link className='link' to={blog.link}>{blog.link_text}</Link>
                        </div>
                    ))
                }
                
            </div>

        </Container>
    </BlogsWrapper>
  )
}

export default Blogs