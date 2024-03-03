[Documentation](../README.md) / [Exports](../modules.md) / IMerchantAmazonSellersTasksReadyResultInfo

# Interface: IMerchantAmazonSellersTasksReadyResultInfo

## Implemented by

- [`MerchantAmazonSellersTasksReadyResultInfo`](../classes/MerchantAmazonSellersTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IMerchantAmazonSellersTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](IMerchantAmazonSellersTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](IMerchantAmazonSellersTasksReadyResultInfo.md#endpoint_html)
- [id](IMerchantAmazonSellersTasksReadyResultInfo.md#id)
- [se](IMerchantAmazonSellersTasksReadyResultInfo.md#se)
- [se\_type](IMerchantAmazonSellersTasksReadyResultInfo.md#se_type)
- [tag](IMerchantAmazonSellersTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:174111

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of Amazon Sellers Advanced task

#### Defined in

main.ts:174115

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of Amazon Sellers HTML task

#### Defined in

main.ts:174117

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:174104

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:174106

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: shopping

#### Defined in

main.ts:174109

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:174113
