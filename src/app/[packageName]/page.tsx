import PackageInfo from "@/components/PackageInfo";
import { getPackageInfo } from "@/utils/queryUtils";

interface Props {
  params: {
    packageName: string;
  };
}

export default async function PackagePage({ params }: Props) {
  const { packageName } = params;

  return <PackageInfo packageName={packageName} packageVersion="latest" />;
}
