import { FC, HTMLAttributes } from "react";
import { titleFont } from "@/config/fonts";

interface TitleProps {
  title: string;
  subtitle?: string;
  className?: HTMLAttributes<HTMLDivElement>['className']
}

export const Title: FC<TitleProps> = ({ title, className, subtitle }) => {
  return (
    <div className={`mt-3 ${ className}`}>
      <h1 className={` ${ titleFont.className} antialiased text-4xl font-semibold my-10`}>{ title }</h1>
      { subtitle &&<h3 className="text-xl mb-10">{ subtitle }</h3> }
    </div>
  )
}
