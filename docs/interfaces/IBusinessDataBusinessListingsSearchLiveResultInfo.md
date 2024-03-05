[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataBusinessListingsSearchLiveResultInfo

# Interface: IBusinessDataBusinessListingsSearchLiveResultInfo

## Implemented by

- [`BusinessDataBusinessListingsSearchLiveResultInfo`](../classes/BusinessDataBusinessListingsSearchLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [count](IBusinessDataBusinessListingsSearchLiveResultInfo.md#count)
- [items](IBusinessDataBusinessListingsSearchLiveResultInfo.md#items)
- [offset](IBusinessDataBusinessListingsSearchLiveResultInfo.md#offset)
- [offset\_token](IBusinessDataBusinessListingsSearchLiveResultInfo.md#offset_token)
- [total\_count](IBusinessDataBusinessListingsSearchLiveResultInfo.md#total_count)

## Properties

### count

• `Optional` **count**: `number`

item types
the number of items in the items array

#### Defined in

[main.ts:189437](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189437)

___

### items

• `Optional` **items**: [`BusinessDataBusinessListingsSearchLiveItem`](../classes/BusinessDataBusinessListingsSearchLiveItem.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: business_listing

#### Defined in

[main.ts:189447](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189447)

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned businesses

#### Defined in

[main.ts:189439](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189439)

___

### offset\_token

• `Optional` **offset\_token**: `string`

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

#### Defined in

[main.ts:189443](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189443)

___

### total\_count

• `Optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Defined in

[main.ts:189434](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189434)
