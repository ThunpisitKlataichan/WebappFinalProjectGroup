function TH({
  children,
  width,
  align = "left",
}: {
  children: React.ReactNode;
  width?: string;
  align?: "left" | "right" | "center";
}) {
  const alignClass =
    align === "right" ? "text-right" : align === "center" ? "text-center" : "text-left";
  return (
    <th className={`${width ?? ""} p-3 font-semibold bg-gray-100 ${alignClass}`.trim()}>
      {children}
    </th>
  );
}

export default TH