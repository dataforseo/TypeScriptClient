[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsleBulkAppMetricsLiveItem

# Interface: IDataforseoLabsleBulkAppMetricsLiveItem

## Implemented by

- [`DataforseoLabsleBulkAppMetricsLiveItem`](../classes/DataforseoLabsleBulkAppMetricsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [app\_id](IDataforseoLabsleBulkAppMetricsLiveItem.md#app_id)
- [metrics](IDataforseoLabsleBulkAppMetricsLiveItem.md#metrics)
- [se\_type](IDataforseoLabsleBulkAppMetricsLiveItem.md#se_type)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

id of the app in a POST array

#### Defined in

[main.ts:108018](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108018)

___


### metrics

• `Optional` **metrics**: `Object`

metrics for the ranking keywords of the app
ranking data relevant to the keywords that the provided application ranks for on Google Play

#### Index signature

▪ [key: `string`]: [`AppMetricsInfo`](../classes/AppMetricsInfo.md)

#### Defined in

[main.ts:108021](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108021)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:108016](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108016)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")