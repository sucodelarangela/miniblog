import styles from './CarDetails.module.css';

const CarDetails = ({ name, year, km }) => {
  return (
    <div className={styles.car_info}>
      <ul>
        <li className={styles.car_name}>Carro: {name}</li>
        <li className={styles.car_details}>Ano: {year}</li>
        <li className={styles.car_details}>KM: {km}</li>
      </ul>
      {km === 0 && <p className={styles.highlight}>Este carro é novo!</p>}
    </div>
  );
};

export default CarDetails;