import { getPackageInfo } from "@/utils/queryUtils";
import { notFound } from "next/navigation";

import LateralNavbar from "../LateralNavbar";

import styles from "./index.module.scss";

interface Props {
  packageName: string;
  packageVersion: string | "latest";
}

export default async function PackageInfo({
  packageName,
  packageVersion = "latest",
}: Props) {
  const data = await getPackageInfo(packageName, packageVersion);
  if (!data) return notFound();

  const privacy = data ? (data.private ? "private" : "public") : "";

  console.log(data);

  return (
    <main className={styles.container}>
      <div className={styles.packageInfo}>
        <p className={`${styles.packagePrivacy} ${styles[privacy]}`}>
          {privacy}
        </p>

        <span>
          <span className={styles.packageName}>{data.name}</span>
          <span className={styles.packageVersion}>{data.version}</span>
        </span>
        <p className={styles.publishTime}>Published 4 weeks ago</p>
      </div>

      <div className={styles.packageContent}>
        <div className={styles.packageReadme}>
          <h1>{data.name}</h1>
        </div>

        <LateralNavbar
          packageName={data.name}
          packageVersion={packageVersion}
        />
      </div>
    </main>
  );
}
