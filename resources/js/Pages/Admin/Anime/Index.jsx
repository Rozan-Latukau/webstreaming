import Authenticated from "@/Layouts/Authenticated/index";
import ButtonPrimary from "@/Components/PrimaryButton";
import FlashMessage from "@/Components/flashMessage";
import { Link } from "@inertiajs/react";

export default function Index({ auth, flashMessage }) {
    return (
        <Authenticated auth={auth}>
            <Link href={route("admin.dashboard.anime.create")}>
                <ButtonPrimary type="button" className="w-36 mb-6">
                    Make Anime
                </ButtonPrimary>
            </Link>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}
        </Authenticated>
    );
}
