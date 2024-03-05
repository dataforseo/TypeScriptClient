[dataforseo-client](../README.md) / [Exports](../modules.md) / IBacklinksBacklinksLiveResultInfo

# Interface: IBacklinksBacklinksLiveResultInfo

## Implemented by

- [`BacklinksBacklinksLiveResultInfo`](../classes/BacklinksBacklinksLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [custom\_mode](IBacklinksBacklinksLiveResultInfo.md#custom_mode)
- [items](IBacklinksBacklinksLiveResultInfo.md#items)
- [items\_count](IBacklinksBacklinksLiveResultInfo.md#items_count)
- [mode](IBacklinksBacklinksLiveResultInfo.md#mode)
- [search\_after\_token](IBacklinksBacklinksLiveResultInfo.md#search_after_token)
- [target](IBacklinksBacklinksLiveResultInfo.md#target)
- [total\_count](IBacklinksBacklinksLiveResultInfo.md#total_count)

## Properties

### custom\_mode

• `Optional` **custom\_mode**: `Object`

custom mode specified in a POST array

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[main.ts:131560](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131560)

___

### items

• `Optional` **items**: [`BacklinksBacklinksLiveItem`](../classes/BacklinksBacklinksLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Defined in

[main.ts:131566](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131566)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:131564](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131564)

___

### mode

• `Optional` **mode**: `string`

mode specified in a POST array

#### Defined in

[main.ts:131558](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131558)

___

### search\_after\_token

• `Optional` **search\_after\_token**: `string`

token for subsequent requests
by specifying the unique search_after_token when setting a new task, you will get the subsequent results of the initial task;
search_after_token values are unique for each subsequent task

#### Defined in

[main.ts:131570](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131570)

___

### target

• `Optional` **target**: `string`

target domain in a POST array

#### Defined in

[main.ts:131556](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131556)

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results relevant the request

#### Defined in

[main.ts:131562](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131562)
