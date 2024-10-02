"use client";

import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Save } from "lucide-react";
import styles from './scribble.module.css';


const Excalidraw = dynamic(() => import('@excalidraw/excalidraw').then(mod => mod.Excalidraw), { ssr: false });

export default function ScribblePad() {
  return (
    <div className={styles.scribbleContainer}>
      <h1 className={styles.heading}>Scribble Pad</h1>

      <div className={styles.scribbleArea}>
        <Excalidraw />
      </div>

      <Button className={styles.saveButton}>
        <Save className={styles.icon} />
        Save Scribble
      </Button>

      <div className={styles.prescriptionSection}>
        <label className={styles.label}>Write Prescription</label>
        <Input className={styles.textInput} placeholder="Enter prescription" />
      </div>
    </div>
  );
}
