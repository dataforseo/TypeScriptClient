[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusyWorkingTimeInfo

# Interface: IBusyWorkingTimeInfo

## Implemented by

- [`BusyWorkingTimeInfo`](../classes/BusyWorkingTimeInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [popular\_index](IBusyWorkingTimeInfo.md#popular_index)
- [time](IBusyWorkingTimeInfo.md#time)

## Properties

### popular\_index

• `Optional` **popular\_index**: `number`

popularity index
relative time-bound popularity index measured from 0 to 100;
higher value corresponds to a busier time of a day

#### Defined in

[main.ts:188863](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188863)

___

### time

• `Optional` **time**: [`WorkTimeInfo`](../classes/WorkTimeInfo.md)

busy hours

#### Defined in

[main.ts:188859](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188859)
