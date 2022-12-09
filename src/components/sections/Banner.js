import "../../styles/sections/Banner.css"

const banner = "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/05/youtube-banner-2.png"

const Banner = () => (
    <div className="container-fluid">
          <img className="Banner-img" src={banner} alt="img"/>
    </div>
)

export default Banner