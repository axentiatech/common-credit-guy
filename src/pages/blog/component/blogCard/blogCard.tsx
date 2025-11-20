import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from 'components';
import { RoutePathEnum } from 'enum';

import { CardButton } from './blogCard.style';

interface IProps
  extends Readonly<{
    image: string;
    title: string;
    date: string;
    authorName: string;
    description: string;
    id: string;
  }> {}

/**
 * @component {BlogCard } - This component is using for blog card.
 * @param {IProps} props
 * @return {JSX.Element}
 */
export const BlogCard = (props: IProps): JSX.Element => {
  const { image, title, date, authorName, description, id } = props;

  return (
    <Card
      sx={{
        maxWidth: 400,
      }}
    >
      <CardActionArea>
        <Image
          src={image}
          quality={100}
          width="400"
          height="300"
          alt="blog-image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            color="primary"
            sx={{ height: '40px' }}
          >
            {title}
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Typography>{date}</Typography>
            <Typography sx={{ pl: 1, pr: 1 }}>or</Typography>
            <Typography color="primary">{authorName}</Typography>
          </Box>
          <Typography sx={{ mt: 2 }}>{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <CardButton>
          <Link
            href={{
              pathname: RoutePathEnum.BLOG_DETAIL,
              query: { blogId: id },
            }}
          >
            Read More
          </Link>
        </CardButton>
      </CardActions>
    </Card>
  );
};
