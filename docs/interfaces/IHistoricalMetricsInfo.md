[Documentation](../README.md) / [Exports](../modules.md) / IHistoricalMetricsInfo

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

main.ts:100622

___

### etv

• `Optional` **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:100620

___

### month

• `Optional` **month**: `number`

month for which the data is provided

#### Defined in

main.ts:100615

___

### year

• `Optional` **year**: `number`

year for which the data is provided

#### Defined in

main.ts:100613
