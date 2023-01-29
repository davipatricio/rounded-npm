import Navbar from "@/components/Navbar";
import LateralNavbar from "@/components/LateralNavbar";

import styles from "./page.module.scss";

interface PackagePageProps {
  params: {
    packageName: string;
  };
}

export default function PackagePage({ params }: PackagePageProps) {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <div className={styles.packageInfo}>
          <p className={`${styles.packagePrivacy} ${styles.public}`}>public</p>
          <span>
            <span className={styles.packageName}>discord.js</span>
            <span className={styles.packageVersion}>14.3.0</span>
          </span>
          <p className={styles.publishTime}>Published 4 weeks ago</p>
        </div>

        <div className={styles.packageContent}>
          <div className={styles.packageReadme}>
            <h1>discord.js</h1>
          </div>

          <LateralNavbar packageName={params.packageName} />
        </div>
      </main>
    </>
  );
}
