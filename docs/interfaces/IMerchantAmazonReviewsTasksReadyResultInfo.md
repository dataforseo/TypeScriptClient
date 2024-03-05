[dataforseo-client](../README.md) / [Exports](../modules.md) / IMerchantAmazonReviewsTasksReadyResultInfo

# Interface: IMerchantAmazonReviewsTasksReadyResultInfo

## Implemented by

- [`MerchantAmazonReviewsTasksReadyResultInfo`](../classes/MerchantAmazonReviewsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IMerchantAmazonReviewsTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](IMerchantAmazonReviewsTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](IMerchantAmazonReviewsTasksReadyResultInfo.md#endpoint_html)
- [id](IMerchantAmazonReviewsTasksReadyResultInfo.md#id)
- [se](IMerchantAmazonReviewsTasksReadyResultInfo.md#se)
- [se\_type](IMerchantAmazonReviewsTasksReadyResultInfo.md#se_type)
- [tag](IMerchantAmazonReviewsTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

[main.ts:175419](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175419)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Amazon Reviews Advanced task

#### Defined in

[main.ts:175423](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175423)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Amazon Reviews HTML task

#### Defined in

[main.ts:175425](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175425)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:175412](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175412)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:175414](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175414)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: shopping

#### Defined in

[main.ts:175417](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175417)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:175421](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175421)
