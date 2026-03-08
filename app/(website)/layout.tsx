import Tabs from "@/components/navigation/Tabs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tabItems = ['Home', 'About', 'Contact']


  return (
    <div className="h-full w-full">
        <Tabs tabs={tabItems} children={children} />
    </div>
  );
}