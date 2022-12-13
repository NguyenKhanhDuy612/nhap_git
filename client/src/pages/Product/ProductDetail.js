// import logo from "./logo.svg";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import "../../App.css";
import "../../styles/main_styles.css";
import "../../styles/responsive.css";
import Modal from "react-modal";
import { Container, Row, Table } from "reactstrap";
// import { Link } from "react-router-dom";
// import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
// import Home from "./pages/Home/Home";
// import Cart from "./pages/Cart/Cart";
// import NotFound from "./pages/NotFound/NotFound";
// import { Route, Routes } from "react-router-dom";
// import Slide from "./components/Slide";
// import trangChu from "./pages/trangchu";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    // để nhận các giá trị setState từ form
    this.state = {
      sanpham: [],
      id: "",
      tensp: "",
      url: "",
      chitiet: "",
    };
  }

  componentDidMount() {
    axios
      .get("/api/sanpham")
      .then((res) => {
        const sanpham = res.data; // lấy dữ liệu gửi từ server, đồng thời gán với biến sp.
        console.log(res.data, "đâsdasdas");
        this.setState({ sanpham: sanpham.sanpham }); //cập nhật dữ liệu mới với setState.
      })
      .catch((error) => console.log(error));
  }

  // xử lý giá trị được nhập, lấy các giá trị dựa theo name.
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    // const id = target.id;
    const name = target.name;
    this.setState({
      // modalIsOpen: false, //khai báo ban đầu modal không hiển thị.
      [name]: value,
    });
  };

  // xử lý các giá trị khi button được submit.
  handleInsertSubmit = (event) => {
    event.preventDefault();

    // khai báo một item mới, với các giá trị là các giá trị được nhập từ form.
    const newItem = {
      id: this.state.id,
      tensp: this.state.tensp,
      gia: this.state.gia,
      chitiet: this.state.chitiet,
      id_dm: this.state.id_dm,
    };
    axios
      .post("/api/insert", newItem)
      .then((res) => {
        // gọi lại dữ liệu
        let sanpham = this.state.sanpham;
        sanpham = [newItem, ...sanpham];
        // Cập nhật một array object  mới, đã giới thiệu ở bài trước
        this.setState({ sanpham: sanpham });
      })
      .catch((error) => console.log(error));
  };
  componentWillMount() {
    Modal.setAppElement("body"); //mục đích làm cho thành phần form xuất hiện trước, để khi đó mới lấy được dữ liệu khi click button.
  }

  //nơi xử lý hành động khi modal được mở.
  openModal = (item) => {
    this.setState({
      modalIsOpen: true,
      id: item.id,
      tensp: item.tensp,
      url: item.url,
      chitiet: item.chitiet,
    });
  };

  // nơi xử lý hành động khi modal được đóng.
  closeModal = () => {
    this.setState({
      modalIsOpen: false,
    });
  };

  handleEditSubmit = (event) => {
    event.preventDefault();

    // khai báo giá trị để truyền theo phương thức post
    const sanPhamUpdate = {
      id: this.state.id,
      tensp: this.state.tensp,
      gia: this.state.gia,
      chitiet: this.state.chitiet,
    };

    // sử dụng Axios tạo phương thức post, truyền giá trị sanPhamUpdate kèm theo
    axios
      .post("/api/edit", sanPhamUpdate)
      .then((res) => {
        let key = this.state.id; //key này dùng để nhận diện item nào được xử lý cập nhật nội dung mới.
        this.setState((prevState) => ({
          // để khi id của item trùng với key thì sẽ tiến hành thay đổi, ngược lại thì giữ nguyên không thay đổi.
          sanpham: prevState.sanpham.map((elm) =>
            elm.id === key
              ? {
                  ...elm,
                  id: this.state.id,
                  tensp: this.state.tensp,
                  gia: this.state.gia,
                  chitiet: this.state.chitiet,
                }
              : elm
          ),
        }));
      })
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <div>
        <Container>
          <h2>Add an item</h2>
          <form onSubmit={this.handleInsertSubmit}>
            <table>
              <tbody>
                <tr>
                  <th>
                    <label>Id</label>
                  </th>
                  <td>
                    <input
                      name="id"
                      type="text"
                      onChange={this.handleInputChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    <label>Id_dm</label>
                  </th>
                  <td>
                    <input
                      name="id_dm"
                      type="text"
                      onChange={this.handleInputChange}
                      value="16"
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    <label>tensp</label>
                  </th>
                  <td>
                    <input
                      name="tensp"
                      type="text"
                      onChange={this.handleInputChange}
                    />
                  </td>
                </tr>

                <tr>
                  <th>
                    <label>gia</label>
                  </th>
                  <td>
                    <textarea name="gia" onChange={this.handleInputChange} />
                  </td>
                </tr>

                <tr>
                  <th>
                    <label>chitiet</label>
                  </th>
                  <td>
                    <textarea
                      name="chitiet"
                      onChange={this.handleInputChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <button type="submit">Submit</button>
          </form>

          <hr />
          <Container>
            <Row>
              {this.state.sanpham.map((item) => (
                <div className="duy" key={item.id}>
                  <div class="product-item men">
                    <div class="product discount product_filter">
                      <div class="product_image">
                        <Link>
                          <img src={item.url} alt="" />
                        </Link>
                      </div>
                      <div class="favorite favorite_left">
                        <i class="bi bi-heart"></i>
                      </div>
                      <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                        <span>Hot</span>
                      </div>
                      <div class="product_info">
                        <h6 class="product_name">
                          <a href="single.html">{item.tensp}</a>
                        </h6>
                        <div class="product_price">{item.gia}</div>
                      </div>
                    </div>
                    <div class="red_button add_to_cart_button">
                      <Link onClick={() => this.openModal(item)}>Edit</Link>
                    </div>
                  </div>
                </div>
              ))}
            </Row>
          </Container>

          <ul>
            {this.state.sanpham.map((item) => (
              <li>
                <Table bordered hover key={item.id}>
                  <thead></thead>
                  <tbody>
                    <tr>
                      <th className="tab_id" scope="row">
                        {item.id}
                      </th>
                      <td className="tab_l">{item.tensp}</td>
                      <td className="tab_lm">
                        <Link>
                          <img src={item.url} alt="" />
                        </Link>
                      </td>

                      <td className="tab_rm">{item.chitiet}</td>
                      <td className="tab_r">
                        <button onClick={() => this.openModal(item)}>
                          Edit
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </li>
            ))}
          </ul>
          {/* đây là khu vực hiển thị nội dung modal. */}
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
          >
            <button onClick={this.closeModal}>Close</button>
            <div>Nội dung Modal</div>
            <form onSubmit={this.handleEditSubmit}>
              <table>
                <tbody>
                  <tr>
                    <th>
                      <label>tensp</label>
                    </th>
                    <td>
                      <input
                        type="text"
                        name="tensp"
                        value={this.state.tensp}
                        onChange={this.handleInputChange}
                      />
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <label>gia</label>
                    </th>
                    <td>
                      <textarea
                        name="gia"
                        value={this.state.gia}
                        onChange={this.handleInputChange}
                      />
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <label>chitiet</label>
                    </th>
                    <td>
                      <textarea
                        name="chitiet"
                        value={this.state.chitiet}
                        onChange={this.handleInputChange}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button type="submit">Edit</button>
            </form>
          </Modal>
        </Container>
      </div>
    );
  }
}

export default ProductDetail;
