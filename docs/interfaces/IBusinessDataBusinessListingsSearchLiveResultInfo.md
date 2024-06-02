**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBusinessDataBusinessListingsSearchLiveResultInfo

# Interface: IBusinessDataBusinessListingsSearchLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### count?

> **`optional`** **count**: `number`

item types
the number of items in the items array

#### Source

main.ts:197245

***

### items?

> **`optional`** **items**: [`BusinessDataBusinessListingsSearchLiveItem`](../classes/BusinessDataBusinessListingsSearchLiveItem.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: business_listing

#### Source

main.ts:197255

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned businesses

#### Source

main.ts:197247

***

### offset\_token?

> **`optional`** **offset\_token**: `string`

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

#### Source

main.ts:197251

***

### total\_count?

> **`optional`** **total\_count**: `number`

total number of results in our database relevant to your request

#### Source

main.ts:197242
