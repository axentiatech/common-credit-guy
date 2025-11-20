import { useState } from 'react';

interface IHeaderControllerResponse {
  getters: {
    anchorEl: HTMLElement | null;
    mobileOpen: boolean;
  };
  handlers: {
    handleClick: (event: React.MouseEvent<HTMLElement>) => void;
    handleClose: () => void;
    handleDrawerToggle: () => void;
  };
}

/**
 * @controller {useHeaderController}
 * @return {IHeaderControllerResponse}
 */
export const useHeaderController = (): IHeaderControllerResponse => {
  // React State
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  /**
   * @functions {handleClick} - Open the menu Box
   * @param {React.MouseEvent<HTMLElement>} event
   */
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * @functions {handleDrawerToggle} - Open the drawer in mobile view
   */
  const handleDrawerToggle = () => {
    setMobileOpen((prevState: boolean) => !prevState);
  };

  /**
   * @functions {handleClose} - Close the menu Box
   */
  const handleClose = () => {
    setAnchorEl(null);
  };

  return {
    getters: { mobileOpen, anchorEl },
    handlers: { handleClick, handleClose, handleDrawerToggle },
  };
};

