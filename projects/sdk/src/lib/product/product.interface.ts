/**
 * TikSDK
 * @desciprion This file generated automatically by SDK generator
 * @author !R00T <iamnonroot@gmail.com> as SDK developer
 * @author Dr.Felfel <felfelpardaz@gmail.com> as Backend developer
 * @date Tue Aug 23 2022 22:44:41
 * @license MIT
 */

import { ResponseParam } from "../http.service";

export interface IProductBrandsParams {
  shop: number;
}

export interface IProductCategoriesParams {}

export interface IProductGetCategoriesParams {}

export interface IProductFindShopByFiltersParams {
  eco: string;
  type: string;
}

export interface IProductFindShopByIdParams {
  id: string;
}

export interface IProductNewBrandParams {
  title: string;
  image: string;
}

export interface IProductGetProductByIdParams {
  id: string;
}

export interface IProductProductsParams {
  shop: number;
}

export interface IProductSubmitOrderParams {
  products: object;
  address: object;
  total: number;
  payment_gateway: number;
  discount_code: number;
}

export interface IProductValidateParams {
  products: any[];
  address: object;
  total: number;
  payment_gateway: number;
  discount_code: string;
}

export interface IProductBrandsResponse extends ResponseParam {}

export interface IProductCategoriesResponse extends ResponseParam {}

export interface IProductGetCategoriesResponse extends ResponseParam {}

export interface IProductFindShopByFiltersResponse extends ResponseParam {}

export interface IProductFindShopByIdResponse extends ResponseParam {}

export interface IProductNewBrandResponse extends ResponseParam {}

export interface IProductGetProductByIdResponse extends ResponseParam {}

export interface IProductProductsResponse extends ResponseParam {}

export interface IProductSubmitOrderResponse extends ResponseParam {}

export interface IProductValidateResponse extends ResponseParam {}
