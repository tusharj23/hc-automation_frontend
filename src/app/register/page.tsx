import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { SelectValue } from "@/components/ui/select";
import styles from './register.module.css';

export default function SignUp() {
  return (
    <div className={styles.signupPage}>
      <h1 className={styles.title}>Sign Up</h1>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <Label htmlFor="name" className={styles.label}>Full Name</Label>
          <Input type="text" id="name" placeholder="Enter your full name" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <Label htmlFor="email" className={styles.label}>Email</Label>
          <Input type="email" id="email" placeholder="Enter your email" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <Label htmlFor="password" className={styles.label}>Password</Label>
          <Input type="password" id="password" placeholder="Create a password" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <Label htmlFor="confirmPassword" className={styles.label}>Confirm Password</Label>
          <Input type="password" id="confirmPassword" placeholder="Confirm your password" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <Label htmlFor="role" className={styles.label}>Select Your Role</Label>
          <Select>
            <SelectTrigger className={styles.customSelectTrigger}>
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent className={styles.customSelectContent}>
              <SelectItem value="receptionist">Receptionist</SelectItem>
              <SelectItem value="doctor">Doctor</SelectItem>
              <SelectItem value="patient">Patient</SelectItem>
              <SelectItem value="pharmacist">Pharmacist</SelectItem>
              <SelectItem value="xray">Person who does X-Rays</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className={styles.signupButton}>📝 Sign Up</Button>
      </form>
      <p className={styles.loginPrompt}>
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </div>
  );
}
