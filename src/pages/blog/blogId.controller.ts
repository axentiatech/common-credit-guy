import { useRouter } from 'next/router';
import { Theme, useTheme } from '@mui/material';

import { BlogDetail, IBlogDetail } from 'json';

interface IHeaderControllerResponse {
  getters: {
    blogFilterdDetail: IBlogDetail[];
    theme: Theme;
  };
}

/**
 * @controller {useBlogIdController}
 * @return {IHeaderControllerResponse}
 */
export const useBlogIdController = (): IHeaderControllerResponse => {
  const { query } = useRouter();
  const theme = useTheme();
  const { blogId } = query;

  const blogFilterdDetail = BlogDetail.filter(
    (data: IBlogDetail) => data.id === blogId,
  );

  return {
    getters: { blogFilterdDetail, theme },
  };
};

export default useBlogIdController;
