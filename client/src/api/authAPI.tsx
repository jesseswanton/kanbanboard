import { UserLogin } from "../interfaces/UserLogin";

// Call the API to login with user info
const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch(`/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    const data = await response.json();
    return data;
  // Error catch is a little odd, but Typescript/lint was giving me an issue
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Login error:", error.message);
    } else {
      console.error("Login error:", error);
    }
    throw error;
  }
};

export { login };