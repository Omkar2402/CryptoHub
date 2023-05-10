import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, ThemeProvider, Typography, createTheme, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

function CryptoNews() {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios
      .get('https://newsapi.org/v2/everything', {
        params: {
          q: 'cryptocurrency',
          apiKey: 'a832157f3d98420988af0736acd706d0',
          page: currentPage,
          pageSize: 12,
        },
      })
      .then(response => {
        setNews(response.data.articles);
        setTotalPages(Math.ceil(response.data.totalResults / 12));
      })
      .catch(error => {
        console.error(error);
      });
  }, [currentPage]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    title: {
      flex: 1,
      color: "gold",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
    },
    pagination: {
      "& .MuiPaginationItem-root": {
          color: "gold",
      },
  },
  });

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },

  })

  const cardStyle = {
    height: '100%',
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
  };

  const classes = useStyles();

  return (
    <center>
      <ThemeProvider theme={darkTheme}>
        <div>
          <Typography variant="h2" align="center" gutterBottom className={classes.title}>
            Cryptocurrency News
          </Typography>
          <Grid container spacing={2}>
            {news.map((article, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} style={containerStyle}>
                <Card style={cardStyle}>
                  <CardMedia component="img" alt={article.title} height="200" image={article.urlToImage} />
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {article.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {article.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Pagination
            style={{
              padding: 20,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            classes={{ ul: classes.pagination }}
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="large"
            showFirstButton
            showLastButton
          />
        </div>
      </ThemeProvider>
    </center>

  );
}

export default CryptoNews;