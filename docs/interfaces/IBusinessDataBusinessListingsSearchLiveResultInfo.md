[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataBusinessListingsSearchLiveResultInfo

# Interface: IBusinessDataBusinessListingsSearchLiveResultInfo

Defined in: main.ts:211702

## Indexable

\[`key`: `string`\]: `any`

## Properties

### count?

> `optional` **count**: `number`

Defined in: main.ts:211707

item types
the number of items in the items array

***

### items?

> `optional` **items**: [`BusinessDataBusinessListingsSearchLiveItem`](../classes/BusinessDataBusinessListingsSearchLiveItem.md)[]

Defined in: main.ts:211717

encountered item types
types of search engine results encountered in the items array;
possible item types: business_listing

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:211709

offset in the results array of returned businesses

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:211713

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:211704

total number of results in our database relevant to your request
