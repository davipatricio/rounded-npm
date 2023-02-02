"use client";

import { useCallback } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import styles from "./index.module.scss";

export default function LateralNavbar({
  packageName,
  packageVersion,
}: {
  packageName: string;
  packageVersion: string;
}) {
  const version = packageVersion === "latest" ? "" : `@${packageVersion}`;
  const handlePackageInstall = useCallback(() => {
    navigator.clipboard.writeText(`npm install ${packageName}${version}`);
  }, [version, packageName]);

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
            {version}
          </p>
        </div>
      </div>
    </aside>
  );
}
