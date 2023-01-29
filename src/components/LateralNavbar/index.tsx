"use client";

import { AiOutlineDownload } from "react-icons/ai";
import styles from "./index.module.scss";

export default function LateralNavbar({
  packageName,
}: {
  packageName: string;
}) {
  const handlePackageInstall = () => {
    navigator.clipboard.writeText(`npm install ${packageName}`);
  };

  return (
    <aside className={styles.lateral}>
      <div className={styles.installCommand}>
        <p>Install</p>
        <div
          className={styles.box}
          onClick={handlePackageInstall}
          onKeyDown={(e) => e.key === "Enter" && handlePackageInstall()}
          role="button"
          tabIndex={0}
        >
          <AiOutlineDownload />
          <p>npm install {packageName}</p>
        </div>
      </div>
    </aside>
  );
}
