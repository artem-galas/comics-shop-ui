import React from 'react';

import {
  DataTable,
  DataTableContent,
  DataTableHead,
  DataTableRow,
  DataTableHeadCell,
  DataTableBody,
  DataTableCell,
} from '@rmwc/data-table';
import { IconButton } from '@rmwc/icon-button';

import { BasketState } from '../../store';

type BasketTableProp = {
  products: BasketState;
  deleteFromBasket: (key: string) => void;
}

export const BasketTable: React.FC<BasketTableProp> = ({ products, deleteFromBasket }) => {
  const getTotalPrice = (): number => {
    let price = 0;
    Object.values(products).forEach((value) => {
      price += value.price;
    });
    return price;
  };

  return (
    <>
      <DataTable>
        <DataTableContent>
          <DataTableHead>
            <DataTableRow>
              <DataTableHeadCell>Item</DataTableHeadCell>
              <DataTableHeadCell alignEnd>Quantity</DataTableHeadCell>
              <DataTableHeadCell alignEnd>Unit price</DataTableHeadCell>
              <DataTableHeadCell alignEnd>Price</DataTableHeadCell>
              <DataTableHeadCell alignEnd>Action</DataTableHeadCell>
            </DataTableRow>
          </DataTableHead>
          <DataTableBody>
            {
              Object.keys(products).map((key) => {
                const product = products[key];
                return (
                  <DataTableRow key={key}>
                    <DataTableCell>{product.title}</DataTableCell>
                    <DataTableCell alignEnd>{product.quantity}</DataTableCell>
                    <DataTableCell alignEnd>€{product.unitPrice}</DataTableCell>
                    <DataTableCell alignEnd>€{product.price}</DataTableCell>
                    <DataTableCell alignEnd>
                      <IconButton
                        icon="delete_outline"
                        onClick={() => deleteFromBasket(key)}
                      />
                    </DataTableCell>
                  </DataTableRow>
                );
              })
            }
            <DataTableRow activated style={{ fontSize: '16px' }}>
              <DataTableCell>Total</DataTableCell>
              <DataTableCell alignEnd />
              <DataTableCell alignEnd />
              <DataTableCell alignEnd />
              <DataTableCell alignEnd>€{getTotalPrice()}</DataTableCell>
            </DataTableRow>
          </DataTableBody>
        </DataTableContent>
      </DataTable>
    </>
  );
};
