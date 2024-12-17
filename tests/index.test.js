import customAxios from "./customAxios";
const BACKEND_URL = "http://localhost:3000";


// Authentication tests
describe("Authentication", () => {
  test("User is able to sign up only once", async () => {
    const username = "jui-" + Date.now(); 
    const password = "123456";

    const response = await customAxios.post(`${BACKEND_URL}/api/v1/auth/signup`, {
      username,
      password,
      type: "admin",
    });

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();

    // Attempt to signup again with the same credentials
    const updatedResponse = await customAxios.post(`${BACKEND_URL}/api/v1/auth/signup`, {
      username,
      password,
      type: "admin",
    });

    expect(updatedResponse.status).toBe(409); // Use 409 for "Conflict"
  });

  test("Signup request fails if the username is empty", async () => {
    const password = "123456";

    const response = await customAxios.post(`${BACKEND_URL}/api/v1/auth/signup`, {
      username: "", // Explicitly empty username
      password,
    });

    expect(response.status).toBe(400); // Bad Request
    expect(response.data.message).toContain("Username is required");
  });

  test("Signin succeeds if the username and password are correct", async () => {
    const username = `jui-${Date.now()}`;
    const password = "123456";

    // Signup the user
    await customAxios.post(`${BACKEND_URL}/api/v1/auth/signup`, {
      username,
      password,
      type: "admin",
    });

    // Signin the user
    const response = await customAxios.post(`${BACKEND_URL}/api/v1/auth/signin`, {
      username,
      password,
    });

    expect(response.status).toBe(200);
    expect(response.data.token).toBeDefined();
  });

  test("Signin fails if the username and password are incorrect", async () => {
    const username = `jui-${Date.now()}`;
    const password = "123456";

    // Attempt to signin without signing up
    const response = await customAxios.post(`${BACKEND_URL}/api/v1/auth/signin`, {
      username: "WrongUsername",
      password: "WrongPassword",
    });

    expect(response.status).toBe(403);
    expect(response.data.message).toContain("Invalid credentials");
  });
});
