[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IDataforseoLabsleBulkAppMetricsLiveItem

# Interface: IDataforseoLabsleBulkAppMetricsLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

id of the app in a POST array

#### Defined in

main.ts:114505

***

### metrics?

> `optional` **metrics**: `object`

metrics for the ranking keywords of the app
ranking data relevant to the keywords that the provided application ranks for on Google Play

#### Index Signature

 \[`key`: `string`\]: [`AppMetricsInfo`](../classes/AppMetricsInfo.md)

#### Defined in

main.ts:114508

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:114503
