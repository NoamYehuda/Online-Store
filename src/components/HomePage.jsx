import homeImage from '../images/home.jpg'

const HomePage = () => {

    return (
        <div className="home_page_container">
            <img className="home_page_img" src={homeImage} alt="home-page"></img>
            <div className="home_page_header">Its time to style your home</div>
    </div>
    )
}

export default HomePage