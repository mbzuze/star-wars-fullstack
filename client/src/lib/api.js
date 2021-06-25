const FIREBASE_DOMAIN = 'https://react-prep-default-rtdb.firebaseio.com';

export async function getAllCharacters() {
  const response = await fetch(`${FIREBASE_DOMAIN}/characters.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch characters.');
  }

  const transformedCharacters = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    transformedCharacters.push(quoteObj);
  }

  return transformedCharacters;
}

export async function getSingleCharacter(userId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/characters/${userId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch character.');
  }

  const loadedCharacter = {
    id: userId,
    ...data,
  };

  return loadedCharacter;
}

export async function addCharacter(quoteData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/characters.json`, {
    method: 'POST',
    body: JSON.stringify(quoteData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create quote.');
  }

  return null;
}

export async function addComment(requestData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.userId}.json`, {
    method: 'POST',
    body: JSON.stringify(requestData.commentData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add comment.');
  }

  return { commentId: data.name };
}

export async function getAllComments(userId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${userId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get comments.');
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}
