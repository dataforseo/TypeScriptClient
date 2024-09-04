[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IKeywordsDataGoogleTrendsExploreLiveResultInfo

# Interface: IKeywordsDataGoogleTrendsExploreLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to the Google Trends results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:127696

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:127701

***

### items?

> `optional` **items**: [`BaseGoogleTrendsItem`](../classes/BaseGoogleTrendsItem.md)[]

items on the Google Trends page

#### Defined in

main.ts:127705

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:127703

***

### keywords?

> `optional` **keywords**: `string`[]

keywords in a POST array

#### Defined in

main.ts:127685

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:127693

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:127690

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:127687
