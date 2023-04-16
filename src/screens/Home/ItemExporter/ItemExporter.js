import styles from './ItemExporter.module.css';

function ItemExporter ({data}) {
   return (
   <div key = {data.id}>
        <h2 > {data.author} </h2>
    </div>
    );
};

export default ItemExporter;