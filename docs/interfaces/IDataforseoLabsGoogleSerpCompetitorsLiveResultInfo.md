[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo

# Interface: IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsSerpCompetitorsLiveItem`](../classes/DataforseoLabsSerpCompetitorsLiveItem.md)[]

contains detected SERP competitors and related data

#### Defined in

main.ts:102303

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:102301

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:102297

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:102294

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:102288

***

### seed\_keywords?

> `optional` **seed\_keywords**: `string`[]

keywords specified in the request
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Defined in

main.ts:102291

***

### total\_count?

> `optional` **total\_count**: `number`

the total amount of results in our database relevant to your request

#### Defined in

main.ts:102299
