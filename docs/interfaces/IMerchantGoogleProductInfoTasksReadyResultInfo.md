[Documentation](../README.md) / [Exports](../modules.md) / IMerchantGoogleProductInfoTasksReadyResultInfo

# Interface: IMerchantGoogleProductInfoTasksReadyResultInfo

## Implemented by

- [`MerchantGoogleProductInfoTasksReadyResultInfo`](../classes/MerchantGoogleProductInfoTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IMerchantGoogleProductInfoTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](IMerchantGoogleProductInfoTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](IMerchantGoogleProductInfoTasksReadyResultInfo.md#endpoint_html)
- [id](IMerchantGoogleProductInfoTasksReadyResultInfo.md#id)
- [se](IMerchantGoogleProductInfoTasksReadyResultInfo.md#se)
- [se\_type](IMerchantGoogleProductInfoTasksReadyResultInfo.md#se_type)
- [tag](IMerchantGoogleProductInfoTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:174308

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Google Shopping Product Specifications Advanced task

#### Defined in

main.ts:174312

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Google Shopping Product Specifications HTML task
note: HTML is not available for this endpoint, the value will be null

#### Defined in

main.ts:174315

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:174301

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:174303

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: shopping_specifications

#### Defined in

main.ts:174306

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:174310
