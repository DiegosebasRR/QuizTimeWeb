// src/services/api.ts
import axios from "axios";

const baseUrl = "http://localhost:3002/";

export const fetchQuestionnaire = async () => {
  try {
    const response = await axios.get(`${baseUrl}/questionnaire/`);
    return response;
  } catch (error) {
    console.error("Error al obtener questionnaire:", error);
    return [];
  }
};
