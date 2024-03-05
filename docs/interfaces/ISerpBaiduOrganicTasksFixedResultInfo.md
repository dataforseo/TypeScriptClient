[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpBaiduOrganicTasksFixedResultInfo

# Interface: ISerpBaiduOrganicTasksFixedResultInfo

## Implemented by

- [`SerpBaiduOrganicTasksFixedResultInfo`](../classes/SerpBaiduOrganicTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_fixed](ISerpBaiduOrganicTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](ISerpBaiduOrganicTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpBaiduOrganicTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpBaiduOrganicTasksFixedResultInfo.md#endpoint_regular)
- [id](ISerpBaiduOrganicTasksFixedResultInfo.md#id)
- [se](ISerpBaiduOrganicTasksFixedResultInfo.md#se)
- [se\_type](ISerpBaiduOrganicTasksFixedResultInfo.md#se_type)
- [tag](ISerpBaiduOrganicTasksFixedResultInfo.md#tag)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

[main.ts:66466](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66466)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:66474](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66474)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:66477](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66477)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:66471](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66471)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:66459](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66459)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:66461](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66461)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Defined in

[main.ts:66464](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66464)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:66468](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66468)
