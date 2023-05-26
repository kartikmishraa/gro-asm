import axios from "axios";

const API_URL = "https://internship-service.onrender.com/videos?page=";

export const fetchVideo = async (page) => {
  try {
    const PAGE_URL = API_URL + page;
    const res = await axios.get(PAGE_URL);
    return res.data;
  } catch (err) {
    console.error("Error fetching video: ", err);
    throw new Error("Failed to fetch video data");
  }
};
