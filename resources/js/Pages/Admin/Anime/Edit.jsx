import Authenticated from "@/Layouts/Authenticated/index";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from '@/Components/InputError';
import Checkbox from "@/Components/Checkbox";
import { Head, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { Inertia } from "@inertiajs/inertia";

export default function Create({ auth, anime }) {
    const { data, setData, processing, errors } = useForm({
        ...anime
    });

    const onChange = (e) => {
        setData(
            e.target.name,
            e.target.type === "file"
                ? e.target.files[0]
                : e.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === anime.thumbnail) {
            delete data.thumbnail;
        }

        Inertia.post(route("admin.dashboard.anime.update", anime.id), {
            _method: "PUT",
            ...data
        });
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Admin Update New" />
            <h1 className="text-xl font-semibold">Update Anime {anime.name}</h1>
            <hr className="mb-6" />
            <form onSubmit={submit}>
                <InputLabel forInput="name" value="Name" />
                <TextInput
                    type="text"
                    name="name"
                    defaultValue={anime.name}
                    variant="primary-outline"
                    onChange={onChange}
                    placeholder="enter the name of the anime"
                />
                <InputError message={errors.name} className="mt-2" />
                <InputLabel forInput="genre" value="Genre" className="mt-6" />
                <TextInput
                    type="text"
                    name="genre"
                    defaultValue={anime.genre}
                    variant="primary-outline"
                    onChange={onChange}
                    placeholder="enter anime genre"
                />
                <InputError message={errors.genre} className="mt-2" />
                <InputLabel forInput="video_url" value="URL Anime" className="mt-6" />
                <TextInput
                    type="url"
                    name="video_url"
                    defaultValue={anime.video_url}
                    variant="primary-outline"
                    onChange={onChange}
                    placeholder="enter the video url of the anime"
                />
                <InputError message={errors.video_url} className="mt-2" />
                <InputLabel forInput="thumbnail" value="Thumbnail Anime" className="mt-6" />
                <img src={`/storage/${anime.thumbnail}`} alt="" className="w-40" />
                <TextInput
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    onChange={onChange}
                    placeholder="insert a picture from the anime"
                />
                <InputError message={errors.thumbnail} className="mt-2" />
                <InputLabel forInput="rating" value="Rating Anime" className="mt-6" />
                <TextInput
                    type="number"
                    name="rating"
                    variant="primary-outline"
                    onChange={onChange}
                    placeholder="Enter the rating of the anime"
                    defaultValue={anime.rating}
                />
                <InputError message={errors.rating} className="mt-2" />
                <div className="flex flex-row mt-4">
                    <InputLabel forInput="is_featured" value="Is Featured Anime" className="mr-3 " />
                    <Checkbox
                        name="is_featured"
                        onChange={(e) => setData('is_featured', e.target.checked)}
                        checked={anime.is_featured}
                    />
                </div>
                <PrimaryButton type="submit" variant="primary" disabled={processing} className="mt-6">
                    Save
                </PrimaryButton>
            </form>
        </Authenticated>
    );
}
