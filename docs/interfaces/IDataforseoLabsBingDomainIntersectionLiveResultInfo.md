[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IDataforseoLabsBingDomainIntersectionLiveResultInfo

# Interface: IDataforseoLabsBingDomainIntersectionLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsBingDomainIntersectionLiveItem`](../classes/DataforseoLabsBingDomainIntersectionLiveItem.md)[]

contains keywords, relevant SERP elements and related data

#### Defined in

main.ts:110210

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:110208

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:110204

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:110202

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Defined in

main.ts:110196

***

### target1?

> `optional` **target1**: `string`

target specified in a POST array

#### Defined in

main.ts:110198

***

### target2?

> `optional` **target2**: `string`

target specified in a POST array

#### Defined in

main.ts:110200

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:110206
