import { writable } from "svelte/store";
import { writable as localWritable, readable as localReadable, derived as localDerived } from 'svelte-persistent-store/dist/local';

export const userToken = localWritable('token',"");

export const user = writable({});

export const tableNames = writable([]);

