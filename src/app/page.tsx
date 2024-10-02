import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import styles from './homepage.module.css'; 

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      <header className={styles.header}>
      <img 
          src="https://logodix.com/logo/1270054.png"
          alt="Health Logo"
          className={styles.logo} 
        />
        <h1 className={styles.title}>
          Welcome to HealthTracker
        </h1>
        <p className={styles.subtitle}>
          Your one-stop platform for managing your health!
        </p>
      </header>

      <div className={styles.buttonGroup}>
        <Link href="/login">
          <Button className={`${styles.customButton} ${styles.greenButton}`}>
            <span className={styles.icon}>🔑</span> Login
          </Button>
        </Link>
        <Link href="/register">
          <Button className={`${styles.customButton} ${styles.purpleButton}`}>
            <span className={styles.icon}>📝</span> Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
}
