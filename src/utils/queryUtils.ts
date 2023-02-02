import { getPackument } from "query-registry";

export async function getPackageInfo(name: string, version = "latest") {
  // Don't use mirrors for this query
  const data = await getPackument({ name, mirrors: [] });

  // try to get a tag with value of version
  let versionInfo = data.versions[data["dist-tags"][version]];
  // if no tag found, try to get a version with value of version
  if (!versionInfo) versionInfo = data.versions[version];

  return versionInfo;
}
