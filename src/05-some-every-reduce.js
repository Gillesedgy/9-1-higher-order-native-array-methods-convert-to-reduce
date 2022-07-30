/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require('../data/songs');
// Do not change the line above.

/***********************************************************************/

/**
 * allSongsAreOverTwoMinutes()
 * Returns `true` if every song is over two minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function allSongsAreOverTwoMinutes(exampleSongData) {
  const overTwo = exampleSongData.reduce((acc, song)=> {
    if(song.runtimeInSeconds > 120) acc = false

    if(song.runtimeInSeconds < 120) acc = true
    return acc
  })
  return overTwo
}
//!console.log(allSongsAreOverTwoMinutes(exampleSongData))

/***********************************************************************/

/**
 * anySongIsOverFourMinutes()
 * Returns `true` if any song is over four minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function anySongIsOverFourMinutes(exampleSongData) {
const overFour = exampleSongData.reduce((acc, song)=>{
  if(song.runtimeInSeconds > 240) acc = true

  if(song.runtimeInSeconds < 240) acc = false;
  return acc
})
return overFour
}
//!console.log(anySongIsOverFourMinutes(exampleSongData))
/***********************************************************************/

/**
 * anySongIsByPeanut()
 * Returns `true` if any song is by the artist "Peanut". Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean} boolean true if there is a song in the array by the artist "Peanut".
 * Otherwise returning false
 */
function anySongIsByPeanut(exampleSongData) {
  const byPeanut = exampleSongData.reduce((acc, song)=>{
    if(!song.artist === "Peanut") acc = false

    if(song.artist === "Peanut") acc = true
    return acc; 
  })
  return byPeanut
}
//!console.log(anySongIsByPeanut(exampleSongData))

module.exports = {
  allSongsAreOverTwoMinutes,
  anySongIsOverFourMinutes,
  anySongIsByPeanut
};
