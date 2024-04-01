[Documentation](../README.md) / [Exports](../modules.md) / IMerchantAmazonProductsTasksReadyResultInfo

# Interface: IMerchantAmazonProductsTasksReadyResultInfo

## Implemented by

- [`MerchantAmazonProductsTasksReadyResultInfo`](../classes/MerchantAmazonProductsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IMerchantAmazonProductsTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](IMerchantAmazonProductsTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](IMerchantAmazonProductsTasksReadyResultInfo.md#endpoint_html)
- [id](IMerchantAmazonProductsTasksReadyResultInfo.md#id)
- [se](IMerchantAmazonProductsTasksReadyResultInfo.md#se)
- [se\_type](IMerchantAmazonProductsTasksReadyResultInfo.md#se_type)
- [tag](IMerchantAmazonProductsTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:175986

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Amazon Products Advanced task

#### Defined in

main.ts:175990

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Amazon Products HTML task

#### Defined in

main.ts:175992

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:175979

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:175981

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Defined in

main.ts:175984

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:175988
