function Card() {
    return (
        <>
            <div class="flex justify-center items-center h-screen w-full bg-gradient-to-r from-blue-500 to-orange-600">
                <div class="w-1/2 bg-white rounded-lg shadow-2xl p-8 m-4">
                    <h1 class="block w-full tect-center tect-gray-800 text-2xl font-bold  mb-6">
                        Kartu Tanda Penduduk
                    </h1>
                    <form action="/" method="post">
                        <div class="flex flex-col mt-8 mb-4">
                        <img class="rounded w-40 h-50" src="April.jpg"/>
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="Nama"
                            >
                                Nama
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="nama"
                                id="nama"
                                placeholder="Aprilia Angelika Dalapan"
                            />
                        </div>
                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="Alamat"
                            >
                                Alamat
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="Alamat"
                                id="Alamat"
                                placeholder="Kampung Talengen"
                            />
                        </div>
                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="Agama"
                            >
                                Agama
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="Agama"
                                id="Agama"
                                placeholder="Kristen"
                            />
                        </div>
                        </form>
                        <a
                        class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gry-900"
                        href="/"
                    >
                    </a>
                </div>
            </div>
        </>
    );
}

export default Card;