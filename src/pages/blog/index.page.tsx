import React from 'react';
import dynamic from 'next/dynamic';

import { BlogData, IBlog } from 'json';
import { StringHelper } from 'helper';
import { Grid, Container } from 'components';
import { AuthContentWrapper } from 'styles';

import BlogCard from './component/blogCard';

const Heading = dynamic(() => import('../../components/heading'));
const Layout = dynamic(() => import('../../layout'));

/**
 * @page {Blog} This page is used for showing blog.
 * @return {JSX.Element}
 */
const Blog = (): JSX.Element => (
  <AuthContentWrapper>
    <Container maxWidth="lg">
      <Heading title="Blogging" subTitle="Blog" />
      <Grid container spacing={3} rowSpacing={2} columnSpacing={2}>
        {BlogData.map((data: IBlog, index: number) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            key={StringHelper.generateUID(data.title, index)}
          >
            <BlogCard
              image={data.image}
              title={data.title}
              date={data.date}
              authorName={data.authorName}
              description={data.description}
              id={data.id}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  </AuthContentWrapper>
);

Blog.getLayout = (page: JSX.Element) => <Layout title="Blog">{page}</Layout>;

export default Blog;
