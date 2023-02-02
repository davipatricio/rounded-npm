"use client";

import { useCallback } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import styles from "./index.module.scss";

export default function LateralNavbar({
  packageName,
  packageVersion,
  error,
}: {
  packageName: string;
  packageVersion: string;
  error: boolean;
}) {
  const version = packageVersion === "latest" ? "" : `@${packageVersion}`;
  const text = `npm install ${packageName}${version}`;

  const handlePackageInstall = useCallback(
    () => navigator.clipboard?.writeText(text),
    [text]
  );

  return !error ? (
    <aside className={styles.lateral}>
      <div className={styles.installCommand}>
        <p>Install</p>
        <div
          className={styles.box}
          onClick={handlePackageInstall}
          onKeyDown={(e) =>
            ["Enter", "Space"].includes(e.key) && handlePackageInstall()
          }
          role="button"
          tabIndex={0}
        >
          <AiOutlineDownload />
          <p>{text}</p>
        </div>
      </div>
    </aside>
  ) : (
    <></>
  );
}
