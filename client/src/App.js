// import logo from "./logo.svg";
// import React, { Component } from "react";
import React from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
import "./App.css";
// import Modal from "react-modal";
// import { Table } from "reactstrap";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import Home from "./pages/Home/Home";
// import Cart from "./pages/Cart/Cart";
// import NotFound from "./pages/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
// import Slide from "./components/Slide";
import ProductDetail from "./pages/Product/ProductDetail";
// import trangChu from "./pages/trangchu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Routes>
          <Route path="/" element={<ProductDetail />} />
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/cart" element={<Cart />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </header>
    </div>
  );
}

export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     // để nhận các giá trị setState từ form
//     this.state = {
//       phieu_giamgia: [],
//       id: "",
//       ten_phieu: "",
//       giatri: "",
//       mota: "",
//     };
//   }

//   componentDidMount() {
//     axios
//       .get("/api/phieu_giamgia")
//       .then((res) => {
//         const phieu_giamgia = res.data; // lấy dữ liệu gửi từ server, đồng thời gán với biến sp.
//         this.setState({ phieu_giamgia: phieu_giamgia.phieu_giamgia }); //cập nhật dữ liệu mới với setState.
//       })
//       .catch((error) => console.log(error));
//   }

//   // xử lý giá trị được nhập, lấy các giá trị dựa theo name.
//   handleInputChange = (event) => {
//     const target = event.target;
//     const value = target.value;
//     // const id = target.id;
//     const name = target.name;
//     this.setState({
//       // modalIsOpen: false, //khai báo ban đầu modal không hiển thị.
//       [name]: value,
//     });
//   };

//   // xử lý các giá trị khi button được submit.
//   handleInsertSubmit = (event) => {
//     event.preventDefault();

//     // khai báo một item mới, với các giá trị là các giá trị được nhập từ form.
//     const newItem = {
//       id: this.state.id,
//       ten_phieu: this.state.ten_phieu,
//       giatri: this.state.giatri,
//       mota: this.state.mota,
//     };
//     axios
//       .post("/api/insert", newItem)
//       .then((res) => {
//         // gọi lại dữ liệu
//         let phieu_giamgia = this.state.phieu_giamgia;
//         phieu_giamgia = [newItem, ...phieu_giamgia];
//         // Cập nhật một array object  mới, đã giới thiệu ở bài trước
//         this.setState({ phieu_giamgia: phieu_giamgia });
//       })
//       .catch((error) => console.log(error));
//   };
//   componentWillMount() {
//     Modal.setAppElement("body"); //mục đích làm cho thành phần form xuất hiện trước, để khi đó mới lấy được dữ liệu khi click button.
//   }

//   //nơi xử lý hành động khi modal được mở.
//   openModal = (item) => {
//     this.setState({
//       modalIsOpen: true,
//       id: item.id,
//       ten_phieu: item.ten_phieu,
//       giatri: item.giatri,
//       mota: item.mota,
//     });
//   };

//   // nơi xử lý hành động khi modal được đóng.
//   closeModal = () => {
//     this.setState({
//       modalIsOpen: false,
//     });
//   };

//   handleEditSubmit = (event) => {
//     event.preventDefault();

//     let key = this.state.id; //key này dùng để nhận diện item nào được xử lý cập nhật nội dung mới.
//     this.setState((prevState) => ({
//       // để khi id của item trùng với key thì sẽ tiến hành thay đổi, ngược lại thì giữ nguyên không thay đổi.
//       phieu_giamgia: prevState.phieu_giamgia.map((elm) =>
//         elm.id === key
//           ? {
//               ...elm,
//               id: this.state.id,
//               ten_phieu: this.state.ten_phieu,
//               giatri: this.state.giatri,
//               mota: this.state.mota,
//             }
//           : elm
//       ),
//     }));
//   };
//   render() {
//     return (
//       <div>
//         <h2>Add an item</h2>
//         <form onSubmit={this.handleInsertSubmit}>
//           <table>
//             <tbody>
//               <tr>
//                 <th>
//                   <label>Id</label>
//                 </th>
//                 <td>
//                   <input
//                     name="id"
//                     type="text"
//                     onChange={this.handleInputChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <th>
//                   <label>Ten_phieu</label>
//                 </th>
//                 <td>
//                   <input
//                     name="ten_phieu"
//                     type="text"
//                     onChange={this.handleInputChange}
//                   />
//                 </td>
//               </tr>

//               <tr>
//                 <th>
//                   <label>giatri</label>
//                 </th>
//                 <td>
//                   <textarea name="giatri" onChange={this.handleInputChange} />
//                 </td>
//               </tr>

//               <tr>
//                 <th>
//                   <label>mota</label>
//                 </th>
//                 <td>
//                   <textarea name="mota" onChange={this.handleInputChange} />
//                 </td>
//               </tr>
//             </tbody>
//           </table>

//           <button type="submit">Submit</button>
//         </form>

//         <hr />

//         <ul>
//           {this.state.phieu_giamgia.map((item) => (
//             <li>
//               {/* <h2>{item.ten_phieu}</h2>
//               <div>{item.giatri}</div>
//               <div>{item.mota}</div> */}
//               <Table bordered hover key={item.id}>
//                 <thead></thead>
//                 <tbody>
//                   <tr>
//                     <th className="tab_id" scope="row">
//                       {item.id}
//                     </th>
//                     <td className="tab_l">{item.ten_phieu}</td>
//                     <td className="tab_lm">{item.giatri}</td>
//                     <td className="tab_rm">{item.mota}</td>
//                     <td className="tab_r">
//                       <button onClick={() => this.openModal(item)}>Edit</button>
//                     </td>
//                   </tr>
//                 </tbody>
//               </Table>
//               {/* <Link>
//                 <img src={item.url} alt="" />
//               </Link> */}
//             </li>
//           ))}
//           {/* sdasdasd */}
//         </ul>
//         {/* đây là khu vực hiển thị nội dung modal. */}
//         <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
//           <button onClick={this.closeModal}>Close</button>
//           <div>Nội dung Modal</div>
//           <form onSubmit={this.handleEditSubmit}>
//             <table>
//               <tbody>
//                 <tr>
//                   <th>
//                     <label>ten_phieu</label>
//                   </th>
//                   <td>
//                     <input
//                       type="text"
//                       name="ten_phieu"
//                       value={this.state.ten_phieu}
//                       onChange={this.handleInputChange}
//                     />
//                   </td>
//                 </tr>

//                 <tr>
//                   <th>
//                     <label>giatri</label>
//                   </th>
//                   <td>
//                     <textarea
//                       name="giatri"
//                       value={this.state.giatri}
//                       onChange={this.handleInputChange}
//                     />
//                   </td>
//                 </tr>

//                 <tr>
//                   <th>
//                     <label>mota</label>
//                   </th>
//                   <td>
//                     <textarea
//                       name="mota"
//                       value={this.state.mota}
//                       onChange={this.handleInputChange}
//                     />
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <button type="submit">Edit</button>
//           </form>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default App;

// class App extends Component {
//   // Khai báo ban đầu cho State giá trị rỗng, để khi lấy được dữ liệu ta sẽ dùng hàm setState để cập nhật lên giá trị mới.
//   state = {
//     message: "",
//   };
//   componentDidMount() {
//     // Lấy dữ liệu bằng thư viện Axios và trả về hàm setState để cập nhật giá trị mới cho State.
//     axios
//       .get("/api/test")
//       .then((result) => this.setState({ message: result.data.message }));
//     //  gọi giá trị State mới được cập nhật.
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>{this.state.message}</h1>
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
