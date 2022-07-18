import React from 'react';
import Link from 'next/link';

const BlogSidebar = () => {
    return (
        <div className="widget-area" id="secondary">
            <div className="widget widget_search">
                <h3 className="widget-title">Search Now</h3>
                <div className="post-wrap">
                    <form className="search-form">
                        <label>
                            <span className="screen-reader-text">Search for:</span>
                            <input type="search" className="search-field" placeholder="Search..." />
                        </label>
                        <button type="submit">
                            <i className='bx bx-search'></i>
                        </button>
                    </form>
                </div>
            </div>

            <div className="widget widget-peru-posts-thumb">
                <h3 className="widget-title">Popular Posts</h3>
                <div className="post-wrap">
                    <div className="item">
                        <Link href="#">
                            <a className="thumb">
                                <span className="fullimage cover bg1" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <span>April 20, 2020</span>
                            <h4 className="title usmall">
                                <Link href="#">
                                    <a>
                                        ECGC News Letter
                                    </a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </div>

                    <div className="item">
                        <Link href="#">
                            <a className="thumb">
                                <span className="fullimage cover bg2" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <span>April 21, 2020</span>
                            
                            <h4 className="title usmall">
                                <Link href="#">
                                    <a>
                                        Our Rebranding Journey
                                    </a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </div>

                    <div className="item">
                        <Link href="#">
                            <a className="thumb">
                                <span className="fullimage cover bg3" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <span>April  22, 2020</span>
                            <h4 className="title usmall">
                                <Link href="#">
                                    <a>
                                        Poised to make an impact in domestic and export trade.
                                    </a> 
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </div>

                </div>
            </div>
  

        </div>
    )
}

export default BlogSidebar;