import Logo from '../src/assets/Logo.png'
function Footer(){
    return(<>
    <footer>
    <img src={Logo} alt="Dev-logo" className="logo" />
    <p>© 2025 Simple Calculator | Developed by <span className="dev-name">Orange Org</span></p>
        </footer>
    </>)
}

export default Footer