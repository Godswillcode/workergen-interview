import Image from "next/image";
import anaLysisLogo from "../images/logoAnalysis.png"

export const Analysis = () => {
  return (
    <div className="relative shadow-xl mt-4 p-[1.3px] rounded-md bg-gradient-to-r from-[#9BA5FF] via-[#ce8178] var-[#62C4C3]  via-[#9BA5FF] via-[#62C4C3] to-[#ce8178] ">
      <div className="bg-white p-3 rounded-[5px] w-full h-full">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
                <Image src={anaLysisLogo} alt="logo" className="h-5 w-5"/>
                <h3 className="font-semibold text-[10px]">Hi Mona, <span className="text-[#325BC9]">68% </span> of goals achieved and the rest can be achieved by focusing on 20 top leads. </h3>
            </div>
         </div>
      </div>
    </div>
  );
};
