"use client";

import { getPackageInfo } from "@/utils/queryUtils";
import { RawPackageManifest } from "query-registry";
import { useEffect, useState } from "react";

import LateralNavbar from "../LateralNavbar";

import styles from "./index.module.scss";

interface Props {
  packageName: string;
  packageVersion: string | "latest";
}

export default function PackageInfo({
  packageName,
  packageVersion = "latest",
}: Props) {
  const [data, setData] = useState({
    name: packageName,
    version: "loading",
  } as RawPackageManifest);

  useEffect(() => {
    getPackageInfo(packageName, packageVersion)
      .then((data) => {
        if (data) setData(data);
      })
      .catch(() => {});
  }, [packageName, packageVersion]);

  const privacy = data.private ? "private" : "public";

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
