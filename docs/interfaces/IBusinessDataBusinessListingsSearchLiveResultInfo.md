[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBusinessDataBusinessListingsSearchLiveResultInfo

# Interface: IBusinessDataBusinessListingsSearchLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### count?

> `optional` **count**: `number`

item types
the number of items in the items array

#### Defined in

main.ts:203874

***

### items?

> `optional` **items**: [`BusinessDataBusinessListingsSearchLiveItem`](../classes/BusinessDataBusinessListingsSearchLiveItem.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: business_listing

#### Defined in

main.ts:203884

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned businesses

#### Defined in

main.ts:203876

***

### offset\_token?

> `optional` **offset\_token**: `string`

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

#### Defined in

main.ts:203880

***

### total\_count?

> `optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Defined in

main.ts:203871
