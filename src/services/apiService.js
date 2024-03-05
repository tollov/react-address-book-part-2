import { mulberry32 } from "./utils"

const CONTACTS_BASE_URL = "https://boolean-api-server.fly.dev/api-docs/"
const MALE_PORTRAITS_BASE_URL = "https://randomuser.me/api/portraits/men/"
const FEMALE_PORTRAITS_BASE_URL = "https://randomuser.me/api/portraits/women/"

export const getAllContacts = async (username) => {
    return await fetchFromURL(CONTACTS_BASE_URL + username + "/contact")
}

export const getContact = async (username, id) => {
    return await fetchFromURL(CONTACTS_BASE_URL + username + "/contact/" + id)
}

export const postContact = async (username, newContact) => {
    return await postToURL(CONTACTS_BASE_URL + username + "/contact", newContact)
}

export const putContact = async (username, id, updatedContact) => {
  return await putToURL(CONTACTS_BASE_URL + username + "/contact/" + id, updatedContact)
}

export const deleteContact = async (username, id) => {
  return await deleteFromURL(CONTACTS_BASE_URL + username + "/contact/" + id)
}

export const getRandomPortraitURL = (seed, gender) => {
  const random = mulberry32(seed)
  const randIdx = Math.floor(random() * 100)
  let baseURL;
  switch(true) {
    case (gender.toLowerCase().includes('woman')):
    case (gender.toLowerCase().includes('female')):
      baseURL = FEMALE_PORTRAITS_BASE_URL;
      break;
    case (gender.toLowerCase().includes('man')):
    case (gender.toLowerCase().includes('male')):
      baseURL = MALE_PORTRAITS_BASE_URL;
      break;
    default:
      random() < 0.5 ? baseURL = FEMALE_PORTRAITS_BASE_URL : baseURL = MALE_PORTRAITS_BASE_URL;
  }
  return baseURL + randIdx + ".jpg"
}


export const fetchFromURL = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error("Error fetching data: " + error);
  }
}

export const postToURL = async (url, body) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching data: " + error);
  }
}

export const putToURL = async (url, body) => {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching data: " + error);
  }
}


export const deleteFromURL = async (url) => {
  try {
    const response = await fetch(url, {method: 'DELETE'});
    return await response.json();
  } catch (error) {
    console.error("Error fetching data: " + error);
  }
}