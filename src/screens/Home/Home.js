import styles from './Home.module.css';
import { HomeSwgSelector } from './HomeSvgSelector.tsx';
import  { FullData }  from './ItemExporter/FullData.js'
import ItemExporter from './ItemExporter/ItemExporter.js'


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
      <p>Item Catalog</p>
      
      {FullData.length ? 
      (FullData.map(data => (
        <ItemExporter key={data.id} data={data}/>
      )))
      : <div>Data Empty</div>
      }
    </div>

    <div className = {styles.WorkSpace}> 
      <h>7</h>
      <p>8</p>
    </div>

  </div>
);

export default Home;

