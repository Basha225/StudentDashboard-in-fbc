import ClassData from "../../Data/Class"

const Class = () => {
    return (
        <>
            <h1>Class Management</h1>
            <input type="search" id="std" placeholder="search by cls name"/>
            <table border={1} cellSpacing={0} cellPadding={5}>
                <thead>
                    <tr>
                        {Object.keys(ClassData[0]) .map((cls , index)=>{
                            return <th key={cls}>{cls[0].toUpperCase() + cls.slice(1,)}</th>
                        })}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {Object.values(ClassData).map((value , index) => {
                            return (
                                <tr key={value.id}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td><button style={{color: "white" , backgroundColor : "red"}}>Delete</button></td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </>
    )
}

export default Class