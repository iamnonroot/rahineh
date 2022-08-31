/**
 * TikSDK
 * @desciprion This file generated automatically by SDK generator
 * @author !R00T <iamnonroot@gmail.com> as SDK developer
 * @author Dr.Felfel <felfelpardaz@gmail.com> as Backend developer
 * @date Tue Aug 23 2022 22:44:41
 * @license MIT
 */

import { TikSDKHTTPService } from "../http.service";
import {
  IProductBrandsParams,
  IProductBrandsResponse,
  IProductCategoriesParams,
  IProductCategoriesResponse,
  IProductGetCategoriesParams,
  IProductGetCategoriesResponse,
  IProductFindShopByFiltersParams,
  IProductFindShopByFiltersResponse,
  IProductFindShopByIdParams,
  IProductFindShopByIdResponse,
  IProductNewBrandParams,
  IProductNewBrandResponse,
  IProductGetProductByIdParams,
  IProductGetProductByIdResponse,
  IProductProductsParams,
  IProductProductsResponse,
  IProductSubmitOrderParams,
  IProductSubmitOrderResponse,
  IProductValidateParams,
  IProductValidateResponse,
} from "./product.interface";

export class CProduct {
  constructor(private http: TikSDKHTTPService) {}

  /**
   * brands function returns a list of brands
   * @version 0.1.1
   */
  public Brands(data?: IProductBrandsParams) {
    return this.http.request<IProductBrandsResponse>({
      path: "/product/brands",
      method: "GET",
      actor: true,
      data: data,
    });
  }

  /**
   * categories function returns a list of categories
   * @version 0.1.1
   */
  public Categories(data?: IProductCategoriesParams) {
    return this.http.request<IProductCategoriesResponse>({
      path: "/product/categories",
      method: "GET",
      actor: true,
      data: data,
    });
  }

  /**
   * getCategories function returns a category
   * @version 0.1.1
   */
  public GetCategories(data?: IProductGetCategoriesParams) {
    return this.http.request<IProductGetCategoriesResponse>({
      path: "/product/category",
      method: "GET",
      actor: true,
      data: data,
    });
  }

  /**
   * findShopByFilters function return many shops
   * @version 0.1.1
   */
  public FindShopByFilters(data?: IProductFindShopByFiltersParams) {
    return this.http.request<IProductFindShopByFiltersResponse>({
      path: "/product/findShopByFilters",
      method: "GET",
      data: data,
    });
  }

  /**
   * findShopById function return a shop
   * @version 0.1.1
   */
  public FindShopById(data?: IProductFindShopByIdParams) {
    return this.http.request<IProductFindShopByIdResponse>({
      path: "/product/findShopById",
      method: "GET",
      data: data,
    });
  }

  /**
   * newBrand function submit an brand to brands
   * @version 0.1.1
   */
  public NewBrand(data?: IProductNewBrandParams) {
    return this.http.request<IProductNewBrandResponse>({
      path: "/product/new-brand",
      method: "POST",
      actor: true,
      data: data,
    });
  }

  /**
   * getProductById function returns a product by id
   * @version 0.1.1
   */
  public GetProductById(data?: IProductGetProductByIdParams) {
    return this.http.request<IProductGetProductByIdResponse>({
      path: "/product/product",
      method: "GET",
      data: data,
    });
  }

  /**
   * products function returns a list of products
   * @version 0.1.1
   */
  public Products(data?: IProductProductsParams) {
    return this.http.request<IProductProductsResponse>({
      path: "/product/products",
      method: "GET",
      data: data,
    });
  }

  /**
   * submitOrder function submit an order to orders
   * @version 0.1.1
   */
  public SubmitOrder(data?: IProductSubmitOrderParams) {
    return this.http.request<IProductSubmitOrderResponse>({
      path: "/product/submitOrder",
      method: "POST",
      actor: true,
      data: data,
    });
  }

  /**
   * validate price and quantity function .
   * @version 0.1.2
   */
  public Validate(data?: IProductValidateParams) {
    return this.http.request<IProductValidateResponse>({
      path: "/product/validate",
      method: "POST",
      data: data,
    });
  }
}
