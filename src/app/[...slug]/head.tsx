interface PackagePageProps {
  params: {
    packageName: string;
  };
}

export default function Head({ params }: PackagePageProps) {
  return (
    <>
      <title>{`RoundedNPM - ${params.packageName}`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </>
  );
}
