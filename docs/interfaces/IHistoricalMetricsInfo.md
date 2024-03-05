[dataforseo-client](../README.md) / [Exports](../modules.md) / IHistoricalMetricsInfo

# Interface: IHistoricalMetricsInfo

## Implemented by

- [`HistoricalMetricsInfo`](../classes/HistoricalMetricsInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [count](IHistoricalMetricsInfo.md#count)
- [etv](IHistoricalMetricsInfo.md#etv)
- [month](IHistoricalMetricsInfo.md#month)
- [year](IHistoricalMetricsInfo.md#year)

## Properties

### count

• `Optional` **count**: `number`

total count of organic SERPs that contain the domain

#### Defined in

[main.ts:98245](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98245)

___

### etv

• `Optional` **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Defined in

[main.ts:98243](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98243)

___

### month

• `Optional` **month**: `number`

month for which the data is provided

#### Defined in

[main.ts:98238](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98238)

___

### year

• `Optional` **year**: `number`

year for which the data is provided

#### Defined in

[main.ts:98236](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98236)
