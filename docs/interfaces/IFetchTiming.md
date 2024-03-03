[Documentation](../README.md) / [Exports](../modules.md) / IFetchTiming

# Interface: IFetchTiming

## Implemented by

- [`FetchTiming`](../classes/FetchTiming.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [duration\_time](IFetchTiming.md#duration_time)
- [fetch\_end](IFetchTiming.md#fetch_end)
- [fetch\_start](IFetchTiming.md#fetch_start)

## Properties

### duration\_time

• `Optional` **duration\_time**: `number`

indicates how many milliseconds it took to fetch a resource

#### Defined in

main.ts:146210

___

### fetch\_end

• `Optional` **fetch\_end**: `number`

time to complete downloading the resource
the amount of time a browser needs to complete downloading a resource

#### Defined in

main.ts:146216

___

### fetch\_start

• `Optional` **fetch\_start**: `number`

time to start downloading the resource
the amount of time a browser needs to start downloading a resource

#### Defined in

main.ts:146213
