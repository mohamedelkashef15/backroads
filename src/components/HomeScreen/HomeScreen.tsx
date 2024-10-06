import styles from "./HomeScreen.module.scss";

function HomeScreen() {
  return (
    <div className={styles.headerContent}>
      <h1>BACKROADS APP</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae explicabo debitis est autem dicta.</p>
      <a href="#tours" className="btn btn-primary">
        EXPLORE TOURS
      </a>
    </div>
  );
}

export default HomeScreen;
