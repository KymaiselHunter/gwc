import Logo from '../assets/gwc-logo-rectangle.jpg'

function Navbar()
{
  return(
    <>
      <header className='sticky top-0 z-max w-screen backdrop-blur-lg bg-backround/80 shadow-sm flex justify-center'> 
        <div className='container flex justify-between items-center h-16 p-8'>

          
          <img src={Logo} alt="GirlsWhoCode@Hunter"
            className='h-16'
          ></img>
          <p>ddsfetwr</p>
          <p>reah</p>

        </div>

      </header>
    </>
  );
} export default Navbar
