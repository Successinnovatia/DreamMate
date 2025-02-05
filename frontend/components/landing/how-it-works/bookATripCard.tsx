import Image from "next/image";

export function BookATripCard({
  text,
  subtext,
}: {
  text: string;
  subtext: string;
}) {
  return (
    <div className="flex flex-col lg:flex-row justify-center w-full">
      <Image
        src={"/images/logo-orange-notext.svg"}
        alt="dreammate-logo"
        width={70}
        height={47}
      />

      <div className="flex flex-col space-y-4 pb-2">
        <h3 className="text-secondary lg:text-xl font-serif font-bold">
          {text}
        </h3>
        <p className="text-[#4F4D55]">{subtext}</p>
      </div>
    </div>
  );
}
