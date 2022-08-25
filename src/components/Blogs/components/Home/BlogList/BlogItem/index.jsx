import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (

    <div class="blogItem-wrap row">


    <div class="col-lg-12">
      <div class="blog grid-blog">
          <div class="blog-image">
              <img class="blogItem-cover img-fluid" src={cover} alt=""/>
              <Chip label={category} />
          </div>
          <div class="blog-content">
              <h3 class="blog-title"><Link to={`/blog/${id}`}>{title}</Link></h3>
              
             
             
            
             <p class="blogItem-desc" style={{textAlign: 'justify', marginTop: '-3px'}}>{description} </p>
              <Link style={{marginTop: '23px'}} to={`/blog/${id}`} class="read-more"><i class="fa fa-long-arrow-right"></i> Read More</Link>
              <div class="blog-info clearfix">
                  <div class="post-left">
                  <div className='blogItem-author'>
                    <img src={authorAvatar} alt='avatar' />
                    <p style={{fontStyle: 'italic', color: '#5793D1'}}>{authorName}</p>
              </div>
                  </div>
                  <div class="post-right"> 
                  <ul>
                          <li><Link to={`/blogs`}><i class="fa fa-calendar"></i> <span>{createdAt}</span></Link></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>

    
    </div>
  );
};

export default BlogItem;
