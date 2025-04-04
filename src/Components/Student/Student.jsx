import Heading from "../../Common/Heading/Heading"
import Search from "../../Common/Search/Search"
import StudentData from "../../Data/Student"

const Students = () => {
    const searchProps = {
        type : "search",
        placeholder : "Search by name or email",
        id : "search"
    }
    return (
        <>
            <Heading name = {"Students"} />
            <Search searchProps ={searchProps} />
            <table border={1} cellSpacing={0} cellPadding={5}>
                <thead>
                    <tr>
                        {Object.keys(StudentData[0]) .map((student , index)=>{
                            return <th key={student}>{student[0].toUpperCase() + student.slice(1,)}</th>
                        })}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {
                         StudentData.length >0  && StudentData.map((value , index) => (
                            
                                <tr key={value.id}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.branch}</td>
                                    <td><button style={{color: "white" , backgroundColor : "red"}}>Delete</button></td>
                                </tr>
                            
                        ))}
                </tbody>
            </table>
        </>
    )
}

export default Students