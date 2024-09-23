import {Link} from 'react-router-dom'


export default function Menu() {

  const clickHandler = (event)=>{
    event.currentTarget.childNodes.forEach((item)=> {
      item.classList.remove('menu__item-active')
    })
    event.target.classList.add('menu__item-active');
  }
    return (
    <nav onClick={clickHandler} class="menu">
      <Link  className="menu__item" to="/"
      >  Главная
      </Link>
      <Link className="menu__item" to="/drift">Дрифт-такси</Link>
      <Link className="menu__item" to="/timeattack">Time Attack</Link>
      <Link className="menu__item" to="/forza">Forza Karting</Link>
  </nav>
  );
  }
  