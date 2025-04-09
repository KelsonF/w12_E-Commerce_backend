import axios, { AxiosInstance } from "axios";

class AxiosService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:3000",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public getInstance(): AxiosInstance {
    return this.instance;
  }
}

const axiosService = new AxiosService();
export { axiosService };
