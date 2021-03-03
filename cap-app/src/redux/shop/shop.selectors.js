import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
    stars: 1,
    remnants: 2,
    interstellar: 3,
  
};

const selectShop = (state) => state.shop;
export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectShopCollections],
    (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
    createSelector(
        [selectShopCollections],
        (collections) => collections[collectionUrlParam]
    );
