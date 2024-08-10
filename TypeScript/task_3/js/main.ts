/// <reference path="crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud.d.ts";

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const updatedRow: RowElement = { ...row, age: 23 };
const newRowID: RowID = CRUD.insertRow(row);

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
