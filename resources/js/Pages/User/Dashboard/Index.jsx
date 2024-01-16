import Authenticated from "@/Layouts/Authenticated/index";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";
import FeaturedAnime from "@/Components/FeaturedAnime";
import AnimeCard from "@/Components/AnimeCard";

export default function Dashboard({ auth, featuredAnime, anime }) {
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
            <Authenticated auth={auth}>
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
                        {featuredAnime.map((featuredAnime) => (
                            <FeaturedAnime
                                key={featuredAnime.id}
                                slug={featuredAnime.slug}
                                name={featuredAnime.name}
                                genre={featuredAnime.genre}
                                thumbnail={featuredAnime.thumbnail}
                                rating={featuredAnime.rating}
                            />
                        ))}
                    </Flickity>
                </div>
                <div className="mt-[50px]">
                    <div className="font-semibold text-[22px] text-black mb-4">
                        All Anime
                    </div>
                    <Flickity className="gap-[30px]" options={flcikityOptions}>
                        {anime.map((anime) => (
                            <AnimeCard
                                key={anime.id}
                                slug={anime.slug}
                                name={anime.name}
                                genre={anime.genre}
                                thumbnail={anime.thumbnail}
                            />
                        ))}
                    </Flickity>
                </div>
            </Authenticated>
        </>
    );
}
