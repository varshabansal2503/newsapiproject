
import image from '../assets/new.png'
const NewsItems = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
    <img src={src?src:image} style={{height:"290px",width:"330px"}} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description?description.slice(0,90):"Amidst the bustling streets of the city, a local hero emerges, showcasing the resilience and compassion that define humanity's spirit. "}</p>
      <a href={url} className="btn btn-primary">Read More</a>
    </div>
  </div>
  )
}

export default NewsItems
