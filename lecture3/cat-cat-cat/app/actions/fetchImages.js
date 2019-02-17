const fetchImages = async query => {
  try {
    const res = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${query.limit || 10}&page=${query.page || 1}&category_ids=${
        query.category_id
      }`,
      {
        method: 'GET', // default is GET
        headers: {
          'x-api-key': process.env.cat_api_key,
        },
      },
    );

    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export default fetchImages;
