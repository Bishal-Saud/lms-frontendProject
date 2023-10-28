import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { getAllCourses } from '../Redux/slices/courseSlice';
import HomeLayout from '../Layouts/HomeLayout'
import CourseCard from '../Components/CourseCard';
function CourseList(){
    const dispatch = useDispatch()
const{courseData} = useSelector((state)=> state.course);

 async function loadCourse(){
await dispatch(getAllCourses())
 }

 useEffect(()=>{
loadCourse()
 },[])

return(
<HomeLayout>
    <div className="min-h-[90vh] pt-12 pl-20 flex flex-col gap-20 text-white">
<h1>Explore Courses made by 
    <span className='font-bold text-yellow-500 '>Industry Expert</span>
</h1>
<div className="mb-10 flex flex-wrap gap-14">
{courseData?.map((element)=>{
  
    return <CourseCard key={element._id} data={element}/>
})}
</div>
    </div>
</HomeLayout>
)

}

export default CourseList;