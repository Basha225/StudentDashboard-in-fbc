import StudentData from "../../Data/Student"

const Students = () => {
    return (
        <>
            <h1>Student Management</h1>
            <input type="search" id="std" placeholder="search by student name"/>
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
                        {Object.values(StudentData).map((value , index) => {
                            return (
                                <tr key={value.id}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.branch}</td>
                                    <td><button style={{color: "white" , backgroundColor : "red"}}>Delete</button></td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </>
    )
}

export default Students