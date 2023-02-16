interface iHeading {
  title: string;
  className?: string;
}

export const Heading = ({ title, className = "" }: iHeading) => {
  return (
    <h1
      className={`text-#000000 text-opacity-80 font-semibold ${
        className.includes("xl") ? "" : "text-3xl"
      } ${className}`}
    >
      {title}
    </h1>
  );
};
