import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/pages/Home.css"

const banner = "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/05/youtube-banner-2.png"

const Home = () => {

  return(
    <div className="container-fluid">
        <img className="Home-img" src={banner} alt="img"/>
    </div>
  )
}

export default Home;