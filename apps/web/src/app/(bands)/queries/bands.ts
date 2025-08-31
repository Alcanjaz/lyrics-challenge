import fs from 'fs';
import path from 'path';
import bands from '../../../../mock_data/bands.json';
import { Band } from '../types/bands';

export async function getBands(): Promise<Band[]> {
  // Uncomment this to test loading skeleton 🐹
  //await new Promise((resolve) => setTimeout(resolve, 4000));
  return bands.map((band) => {
    const n = parseInt(band.id, 10);
    let filename = `default.png`;

    const imagePath = path.join(process.cwd(), 'sources', `im00${n}.png`);
    const detailsPath = path.join(
      process.cwd(),
      'mock_data',
      `${band.id}.json`
    );

    let description = 'No additional information available.';

    if (fs.existsSync(imagePath)) {
      filename = `im00${n}.png`;
    }

    if (fs.existsSync(detailsPath)) {
      try {
        const content = fs.readFileSync(detailsPath, 'utf-8');
        const data = JSON.parse(content);
        if (
          typeof data.description === 'string' &&
          data.description.length > 0
        ) {
          description = data.description;
        }
      } catch {
        // keep default
      }
    }

    return {
      id: band.id,
      name: band.band_name,
      album: band.album,
      genre: band.genre,
      image: `/sources/${filename}`,
      description,
    } as Band;
  });
}
