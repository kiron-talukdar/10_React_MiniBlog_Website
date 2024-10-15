import profile from '../../assets/images/profile.png'


const Header = () => {



 
    return (

        <header className='flex justify-between p-4 border-2 max-w-7xl mx-auto'>
              <h1 className='text-4xl font-bold'>Knowledge React</h1>
              <img src={profile} alt="" />
        </header>
    );
};

export default Header;