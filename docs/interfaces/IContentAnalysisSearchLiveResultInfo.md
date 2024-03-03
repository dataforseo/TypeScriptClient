[Documentation](../README.md) / [Exports](../modules.md) / IContentAnalysisSearchLiveResultInfo

# Interface: IContentAnalysisSearchLiveResultInfo

## Implemented by

- [`ContentAnalysisSearchLiveResultInfo`](../classes/ContentAnalysisSearchLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IContentAnalysisSearchLiveResultInfo.md#items)
- [items\_count](IContentAnalysisSearchLiveResultInfo.md#items_count)
- [offset\_token](IContentAnalysisSearchLiveResultInfo.md#offset_token)
- [total\_count](IContentAnalysisSearchLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`ContentAnalysisSearchLiveItem`](../classes/ContentAnalysisSearchLiveItem.md)[]

contains citations and related data

#### Defined in

main.ts:157040

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:157038

___

### offset\_token

• `Optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Defined in

main.ts:157034

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:157036
