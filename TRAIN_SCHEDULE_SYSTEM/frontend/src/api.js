import axios from "axios";

export const getAccessToken = async () => {
  try {
    const response = await axios.post("http://20.244.56.144/train/auth", {
      companyName: "Train Central",
      clientID: "b46128a0-fbde-4c16-a4b1-6ae6ad718e27",
      ownerName: "Ram",
      ownerEmail: "ram@abc.edu",
      rollno: "12220802720",
      clientSecret: "XoyolORPaуKBGAN",
    });
    return response.data.access_token;
  } catch (error) {
    throw new Error("Error getting access token:", error);
  }
};
