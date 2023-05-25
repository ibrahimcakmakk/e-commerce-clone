import React,{useEffect} from "react";
import {useParams} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "../redux/productSlice";
import Loading from "../component/Loading";
import DetailComp from "../component/detail/DetailComp";
const Detail = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {productDetail, productDetailStatus} = useSelector(state => state.products);

  useEffect(()=>{
    dispatch(getDetailProduct(id))
  },[dispatch,id])

  console.log(productDetail, "productDetail")
  
  return (
    <div>
      {productDetailStatus === "LOADING" ? <Loading /> : <DetailComp productDetail={productDetail} />}
    </div>
  );
};

export default Detail;
