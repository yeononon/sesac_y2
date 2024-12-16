// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=c890f516
async function getMovieData() {
    let word = 'marvel';
    const h3 = document.querySelector;
    h3.innertext;

    const res = await fetch(
        `http://www.omdbapi.com/?apikey=c890f516&s=${word}`
    );
    const getMovieData = await res.json();
    console.log('movieData >>> ', movieData);

    // 불러온 데이터를 이용해 html 요소를 만들기
    for (let movie of movieData.Search) {
        const ul = document.querySelector('ul');
        const div = document.createElement('div');
        const img = document.createElement('img');
        const p = document.createElement('p');

        img.src = movie.Poster;
        img.alt = movie.imdbID;
        p.innerText = movie.Title;

        div.append(img, p);
        ul.append(div);
    }
}
