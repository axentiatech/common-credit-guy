import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { AuthContentWrapper } from 'styles';
import { IBlogDetail } from 'json';
import { StringHelper } from 'helper';
import { Box, Container, Typography } from 'components';

import useBlogIdController from './blogId.controller';

const Heading = dynamic(() => import('../../components/heading'));
const Layout = dynamic(() => import('../../layout'));

/**
 * @component {BlogDetails} - This is for Blog Details.
 * @return {JSX.Element}
 */
const BlogDetails = (): JSX.Element => {
  const { getters } = useBlogIdController();
  const { blogFilterdDetail, theme } = getters;

  return (
    <AuthContentWrapper>
      <Container maxWidth="lg">
        <Heading title="Blogging" subTitle="Blog" />
        {blogFilterdDetail.map((data: IBlogDetail, index: number) => (
          <Box key={StringHelper.generateUID(data.title, index)} sx={{ mt: 4 }}>
            <Typography variant="h5" color="primary">
              {data.title}
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <Typography color="primary">{data.authorName} | </Typography>
              <Typography>{data.date}</Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Image
                src={data.image}
                quality={100}
                width="1000"
                height="500"
                alt="blog-image"
              />
            </Box>

            <Typography sx={{ mt: 2 }}>{data.description_1}</Typography>
            <Typography sx={{ mt: 2 }}>{data.description_2}</Typography>
            <Typography sx={{ mt: 2 }} variant="h6">
              {data.description_3}
            </Typography>
            <Typography sx={{ mt: 2 }}>{data.description_4}</Typography>
            <Typography sx={{ mt: 2 }}>{data.description_5}</Typography>
            <Box>
              <Typography
                sx={{
                  m: 2,
                  backgroundColor: theme.palette.primary.light,
                }}
              >
                {data.description_6}
              </Typography>
            </Box>
          </Box>
        ))}
      </Container>
    </AuthContentWrapper>
  );
};

BlogDetails.getLayout = (page: JSX.Element) => (
  <Layout title="Blog">{page}</Layout>
);

export default BlogDetails;
