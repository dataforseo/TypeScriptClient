[Documentation](../README.md) / [Exports](../modules.md) / IMerchantAmazonAsinTasksReadyResultInfo

# Interface: IMerchantAmazonAsinTasksReadyResultInfo

## Implemented by

- [`MerchantAmazonAsinTasksReadyResultInfo`](../classes/MerchantAmazonAsinTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IMerchantAmazonAsinTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](IMerchantAmazonAsinTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](IMerchantAmazonAsinTasksReadyResultInfo.md#endpoint_html)
- [id](IMerchantAmazonAsinTasksReadyResultInfo.md#id)
- [se](IMerchantAmazonAsinTasksReadyResultInfo.md#se)
- [se\_type](IMerchantAmazonAsinTasksReadyResultInfo.md#se_type)
- [tag](IMerchantAmazonAsinTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:177652

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Amazon ASIN Advanced task

#### Defined in

main.ts:177656

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Amazon ASIN HTML task

#### Defined in

main.ts:177658

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:177645

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:177647

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: shopping

#### Defined in

main.ts:177650

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:177654
