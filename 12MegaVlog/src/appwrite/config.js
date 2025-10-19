import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

//craete a services .
export class Service{

    //object hi nikal ke deh diya.
    client = new Client();
    databases;
    bucket;


    //crate a  constructor.
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    //crate a method .


    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,


                //jho bhi slug value pass hoga , ohi main document id man raha huin.

                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }


//update document .

//database ka jho update document konsha wala id lagega ohh agar separate kkarke lehh lehh to , ohh achha hota hain .

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }


    //delete post .

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )
            return true
            //delete ho chuka hain .
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
            //agar error aya to.
        }
    }

    //get post .
    //ak post kaishe lehh sakte hain .

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }


    //get all post .
    //list document pura ke pura dena padta hain .
    //sare document nahi lenge eha per kiuki, jishka bhi status active nahi hain ohh bhi chala ayega ,.

    //esh liye query sikhna padta hain .


    //agar indexses hain tab hi ap ishme query laga sakti hain , agar nahi ha to nahi laga sakte hoin.

    //enam save code //agar data mein used kara hota tho/

    //query pagination bhi laga sakte hain .

    //read from documenttation.

        //queries is an array of filtering conditions for fetching documents.

        // [Query.equal("status", "active")] sets the default filter.

        // It ensures you only get active posts from the collection unless you specify otherwise.

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }


    // file upload service

    //jho atual file hain ohi dena hain .
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    //delete file .

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }


    //get file preview
    //ehh prromis retrun nahi karta hain  , ehh bohot fast hota hain ,await edhar nahi bhi used kar ssakte hain ..

    
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}




//crate a obj.
const service = new Service()
//export the service
export default service

//for all kind of daatabase operation just used aappwrite database documentation.