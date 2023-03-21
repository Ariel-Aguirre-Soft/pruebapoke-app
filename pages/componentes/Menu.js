import Link from 'next/link';
import styles from '@/styles/Menu.module.css';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link href="/">
            Pokemons
          </Link>
        </li>
      </ul>
      <div class="buttons-container">
    <ul>
    <li></li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
      
      
    </ul>
  </div>
      
    </nav>
  );
};

export default Menu;

