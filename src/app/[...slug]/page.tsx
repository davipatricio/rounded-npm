import { notFound } from "next/navigation";

import LateralNavbar from "@/components/LateralNavbar";

import styles from "./page.module.scss";

interface Props {
  params: {
    slug: string[];
  };
}

export default function PackagePage({ params }: Props) {
  if (params.slug.length > 1) {
    notFound();
  }

  const [packageName] = params.slug;

  return (
    <main className={styles.container}>
      <div className={styles.packageInfo}>
        <p className={`${styles.packagePrivacy} ${styles.public}`}>public</p>
        <span>
          <span className={styles.packageName}>{packageName}</span>
          <span className={styles.packageVersion}>14.3.0</span>
        </span>
        <p className={styles.publishTime}>Published 4 weeks ago</p>
      </div>

      <div className={styles.packageContent}>
        <div className={styles.packageReadme}>
          <h1>{packageName}</h1>
        </div>

        <LateralNavbar packageName={packageName} />
      </div>
    </main>
  );
}
