import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api"
});

export async function getTrainSchedule(trainNumber) {

    const response = await API.get(`/train/${trainNumber}`);

    return response.data;

}