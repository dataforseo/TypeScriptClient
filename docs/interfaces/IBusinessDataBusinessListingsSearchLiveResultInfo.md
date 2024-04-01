[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataBusinessListingsSearchLiveResultInfo

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

main.ts:194890

___

### items

• `Optional` **items**: [`BusinessDataBusinessListingsSearchLiveItem`](../classes/BusinessDataBusinessListingsSearchLiveItem.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: business_listing

#### Defined in

main.ts:194900

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned businesses

#### Defined in

main.ts:194892

___

### offset\_token

• `Optional` **offset\_token**: `string`

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

#### Defined in

main.ts:194896

___

### total\_count

• `Optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Defined in

main.ts:194887
