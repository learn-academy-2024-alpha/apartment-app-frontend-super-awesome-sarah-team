import NavButton from "../components/NavButton"
import apartments from "../assets/jan-jakub-nanista-unsplash.jpg"

const Home = () => {
  return (
    <div className="center-content">
      <h1 className="title-header">Home Sweet Home.</h1>
      <NavButton url="/" buttonContent="See Listings" />
      <img
        src={apartments}
        alt="tiled pattern of blue windows on a tan building"
        className="home-apartment-image"
      />
    </div>
  )
}

export default Home
