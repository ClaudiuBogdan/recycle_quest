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
    <section className="p-8 bg-gray-100 rounded-md shadow-md mb-4">
      <h1 className="text-3xl font-bold mb-4 text-green-600">{title}</h1>
      <h4 className="text-lg text-gray-600 mb-6">{subtitle}</h4>

      <div className="">
        {/* Sections */}
        <div className="mb-4">{didYouKnowSection}</div>
        <div className="mb-4">{exampleSection}</div>
        <div className="mb-4">{importantSection}</div>

        {/* Children */}
        <div className="col-span-2 mb-6">{children}</div>

        {/* Additional Sections */}
        <div className="mb-4">{listSection}</div>
        <div className="mb-4">{dontSection}</div>
      </div>
    </section>
  );
}
