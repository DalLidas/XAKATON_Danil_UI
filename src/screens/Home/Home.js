import styles from './Home.module.css';
import { HomeSwgSelector } from './HomeSvgSelector.tsx';

const Home = () => (

  <div className = {styles.Conteiner}>  
    <div className = {styles.Navbar}>
      <ul>
        <li>
          <button className = {styles.NavbarItem}> 
            <HomeSwgSelector id = {"icoWrite"}/>
          </button>
        </li>

        <li>
          <button className = {styles.NavbarItem}>
            <HomeSwgSelector id = {"icoGenerate"}/>
          </button>
        </li>
      </ul>
    </div>

    <div className = {styles.ItemCatalog}> 
      <h>3</h>
      <p>4</p>
      <p>5</p>
      <p>6</p>
    </div>

    <div className = {styles.WorkSpace}> 
      <h>7</h>
      <p>8</p>
    </div>

  </div>
);

export default Home;

