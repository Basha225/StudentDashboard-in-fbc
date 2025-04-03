import StaffData from "../../Data/Staff"

const Staff = () => {
    return (
        <>
            <h1>Staff Management</h1>
            <input type="search" id="std" placeholder="search by staff name"/>
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
                        {Object.values(StaffData).map((value , index) => {
                            return (
                                <tr key={value.id}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.subject}</td>
                                    <td><button style={{color: "white" , backgroundColor : "red"}}>Delete</button></td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </>
    )
}

export default Staff