[Documentation](../README.md) / [Exports](../modules.md) / IMerchantGoogleProductSpecTasksReadyResultInfo

# Interface: IMerchantGoogleProductSpecTasksReadyResultInfo

## Implemented by

- [`MerchantGoogleProductSpecTasksReadyResultInfo`](../classes/MerchantGoogleProductSpecTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IMerchantGoogleProductSpecTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](IMerchantGoogleProductSpecTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](IMerchantGoogleProductSpecTasksReadyResultInfo.md#endpoint_html)
- [id](IMerchantGoogleProductSpecTasksReadyResultInfo.md#id)
- [se](IMerchantGoogleProductSpecTasksReadyResultInfo.md#se)
- [se\_type](IMerchantGoogleProductSpecTasksReadyResultInfo.md#se_type)
- [tag](IMerchantGoogleProductSpecTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:173165

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Google Shopping Product Specifications Advanced task

#### Defined in

main.ts:173169

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Google Shopping Product Specifications HTML task

#### Defined in

main.ts:173171

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:173158

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:173160

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: shopping_specifications

#### Defined in

main.ts:173163

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:173167
