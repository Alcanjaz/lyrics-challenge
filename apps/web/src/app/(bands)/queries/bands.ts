import bands from '../../../../mock_data/bands.json';
import { Band } from '../types/bands';

export function getBands(): Band[] {
  return bands.map((band) => {
    const n = parseInt(band.id, 10);
    // Matches existing files like im001.png, im005.png, im0010.png, im0012.png
    const filename = `im00${n}.png`;

    return {
      id: band.id,
      name: band.band_name,
      album: band.album,
      genre: band.genre,
      image: `/sources/${filename}`,
    } as Band;
  });
}
