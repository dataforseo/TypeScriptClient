[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDataforseoLabsBingPageIntersectionLiveResultInfo

# Interface: IDataforseoLabsBingPageIntersectionLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### exclude\_pages?

> `optional` **exclude\_pages**: `string`[]

URLs you specified in a POST array that will be excluded from the results

#### Defined in

main.ts:108454

***

### items?

> `optional` **items**: [`DataforseoLabsBingPageIntersectionLiveItem`](../classes/DataforseoLabsBingPageIntersectionLiveItem.md)[]

contains keywords, relevant SERP elements and related data

#### Defined in

main.ts:108464

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:108462

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:108458

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:108456

***

### pages?

> `optional` **pages**: `object`

URLs you specified a POST array

#### Index Signature

 \[`key`: `string`\]: `string`

#### Defined in

main.ts:108452

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Defined in

main.ts:108450

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:108460
