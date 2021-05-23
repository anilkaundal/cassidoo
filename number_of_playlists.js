/*
Your music library contains N songs and your friend wants to listen
to L songs during your road trip (repeats are allowed). Make a playlist
so that every song is played at least once, and a song can only be played
again only if K other songs have been played. Return the number of possible
playlists.

Examples:
$ numPlaylists(N = 3, L = 3, K = 1)
$ 6 // [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]
*/

const numPlaylists = (N, L, K) => {
  let playLists = new Array(L + 1)
    .fill("")
    .map((_) => new Array(N + 1).fill(0));
  playLists[0][0] = 1;
  for (let i = 1; i <= L; i++) {
    for (let j = 1; j <= N; j++) {
      playLists[i][j] += playLists[i - 1][j - 1] * (N - j + 1);
      playLists[i][j] += playLists[i - 1][j] * Math.max(j - K, 0);
    }
  }
  return playLists[L][N];
};

console.log(numPlaylists(3, 3, 1));
