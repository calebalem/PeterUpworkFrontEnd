import { writable } from "svelte/store";
import {writable as localWritable, readable as localReadable, derived as localDerived} from 'svelte-persistent-store/local.js'

export const userToken = localWritable('token',"");

export const user = localWritable({});

export const tableNames = writable([]);

export const selectedTable = writable("");

export const tableData = writable([]);