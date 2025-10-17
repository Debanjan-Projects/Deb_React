import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


//client mil geya , account mil geya , id mil geya.

//create a class.

//create two property.
export class AuthService {
    client = new Client();
    account;


    //craeting a constructor.

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

            //account ke value add .
        this.account = new Account(this.client);
        //ak calss ke andar kam kar diya hain , jav bhi ush ka ak new  obj mile .

    }


    //eshar ak method banaya jayega , or ushko jitna bhi appwirte ke services hain unko call karenge  , actually ak wrapper banaya jayega .
    

    // Create new account
    async createAccount({ email, password, name }) {
        //agar fail hoya to.

        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);


            if (userAccount) {
                // Automatically login after signup
                //call another method .

                //agar useraccount exist karta hain ,ushko bhi login karado .


                return this.login({ email, password });
            } 
            
            else {
                return userAccount;
            }

        } catch (error) {
            throw error;
        }
    }





    // Login
    async login({ email, password }) {
        try {
            // FIXED ✅ new method name
            return await this.account.createEmailPasswordSession(email, password);
        } 
        
        catch (error) {
            throw error;
        }
    }



    //login ho eya nahi ho.

    // Get current logged-in user
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }




    // Logout
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}




const authService = new AuthService();
//new kwyword use kara hain , its means ap sare constructor ko call kar neke kam kiya hajn ,used bhi karneka .

export default authService;
