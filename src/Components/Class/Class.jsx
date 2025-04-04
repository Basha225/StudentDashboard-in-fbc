import Heading from "../../Common/Heading/Heading"
import Search from "../../Common/Search/Search"
import ClassData from "../../Data/Class"

const Class = () => {
    const searchProps = {
        type : "search",
        placeholder : "Search by class",
        id : "search"
    }
    return (
        <>
            <Heading name = {"Class"} />
            <Search searchProps ={searchProps} />
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
                        {
                        ClassData.length > 0 &&  ClassData.map((value , index) => (
                                <tr key={value.id}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td><button style={{color: "white" , backgroundColor : "red"}}>Delete</button></td>
                                </tr>
                        ))}
                </tbody>
            </table>
        </>
    )
}

export default Class