import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";




//usefrom...
//kishi bhi field koi continously monitor karna hain , ish lliye  watch use karte hain ..

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({


        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });


    //navigation and user data ...
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    //agar from submit kar diya hain .

    //agar post ki value hain to update karo , agar nahi hain to ak new entry karo ...

//file upload bhi karna hain or delete bhi.

//submit ke andar ..


    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }



//dbpost..
            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            //navigate user ..
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }

        } else {

            //craetee a new from.
            const file = await appwriteService.uploadFile(data.image[0]);


            //edhar sab kuch hi %$ id hota hain ..

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };


    //craete a new method slug transfrom ..
    //user koi bhi ohh diya hain ohh ho jayega - per ..

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")//rezex
                .replace(/\s/g, "-");

        return "";
    }, []);


    //using use effects .
    //craete a subscription.
    //watch react -hooks from she mila hain ish liye , edhar ak call back rahega ..


    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    //from ...

    return (
        <form
  onSubmit={handleSubmit(submit)}
  className="flex flex-wrap bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-300"
>
  {/* Left Section */}
  <div className="w-full md:w-2/3 px-3">
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-inner border border-white/10 hover:border-indigo-400/40 transition-all duration-300">
      <Input
        label="Title :"
        placeholder="Title"
        className="mb-5"
        {...register("title", { required: true })}
      />


//input..

      <Input
        label="Slug :"
        placeholder="Slug"
        className="mb-5"
        {...register("slug", { required: true })}
        onInput={(e) => {
          setValue("slug", slugTransform(e.currentTarget.value), {
            shouldValidate: true,
          });
        }}
      />

//rte.
      <div className="rounded-xl border border-white/10 p-2 bg-black/20 mt-2">
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
    </div>
  </div>



  {/* Right Section */}
  <div className="w-full md:w-1/3 px-3 mt-8 md:mt-0">
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-inner border border-white/10 hover:border-indigo-400/40 transition-all duration-300">
      <Input
        label="Featured Image :"
        type="file"
        className="mb-5"
        accept="image/png, image/jpg, image/jpeg, image/gif"
        {...register("image", { required: !post })}
      />




      {post && (
        <div className="w-full mb-5">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-lg shadow-md border border-gray-600/50 hover:scale-[1.02] transition-all duration-300"
          />
        </div>
      )}

      <Select
        options={["active", "inactive"]}
        label="Status"
        className="mb-5"
        {...register("status", { required: true })}
      />

      //buttotn.

      <Button
        type="submit"
        bgColor={post ? "bg-green-500" : undefined}
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-indigo-500/40 transition-all duration-300"
      >
        {post ? "Update" : "Submit"}
      </Button>
    </div>
  </div>
</form>

    );
}