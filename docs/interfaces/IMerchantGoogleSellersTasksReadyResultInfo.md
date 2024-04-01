[Documentation](../README.md) / [Exports](../modules.md) / IMerchantGoogleSellersTasksReadyResultInfo

# Interface: IMerchantGoogleSellersTasksReadyResultInfo

## Implemented by

- [`MerchantGoogleSellersTasksReadyResultInfo`](../classes/MerchantGoogleSellersTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IMerchantGoogleSellersTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](IMerchantGoogleSellersTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](IMerchantGoogleSellersTasksReadyResultInfo.md#endpoint_html)
- [id](IMerchantGoogleSellersTasksReadyResultInfo.md#id)
- [se](IMerchantGoogleSellersTasksReadyResultInfo.md#se)
- [se\_type](IMerchantGoogleSellersTasksReadyResultInfo.md#se_type)
- [tag](IMerchantGoogleSellersTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:171747

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of Google Shopping Sellers Advanced task

#### Defined in

main.ts:171751

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of Google Shopping Sellers HTML task

#### Defined in

main.ts:171753

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:171740

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:171742

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: shopping

#### Defined in

main.ts:171745

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:171749
