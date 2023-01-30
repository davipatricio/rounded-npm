import PackageInfo from "@/components/PackageInfo";

interface Props {
  params: {
    packageName: string;
    packageVersion: string;
  };
}

export default function PackagePage({ params }: Props) {
  const { packageName, packageVersion } = params;

  return (
    <PackageInfo packageName={packageName} packageVersion={packageVersion} />
  );
}
