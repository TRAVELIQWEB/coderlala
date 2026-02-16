import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import styles from './ThemeToggle.module.css';

function SimpleThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setIsRotating(true);
    setTheme(theme === 'light' ? 'dark' : 'light');
    setTimeout(() => setIsRotating(false), 500);
  };

  if (!mounted) {
    return (
      <button className={styles.glassCard} aria-label="Theme toggle">
        <div className={styles.iconContainer}>
          <span className={styles.themeIcon}>🌙</span>
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={styles.glassCard}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className={`${styles.iconContainer} ${isRotating ? styles.rotating : ''}`}>
        <span className={styles.themeIcon}>
          {theme === 'light' ? '🌙' : '☀️'}
        </span>
      </div>
    </button>
  );
}

export default SimpleThemeToggle;