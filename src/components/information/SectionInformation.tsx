export default function SectionInformation({
  title,
  subtitle,
  didYouKnowSection,
  exampleSection,
  importantSection,
  listSection,
  dontSection,
  children,
}: {
  title: string;
  subtitle: string;
  didYouKnowSection: string;
  exampleSection: string;
  importantSection?: string;
  listSection?: string;
  dontSection: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pb-8 space-x-2">
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
      <section>{didYouKnowSection}</section>
      <section>{exampleSection}</section>
      <section>{importantSection}</section>
      <div>{children}</div>
      <section>{listSection}</section>
      <section>{dontSection}</section>
    </section>
  );
}
