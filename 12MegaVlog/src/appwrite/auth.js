import conf from '../conf/conf.js';
import { Client, Account, ID } from 'appwrite';

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Example: 'https://fra.cloud.appwrite.io/v1'
      .setProject(conf.appwriteProjectId); // Example: 'YOUR_PROJECT_ID'

    this.account = new Account(this.client);
  }

  // Create new user and auto-login
  async createAccount({ email, password, name }) {
    try {
      await this.account.create(ID.unique(), email, password, name);
      return await this.login({ email, password });
    } catch (error) {
      console.error("❌ Appwrite service :: createAccount :: error", error);
      throw error;
    }
  }

  // Login user
  async login({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(email, password);
      return session;
    } catch (error) {
      console.error("❌ Appwrite service :: login :: error", error);
      throw error;
    }
  }

  // Get current logged-in user
  async getCurrentUser() {
    try {
      // Just call get(), Appwrite handles the session via cookies
      const user = await this.account.get();
      return user;
    } catch (error) {
      if (error.code === 401) {
        console.warn("⚠️ User not logged in or session expired.");
      } else {
        console.error("❌ Appwrite service :: getCurrentUser :: error", error);
      }
      return null;
    }
  }

  // Logout user
  async logout() {
    try {
      // Delete current session only
      await this.account.deleteSession('current');
      console.log("✅ User logged out successfully");
    } catch (error) {
      console.error("❌ Appwrite service :: logout :: error", error);
    }
  }
}

const authService = new AuthService();
export default authService;
