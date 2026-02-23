import Image from 'next/image';
import arrowRight from '@/app/assets/icon/Arrow Right.svg';
import CtaContainer from "@/app/components/CtaSection/CtaContainer";
import Link from "next/link";

export default function Home() {
    return (
        <main className="max-w-7xl mx-auto">
            <header className="flex flex-col items-center gap-4 md:gap-6 text-center">
                <div className="flex flex-col items-center gap-2">
                    <span
                        className="tracking-[0.30px] leading-[16px] font-medium text-sm md:text-[15px] text-[#39494D]">Label</span>
                    <h1 className="text-[36px] md:text-[40px] leading-[40px] md:leading-[48px] font-semibold tracking-[-0.72px] md:tracking-[-1.2px] text-[#212121]">
                        Mandatory title about the <span
                        className="font-alpina font-light tracking-[-1.24px] md:tracking-[1.26px]">call-to-action</span> here
                    </h1>
                </div>
                <p className="text-[17px] md:text-[19px] font-medium leading-[24px] opacity-80 max-w-prose text-[#1E2526]">
                    Optional body copy goes here.
                </p>
                <Link href='#'
                      className="flex items-center justify-center gap-1 font-medium hover:opacity-70 transition-opacity text-[#BF564D] cursor-pointer">
                    Optional Button
                    <Image src={arrowRight} alt="arrow right" width={24} height={24} aria-hidden="true"/>
                </Link>
            </header>

            <CtaContainer/>
        </main>
    );
}