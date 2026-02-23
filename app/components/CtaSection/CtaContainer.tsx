import CtaBox from "./CtaBox";
import hugImage from '../../assets/hug.jpg';

export default function CtaContainer() {

    // In production these would come from the CMS
    const mockBoxes = [
        {id: 1, title: "Title One", text: "Supporting text about the call-to-action goes here."},
        {id: 2, title: "Title Two", text: "Supporting text about the call-to-action goes here."}
    ];

    return (
        <section className="mt-8 sm:mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 justify-center">
            {mockBoxes.map((box) => (
                <CtaBox
                    key={box.id}
                    title={box.title}
                    subtitle={box.text}
                    bgImage={hugImage.src}
                />
            ))}
        </section>
    )
}