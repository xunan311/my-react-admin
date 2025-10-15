import { AuthProvider } from "react-admin";

const API_URL = "http://192.168.1.231:8000";

export const authProvider: AuthProvider = {
  // called when the user attempts to log in
  async login({ username, password }) {
    /*
    if (password !== "1234") {
      throw new Error("Invalid credentials, please try again");
    }
    localStorage.setItem("username", username);
    */

    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        username: username,
        password: password,
      }),
      credentials: "include", // Make sure cookies are sent with requests
    });

    if (!response.ok) {
      throw new Error("Invalid credentials");
    }
    return Promise.resolve();
  },

  // called when the API returns an error
  async checkError({ status }: { status: number }) {
    if (status === 401 || status === 403) {
      throw new Error("Session expired");
    }
    // other error code (404, 500, etc): no need to log out
  },

  // called when the user navigates to a new location, to check for authentication
  async checkAuth() {
    const response = await fetch(`${API_URL}/users/me`, {
      method: "GET",
      credentials: "include", // Make sure cookies are sent with requests
    });

    if (response.ok) {
      return Promise.resolve();
    } else {
      throw new Error("Not authenticated");
    }
  },

  // called when the user clicks on the logout button
  async logout() {
    const response = await fetch(`${API_URL}/logout`, {
      method: "POST",
      credentials: "include", // Make sure cookies are sent with requests
    });

    if (!response.ok) {
      throw new Error("Logout failed");
    }
    return Promise.resolve();
  },
};
