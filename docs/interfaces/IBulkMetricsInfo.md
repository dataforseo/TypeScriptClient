[dataforseo-client](../README.md) / [Exports](../modules.md) / IBulkMetricsInfo

# Interface: IBulkMetricsInfo

## Implemented by

- [`BulkMetricsInfo`](../classes/BulkMetricsInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [count](IBulkMetricsInfo.md#count)
- [etv](IBulkMetricsInfo.md#etv)

## Properties

### count

• `Optional` **count**: `number`

total count of organic SERPs that contain the domain

#### Defined in

[main.ts:97685](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97685)

___

### etv

• `Optional` **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Defined in

[main.ts:97683](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97683)
