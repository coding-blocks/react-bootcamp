const fetchCategories = async () => {
  try {
    const res = await fetch('https://api.thecatapi.com/v1/categories', {
      method: 'GET', // default is GET
      headers: {
        'x-api-key': process.env.cat_api_key,
      },
    });

    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export default fetchCategories;
