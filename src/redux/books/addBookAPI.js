import BASE_URL from './URL';

const postBookData = async (input) => {
  const book = input;
  const response = await fetch(BASE_URL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
  const result = response.status;
  return result;
};

export default postBookData;
