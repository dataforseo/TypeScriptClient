[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo

# Interface: IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem`](../classes/KeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md)[]

array of keywords
contains keywords and their search volume rates

#### Defined in

main.ts:135977

***

### items\_count?

> `optional` **items\_count**: `string`

ithe number of results returned in the items array

#### Defined in

main.ts:135974

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

Note:if the keyword in the POST array appears to be misspelled, data will be returned for the correctly spelled keyword;
we use the functionality of Google Ads API to check and validate the spelling of keywords, learn more by this link

#### Defined in

main.ts:135969

***

### location\_code?

> `optional` **location\_code**: `string`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:135964

***

### use\_clickstream?

> `optional` **use\_clickstream**: `boolean`

indicates if the use_clickstream parameter is active
possible values: true, false

#### Defined in

main.ts:135972
