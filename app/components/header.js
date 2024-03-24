import Image from "next/image";
import styles from "../page.module.css";
import Logo from "../../public/logo.jpg";

export const Header = () => {
 return(
<div className={styles.header}>
<Image src={Logo} className={styles.logoimg} width={80} height={80} />
</div>
 )
}
