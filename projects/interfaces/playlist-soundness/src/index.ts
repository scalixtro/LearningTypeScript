// Write your unrollPlaylist function and types here! ✨
// You'll need to export the function so the tests can run it.

export interface Song {
	artist: string | string[];
	length: number;
	name: string;
	type: "song";
}

export interface Album {
	songs: Song[];
	type: "album";
}

export interface Playlist {
	resolve: () => Song[];
	type: "playlist";
}

export interface PlaylistUnrolled {
	artists: {
		[artist: string]: string[];
	};
	songs: string[];
	time: number;
}

// Esta funcion solo añade el indice de artista cuando no se encuentra inicializado
export function addArtist(playlist: PlaylistUnrolled, artist: string) {
	if (artist in playlist.artists) return;
	else playlist.artists[artist] = [];
}

export function unrollPlaylist(
	items: (Song | Album | Playlist)[]
): PlaylistUnrolled {
	let listSongs: Song[] = [];
	let unrolledPlaylist: PlaylistUnrolled = {
		artists: {},
		songs: [],
		time: 0,
	};

	// Recorrer cada elemento de items. Hay que verificar el tipo de dato de cada elemento
	// Dependiendo del tipo de dato, se debe extraer una lista con artistas, canciones
	// El objeto ptincipal es Album, aqui tenemos los nombres de canciones y artistas
	// además de la duración, por lo que podemos primero crear una lista con todos los
	// Songs y luego ir armando el objeto con los artistas y titulos de las canciones
	for (let item of items) {
		// Si es un song agregamos a la lista
		if (item.type === "song") listSongs.push(item);
		else if (item.type === "album") listSongs = listSongs.concat(item.songs);
		else listSongs = listSongs.concat(item.resolve());
	}

	for (let song of listSongs) {
		// Cada Song tiene la estructura artist, length y name.
		// Entonces, podemos verficar si Song.artist es string o lista.
		//      si es string entonces hacemos validacion de artista
		//      si es array entonces por cada artista hacemos validación de artista
		// VALIDACION DE ARTISTA:
		//      si el artista no se encuentra en nuestro objeto, agregarlo e inicializarlo
		//      si el artista se encuentra en nuestro objeto, entonces no hacemos nada.
		// Despés de hacer la validación del artista, vamos a agregar la canción a la lista, inde
		// pendientemente de si está repetida o no.
		// - Agregamos el nombre de la canción a songs[]
		// Sumamos la duración a time

		// Para evitar repetir código, podemos convertir las strings a string[] y así solo hacemos
		// una misma acción para ambos casos

		let artistsS =
			typeof song.artist === "string" ? [song.artist] : song.artist;

		for (let artist of artistsS) {
			addArtist(unrolledPlaylist, artist);
			if (!unrolledPlaylist.artists[artist].includes(song.name))
				unrolledPlaylist.artists[artist].push(song.name);
		}

		if (!unrolledPlaylist.songs.includes(song.name))
			unrolledPlaylist.songs.push(song.name);

		unrolledPlaylist.time += song.length;
	}

	return unrolledPlaylist;
}
