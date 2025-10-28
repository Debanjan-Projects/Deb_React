import conf from '../conf/conf.js';
import { Client, Account, ID } from 'appwrite';

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  // Create new user and auto-login
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      
      // Auto-login after account creation
      if (userAccount) {
        return await this.login({ email, password });
      }
      
      return userAccount;
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

  // Get current logged-in user (Improved)
  async getCurrentUser() {
    try {
      // This will only work if there's an active session
      const user = await this.account.get();
      return user;
    } catch (error) {
      // Handle different types of authentication errors
      if (error.code === 401) {
        console.log("ℹ️ No active user session found");
        return null;
      } else if (error.type === 'general_unauthorized_scope') {
        console.log("ℹ️ User session expired or invalid");
        return null;
      } else {
        console.error("❌ Appwrite service :: getCurrentUser :: error", error);
        return null;
      }
    }
  }

  // Logout user (Improved)
  async logout() {
    try {
      await this.account.deleteSession('current');
      console.log("✅ User logged out successfully");
      return true;
    } catch (error) {
      console.error("❌ Appwrite service :: logout :: error", error);
      return false;
    }
  }

  // Additional helper method to check if user is logged in
  async isLoggedIn() {
    const user = await this.getCurrentUser();
    return user !== null;
  }
}

const authService = new AuthService();
export default authService;