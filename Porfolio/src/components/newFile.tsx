/** @jsxImportSource astro */
<form action="" class="flex flex-col w-full xl:w-[1120px] mx-auto mt-16">
    <label for="nombre" class="my-2">Nombre Completo:</label>
    <input type="text" name="nombre" class="rounded p-2" />
    <label for="email" class="my-2">Email:</label>
    <input type="email" name="email" class="rounded p-2" />
    <label for="message" class="my-2">Mensaje:</label>
    <textarea
        name=""
        id="message"
        cols="30"
        rows="10"
        class="rounded max-h-[400px] min-h-[150px]"></textarea>
    <button
        type="submit"
        class="w-full xl:w-[1120px] mx-auto bg-gradient-to-r hover:from-indigo-600 hover:via-purple-500 hover:to-purple-600 from-indigo-900 via-purple-900 to-purple-900 rounded text-3xl text-white mt-5 p-3"
    >Enviar</button>
</form>;
