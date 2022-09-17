
import Dropdown from '../Dropdown/Dropdown';
import SearchInput from '../SearchInput/SearchInput';
import './Header.css';

function Header() {



  return (
      <div className='header'>
        <a href="/" className='logo'>
          <img src={require("../../images/logo.svg").default} alt="" className='logo__img' />
        </a>
        <div className='search'>
            <Dropdown />
            <SearchInput />
          </div>
      </div>
  );
}

export default Header;
