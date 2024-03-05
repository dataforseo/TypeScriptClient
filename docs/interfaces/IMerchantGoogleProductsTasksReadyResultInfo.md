[dataforseo-client](../README.md) / [Exports](../modules.md) / IMerchantGoogleProductsTasksReadyResultInfo

# Interface: IMerchantGoogleProductsTasksReadyResultInfo

## Implemented by

- [`MerchantGoogleProductsTasksReadyResultInfo`](../classes/MerchantGoogleProductsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IMerchantGoogleProductsTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](IMerchantGoogleProductsTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](IMerchantGoogleProductsTasksReadyResultInfo.md#endpoint_html)
- [id](IMerchantGoogleProductsTasksReadyResultInfo.md#id)
- [se](IMerchantGoogleProductsTasksReadyResultInfo.md#se)
- [se\_type](IMerchantGoogleProductsTasksReadyResultInfo.md#se_type)
- [tag](IMerchantGoogleProductsTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

[main.ts:164306](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164306)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of Google Shopping Products Advanced task

#### Defined in

[main.ts:164310](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164310)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of Google Shopping Products HTML task

#### Defined in

[main.ts:164312](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164312)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:164299](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164299)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:164301](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164301)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: shopping

#### Defined in

[main.ts:164304](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164304)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:164308](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164308)
