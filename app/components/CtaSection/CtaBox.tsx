import Image, {StaticImageData} from 'next/image';
import arrowRight from '../../assets/icon/Arrow Right White.svg';
import Link from "next/link";

interface CtaBoxProps {
    title: string;
    subtitle: string;
    bgImage: string | StaticImageData;
}

export default function CtaBox({title, subtitle, bgImage}: CtaBoxProps) {
    return (
        <div
            className="relative group flex-1 min-h-[250px] h-[515px] flex flex-col justify-end pr-6 pl-6 pb-8 pt-8 rounded-sm overflow-hidden bg-cover bg-center bg-no-repeat transition-transform hover:scale-[1.01]"
            style={{backgroundImage: `linear-gradient(0deg, #141414 0%, rgba(20, 20, 20, 0.00) 100%), url(${bgImage})`}}
        >
            <div className="flex justify-between items-end w-full text-white">
                <div className="flex flex-col gap-1 w-[100%]">
                    <h2 className="font-semibold text-[22px] md:text-[28px] leading-[24px] tracking-[-0.22px]">{title}</h2>
                    <p className="text-[17px] md:text-[19px] opacity-50 leading-[24px] font-medium w-5/6">{subtitle}</p>
                </div>

                <Link href='#'
                      className="flex items-center justify-center p-3 md:p-4 border-2 border-white/30 rounded-sm group-hover:bg-white group-hover:border-white transition-all">
                    <Image
                        src={arrowRight}
                        alt="Arrow right"
                        className="w-5 h-5 group-hover:invert transition-all"
                    />
                </Link>
            </div>
        </div>
    )
}