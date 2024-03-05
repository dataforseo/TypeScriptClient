[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsBulkTrafficEstimationLiveItem

# Interface: IDataforseoLabsBulkTrafficEstimationLiveItem

## Implemented by

- [`DataforseoLabsBulkTrafficEstimationLiveItem`](../classes/DataforseoLabsBulkTrafficEstimationLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [metrics](IDataforseoLabsBulkTrafficEstimationLiveItem.md#metrics)
- [se\_type](IDataforseoLabsBulkTrafficEstimationLiveItem.md#se_type)
- [target](IDataforseoLabsBulkTrafficEstimationLiveItem.md#target)

## Properties

### metrics

• `Optional` **metrics**: `Object`

traffic data relevant to the specified domain

#### Index signature

▪ [key: `string`]: [`BulkMetricsInfo`](../classes/BulkMetricsInfo.md)

#### Defined in

[main.ts:97759](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97759)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:97755](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97755)

___

### target

• `Optional` **target**: `string`

target domain in a POST array

#### Defined in

[main.ts:97757](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97757)
