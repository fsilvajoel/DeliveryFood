import React from 'react';
import Typography from '@material-ui/core/Typography';

const BannerIntro = () => {
  return (
    <>
      <Typography
        align="center"
        color="textPrimary"
        component="h1"
        gutterBottom
        variant="h3"
      >
        Sushibar Morita
          </Typography>
      <Typography
        align="center"
        color="textSecondary"
        paragraph
        variant="h5"
      >
        Comece selecionando a categoria que você deseja no topo!
      </Typography>
    </>
  )
}
export default BannerIntro;