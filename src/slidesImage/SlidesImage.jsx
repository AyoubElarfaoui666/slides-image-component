import { useEffect, useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { apiImage } from "./redux";

function SlidesImages(){
    const {data,loading,error,errorMessage} = useSelector((state) => state.api);
    const dispatch = useDispatch() ;
    const [ind,setInd] = useState(0) ;

    useEffect(() => {
        dispatch(apiImage()) ;
        
    },[dispatch]) ;
    
    return(
        <div className="w-[600px] h-[400px] relative mx-auto mt-10 flex justify-center items-center  ">
            {loading && <p>loading...</p>}
            {error && <p>{errorMessage}</p>}
            {data && data.length > 0 && (
                <img src={data[ind].download_url} className="absolute w-full h-full rounded-2xl" />
            )}
            <div className="absolute z-2 left-5 top-1/2 transform -translate-y-1/2 bg-gray-300 opacity-50 hover:opacity-100 cursor-pointer p-2.5  rounded-full ">
                <i onClick={() => setInd((prev) => (prev - 1 + data.length)%10)} className="fa-solid fa-arrow-left  text-4xl" ></i>
            </div>
            <div className="absolute z-2 right-5 top-1/2 transform -translate-y-1/2 bg-gray-300 opacity-50 hover:opacity-100 cursor-pointer p-2.5  rounded-full ">
                <i onClick={() => setInd((prev) => (prev + 1)%10)} className="fa-solid fa-arrow-right  text-4xl" ></i>
            </div>
            <div className="dots [&>i]:text-gray-300 [&>i]:opacity-70 absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                {
                    data.map((ele,index) => {
                        return(
                            <i  className={`fa-solid fa-circle ${index === ind ? "!text-white !opacity-100" : ""}`}></i>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SlidesImages ;