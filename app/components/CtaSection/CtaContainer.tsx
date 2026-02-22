import CtaBox from "./CtaBox";

export default function CtaContainer() {
    return (
        <section className="mt-8 sm:mt-12 md:mt-20 flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <CtaBox title="Title One" subtitle="Supporting text about the call-to-action goes here." />
            <CtaBox title="Title Two" subtitle="Supporting text about the call-to-action goes here." />
        </section>
    )
}