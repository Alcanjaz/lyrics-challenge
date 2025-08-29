import * as React from 'react';
import { cn } from './utils';

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({ className = '', ...props }) => {
  return (
    <div
      className={cn(
        'ly-ds-bg-cards rounded-[10px] overflow-hidden text-left',
        className
      )}
      {...props}
    />
  );
};

export type CardImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const CardImage: React.FC<CardImageProps> = ({ className = '', ...props }) => {
  return (
    <img className={cn('block w-full h-3/5 object-cover', className)} {...props} />
  );
};

export type CardBodyProps = React.HTMLAttributes<HTMLDivElement>;

export const CardBody: React.FC<CardBodyProps> = ({ className = '', ...props }) => {
  return <div className={cn('p-6', className)} {...props} />;
};

export type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export const CardTitle: React.FC<CardTitleProps> = ({ className = '', ...props }) => {
  return (
    <h3 className={cn('font-bold ly-ds-text-title text-base', className)} {...props} />
  );
};

export type CardSubtitleProps = React.HTMLAttributes<HTMLParagraphElement>;

export const CardSubtitle: React.FC<CardSubtitleProps> = ({ className = '', ...props }) => {
  return (
    <p className={cn('text-sm ly-ds-text-button', className)} {...props} />
  );
};

export type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export const CardDescription: React.FC<CardDescriptionProps> = ({ className = '', ...props }) => {
  return (
    <p className={cn('text-sm ly-ds-text-description', className)} {...props} />
  );
};

export default Card;


