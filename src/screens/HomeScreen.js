import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import Meta from "../components/Meta";
import { listLatestProducts } from "../actions/productActions";
import NavbarCategories from "../components/NavbarCategories";
import Banner from "../components/Banner";
import Slide from "../components/Slide";
import { Box } from "@material-ui/core";
import Equipments from "../components/Equipments";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listLatestProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      <NavbarCategories />
      <Banner />

      <Slide
        timer={true}
        title="Top Deals"
        style={{ backgroundColor: "#F3F7FB" }}
      />
      <Box style={{ backgroundColor: "#ffffff" }}>
        <hr />
        <h5
          style={{
            margin: "0 0 0 22px",
            fontWeight: "600",
            fontFamily: "Arial",
            fontSize: "22px",
            textTransform: "none",
            letterSpacing: "0",
            color: "#ffffff !important",
          }}
        >
          Latest Product
        </h5>
        <hr />
      </Box>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          {/* <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-sm-3">
                {products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
              </div>
            </div>
          </div> */}

          <Row
            className="justify-content-center"
            style={{
              // marginLeft: "20px",
              marginLeft: "0", // Adjusted marginLeft
              padding: "0 20px", // Adjust padding for small screens
              boxSizing: "border-box",
              width: "100%", // Set width to 100%
            }}
          >
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </Row>

          <hr />
          <Equipments
            timer={true}
            title="Medical Equipments"
            style={{ backgroundColor: "#F3F7FB" }} // Adjust padding for small screens
          />
          <hr />
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
