interface PackagePageProps {
  params: {
    packageName: string;
    packageVersion?: string;
  };
}

export default function Head({ params }: PackagePageProps) {
  return (
    <>
      <title>
        {`RoundedNPM - ${params.packageName} ${
          params.packageVersion ? `v${params.packageVersion}` : ""
        }`}
      </title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </>
  );
}
