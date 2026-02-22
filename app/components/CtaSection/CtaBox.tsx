import Image from 'next/image';
import arrowRight from '../../assets/icon/Arrow Right White.svg';
import hug from '../../assets/hug.jpg';

interface CtaBoxProps {
    title: string;
    subtitle: string;
}

export default function CtaBox({ title, subtitle }: CtaBoxProps) {
    return (
        <div
            className="relative group flex-1 min-h-[250px] h-[515px] flex flex-col justify-end pr-6 pl-6 pb-8 pt-8 rounded-lg overflow-hidden bg-cover bg-center bg-no-repeat transition-transform hover:scale-[1.01]"
            style={{ backgroundImage: `linear-gradient(0deg, #141414 0%, rgba(20, 20, 20, 0.00) 100%), url(${hug.src})`}}
        >
            <div className="flex justify-between items-end w-full text-white">
                <div className="flex flex-col gap-1">
                    <h2 className="font-semibold text-[22px] md:text-[28px] leading-[24px] tracking-[-0.22px]">{title}</h2>
                    <p className="text-[17px] md:text-[19px] opacity-50 leading-[24px] font-medium">{subtitle}</p>
                </div>

                <div className="flex items-center justify-center p-3 md:p-4 border-2 border-white/30 rounded-sm group-hover:bg-white group-hover:border-white transition-all">
                    <Image
                        src={arrowRight}
                        alt="Arrow right"
                        className="w-5 h-5 group-hover:invert transition-all"
                    />
                </div>
            </div>
        </div>
    )
}