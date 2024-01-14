import Authenticated from "@/Layouts/Authenticated/index";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";
import FeaturedAnime from "@/Components/FeaturedAnime";
import AnimeCard from "@/Components/AnimeCard";

export default function Dashboard() {
    const flcikityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    return (
        <>
            <Authenticated>
                <Head title="Dashboard">
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                    />
                </Head>
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">
                        New Anime
                    </div>
                    <Flickity className="gap-[30px]" options={flcikityOptions}>
                        {[1, 2, 3, 4].map((i) => (
                            <FeaturedAnime
                                key={i}
                                slug="Boruto Uzumaki"
                                name={`Boruto Uzumaki ${i}`}
                                genre="Petualangan, fantasi,Komedi"
                                thumbnail="https://i.pinimg.com/736x/22/3f/77/223f775de1ee3781c67ee0a4d6d26a13.jpg"
                                rating={i + 1}
                            />
                        ))}
                    </Flickity>
                </div>
                <div className="mt-[50px]">
                    <div className="font-semibold text-[22px] text-black mb-4">
                        All Anime
                    </div>
                    <Flickity className="gap-[30px]" options={flcikityOptions}>
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <AnimeCard
                                key={i}
                                slug="Boruto Uzumaki"
                                name={`Boruto Uzumaki ${i}`}
                                genre="Petualangan, fantasi,Komedi"
                                thumbnail="https://i.pinimg.com/736x/22/3f/77/223f775de1ee3781c67ee0a4d6d26a13.jpg"
                            />
                        ))}
                    </Flickity>
                </div>
            </Authenticated>
        </>
    );
}
