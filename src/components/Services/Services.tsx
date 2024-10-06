import { IServicesItem } from "../interfaces";
import SectionTitle from "../SectionTitle";
import styles from "./Services.module.scss";
import { faWallet, faTree, faSocks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const servicesData: IServicesItem[] = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faWallet} />,
    heading: "Saving Money",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faTree} />,
    heading: "Endless Hiking",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faSocks} />,
    heading: "Amazing Comfort",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
];

function Services() {
  return (
    <section className={styles.services}>
      <div className="container">
        <SectionTitle name1="OUR" name2="SERVICES" />
        <Items />
      </div>
    </section>
  );
}

function Items() {
  return (
    <div className={styles.items}>
      {servicesData.map((item) => {
        return <Item icon={item.icon} heading={item.heading} content={item.content} key={item.id} />;
      })}
    </div>
  );
}

function Item({ icon, heading, content }: IServicesItem) {
  return (
    <div className={styles.item}>
      {icon}
      <div className="itemContent">
        <h3>{heading}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Services;
