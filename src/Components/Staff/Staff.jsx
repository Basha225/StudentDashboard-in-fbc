import Heading from "../../Common/Heading/Heading"
import Search from "../../Common/Search/Search"
import StaffData from "../../Data/Staff"

const Staff = () => {
    const searchProps = {
        type : "search",
        placeholder : "Search by staff id or name",
        id : "search"
    }
    return (
        <>
            <Heading name = {"Staff"} />
            <Search searchProps ={searchProps} />
            <table border={1} cellSpacing={0} cellPadding={5}>
                <thead>
                    <tr>
                        {Object.keys(StaffData[0]) .map((staff , index)=>{
                            return <th key={staff}>{staff[0].toUpperCase() + staff.slice(1,)}</th>
                        })}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {
                        StaffData.length >0  && StaffData.map((value , index) => (
                            
                                <tr key={value.id}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.subject}</td>
                                    <td><button style={{color: "white" , backgroundColor : "red"}}>Delete</button></td>
                                </tr>
                            
                        ))}
                </tbody>
            </table>
        </>
    )
}

export default Staff