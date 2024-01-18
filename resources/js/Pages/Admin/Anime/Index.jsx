import Authenticated from "@/Layouts/Authenticated/index";
import ButtonPrimary from "@/Components/PrimaryButton";
import FlashMessage from "@/Components/FlashMessage";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import { Link, Head, useForm } from "@inertiajs/react";

export default function Index({ auth, flashMessage, animes }) {
    const { delete: destroy, put } = useForm();
    return (
        <Authenticated auth={auth}>
            <Head title="Data List Anime" />
            <Link href={route("admin.dashboard.anime.create")}>
                <ButtonPrimary type="button" className="w-36 mb-6">
                    Make Anime
                </ButtonPrimary>
            </Link>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}

            <table className="table-fixed w-full text-center">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Genre</th>
                        <th>Rating</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {animes.map((anime) => (
                        <tr key={anime.id}>
                            <td>
                                <img
                                    src={`/storage/${anime.thumbnail}`}
                                    className="w-32 rounded-md"
                                />
                            </td>
                            <td>{anime.name}</td>
                            <td>{anime.genre}</td>
                            <td>{anime.rating.toFixed(1)}</td>
                            <td>
                                <Link
                                    href={route(
                                        "admin.dashboard.anime.edit",
                                        anime.id
                                    )}
                                >
                                    <SecondaryButton
                                        type="button"
                                        variant="secondary"
                                    >
                                        Edit
                                    </SecondaryButton>
                                </Link>
                            </td>
                            <td>
                                <div
                                    onClick={() => {
                                        anime.deleted_at
                                            ? put(
                                                route(
                                                    "admin.dashboard.anime.restore",
                                                    anime.id
                                                )
                                            )
                                            : destroy(
                                                route(
                                                    "admin.dashboard.anime.destroy",
                                                    anime.id
                                                )
                                            );
                                    }}
                                >
                                    <DangerButton
                                        type="button"
                                        variant="danger"
                                    >
                                        {anime.deleted_at
                                            ? "Restore"
                                            : "Delete"}
                                    </DangerButton>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Authenticated>
    );
}
