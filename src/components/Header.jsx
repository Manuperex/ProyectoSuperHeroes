import superWomen from "../assets/uperwoman.png";

const Header = () => {
return (
    <div className="flex flex-row items-center justify-center my-6">
        <img src={superWomen} alt="" />
        <h1 className="text-6xl max-sm:text-4xl uppercase font-bold">Super Heroe</h1>
    </div>
)
}

export default Header