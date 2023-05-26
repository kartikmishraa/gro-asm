import axios from "axios";

const API_URL = "https://internship-service.onrender.com/videos?page=2";

export const fetchVideo = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    console.error("Error fetching video: ", err);
    throw new Error("Failed to fetch video data");
  }
};
