[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGooglePageIntersectionLiveResultInfo

# Interface: IDataforseoLabsGooglePageIntersectionLiveResultInfo

Defined in: main.ts:110495

## Indexable

\[`key`: `string`\]: `any`

## Properties

### exclude\_pages?

> `optional` **exclude\_pages**: `string`[]

Defined in: main.ts:110501

URLs you specified in a POST array that will be excluded from the results

***

### items?

> `optional` **items**: [`DataforseoLabsPageIntersectionLiveItem`](../classes/DataforseoLabsPageIntersectionLiveItem.md)[]

Defined in: main.ts:110511

contains keywords, relevant SERP elements and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:110509

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:110505

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:110503

location code in a POST array

***

### pages?

> `optional` **pages**: `object`

Defined in: main.ts:110499

URLs you specified a POST array

#### Index Signature

\[`key`: `string`\]: `string`

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:110497

search engine type

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:110507

total amount of results in our database relevant to your request
