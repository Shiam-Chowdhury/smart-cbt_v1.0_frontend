import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./list.scss"
import Datatable from "../../components/datatable/Datatable"

export const questionSetColumns = [
  // { field: "id", headerName: "ID", width: 70 },
  {
    field: "details",
    headerName: "Details",
    width: 230,
  },
  {
    field: "tag",
    headerName: "Tag",
    width: 230,
  },

  {
    field: "rank",
    headerName: "Rank",
    width: 100,
  },

  {
    field: "count",
    headerName: "Count",
    width: 160,
  },
];

//temporary data
export const questionSetRows = [
  {
    details: "asdasdasd",
    tag: "react",
    rank: "4A",
    count: 0,
  },
];

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable 
          title="Add New Question Set"
          columns={questionSetColumns}
          rows={questionSetRows}
        />
      </div>
    </div>
  )
}

export default List