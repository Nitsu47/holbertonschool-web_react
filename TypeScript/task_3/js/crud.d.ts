export declare function insertRow(row: RowElement): number;
export declare function deleteRow(rowId: RowID): void;
export declare function updateRow(rowId: RowID, row: RowElement): number;

export function insertRow(row) {
    console.log('Insert row', row);
    return Math.floor(Math.random() * Math.floor(1000));
  }
  
  export function deleteRow(rowId) {
    console.log('Delete row id', rowId);
    return;
  }
  
  export function updateRow(rowId, row) {
    console.log(`Update row ${rowId}`, row);
  
    return rowId;
  }

import { RowID, RowElement } from './interface';


