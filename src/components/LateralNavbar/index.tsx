"use client";

import { AiOutlineDownload } from "react-icons/ai";
import styles from "./index.module.scss";

export default function LateralNavbar({
  packageName,
  packageVersion,
}: {
  packageName: string;
  packageVersion: string;
}) {
  const handlePackageInstall = () => {
    let version = packageVersion === "latest" ? "" : `@${packageVersion}`;
    navigator.clipboard.writeText(`npm install ${packageName}${version}`);
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
          <p>
            npm install {packageName}
            {packageVersion === "latest" ? "" : `@${packageVersion}`}
          </p>
        </div>
      </div>
    </aside>
  );
}
