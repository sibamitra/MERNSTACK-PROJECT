import mongoose from "mongoose"
const Connection=async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.wwiwhss.mongodb.net/`
        try {
        
        await mongoose.connect(URL,{useNewUrlParser:true})
        console.log('Database Connected Successfully')
    } catch (error) {
        console.log("Error while connecting to db",error)
    }
}
export default Connection