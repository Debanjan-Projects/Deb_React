const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}
 


export default conf


//edhar hum log bohot share key vaalue pairs ko export karenge , kiu ki , pura project meinhar jaga jha jha kar hum log odd env file ko import nahi kara sakte hain ,isjh mein bohott shar eproblem ahh sakte hain , ..

//env value sara ke sara string mein hoga chaiye .

