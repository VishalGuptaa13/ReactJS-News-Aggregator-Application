import React, { Component } from 'react'

export default class NewsItem extends Component {



  render() {

    //Below is object destructuring type for the props 
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;

    return (
      <div>
        {/* Adding the bootstarp card css */}

        <div className="card my-2" >
            <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>
            <span className="badge rounded-pill bg-danger" >{source}</span>
            </div>
            <img src={imageUrl?imageUrl:"https://www.cartoq.com/wp-content/uploads/2024/01/ather-450x-apex-electric-scooter-featured.png"} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            {/* btn-sm class is used in bootstrap to small the size of the button  here we are also assignig image url using states fromm news.js and target is used to open news in a blank tab*/}
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>        




      </div>
    )
  }
}  
