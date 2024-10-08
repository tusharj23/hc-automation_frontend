import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { SelectValue } from "@/components/ui/select";
import styles from './login.module.css';

export default function Login() {
  return (
    <div className={styles.loginPage}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <Label htmlFor="email" className={styles.label}>Email</Label>
          <Input type="email" id="email" placeholder="Enter your email" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <Label htmlFor="password" className={styles.label}>Password</Label>
          <Input type="password" id="password" placeholder="Enter your password" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <Label htmlFor="role" className={styles.label}>Select Your Role</Label>
          <Select>
            <SelectTrigger className={styles.input}>
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent  className={styles.customSelectContent}>
              <SelectItem value="receptionist">Receptionist</SelectItem>
              <SelectItem value="doctor">Doctor</SelectItem>
              <SelectItem value="patient">Patient</SelectItem>
              <SelectItem value="pharmacist">Pharmacist</SelectItem>
              <SelectItem value="xray">Person who does X-Rays</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className={styles.loginButton}>🔑 Login</Button>
      </form>
      <p className={styles.signUpPrompt}>
        Don't have an account? <Link href="/register">Sign Up</Link>
      </p>
    </div>
  );
}
