import {
  Card,
  CardBody,
  CardDescription,
  CardSubtitle,
  CardTitle,
  cn,
} from '@lyrics-challenge/ui';
import { Band } from '../types/bands';
import { ImageWithFallback } from './ImageWrapper';

export const BandsList = ({ bands }: { bands: Band[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {bands.map((band: Band) => (
        <Card key={band.id}>
          <ImageWithFallback
            src={band.image}
            alt={`Artwork ${band.id}`}
            loading="eager"
            className={cn('block w-full h-3/5 object-cover')}
          />
          <CardBody className="pb-4 pt-2">
            <CardTitle>{band.name}</CardTitle>
            <CardSubtitle>{band.album}</CardSubtitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardDescription>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
