import axios from "axios";
import Image from "next/image";


async function getUserDetails() {
  await new Promise((r)=> setTimeout(r, 5000))

    const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
    return response.data;
  }
  
export default async function Home() {
const userDetails = await getUserDetails()
  
  return (
    <div className="flex flex-col justify-center h-screen">
    <div className="flex justify-center">
        <div className="border p-8 rounded">
            <div>
                Name: {userDetails?.name}
            </div>
            
            <div>{userDetails?.email}</div>
            <div>{userDetails.address.city}</div>
        </div>
        
    </div>
</div>

  );
}
