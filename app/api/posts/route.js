import connectMongo from "../../../utils/connectMongo";
import postModel from "../../../models/postModel";
import { error } from "console";
export async function GET(req){
    const query = req.nextUrl.searchParams.get("q");
    console.log(query)

    try{
        await connectMongo();
        let postData;
        if(query){
            postData=await postModel.find({
                $or:[
                    {title : new RegExp(query,'i')},
                    {description: new RegExp(query,'i')}
                ]
            })
        }else{
         postData= await postModel.find({});
        }
        return Response.json(postData)
    }
    catch(err){
        return Response.json({message:error.message})
    }

  
}