"use client";

import { getPackageInfo } from "@/utils/queryUtils";
import { RawPackageManifest } from "query-registry";
import { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
  const [error, setError] = useState(false);

  useEffect(() => {
    getPackageInfo(packageName, packageVersion)
      .then((data) => {
        if (data) setData(data);
      })
      .catch(() => {
        setData((prev) => ({
          ...prev,
          version: "error",
          private: true,
          readme:
            "# 404 - This package does not exist on NPM registry or is private.",
        }));
        setError(true);
      });
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
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    language={match[1]}
                    // @ts-expect-error
                    style={a11yDark}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
            skipHtml={true}
            remarkPlugins={[remarkGfm]}
          >
            {data.readme ?? ""}
          </ReactMarkdown>
        </div>

        <LateralNavbar
          packageName={data.name}
          packageVersion={packageVersion}
          error={error ?? data.private}
        />
      </div>
    </main>
  );
}
