[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleJobsTasksReadyResultInfo

# Class: SerpGoogleJobsTasksReadyResultInfo

## Implements

- [`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleJobsTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](SerpGoogleJobsTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](SerpGoogleJobsTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpGoogleJobsTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpGoogleJobsTasksReadyResultInfo.md#endpoint_regular)
- [id](SerpGoogleJobsTasksReadyResultInfo.md#id)
- [se](SerpGoogleJobsTasksReadyResultInfo.md#se)
- [se\_type](SerpGoogleJobsTasksReadyResultInfo.md#se_type)
- [tag](SerpGoogleJobsTasksReadyResultInfo.md#tag)

### Methods

- [init](SerpGoogleJobsTasksReadyResultInfo.md#init)
- [toJSON](SerpGoogleJobsTasksReadyResultInfo.md#tojson)
- [fromJS](SerpGoogleJobsTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleJobsTasksReadyResultInfo**(`data?`): [`SerpGoogleJobsTasksReadyResultInfo`](SerpGoogleJobsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md) |

#### Returns

[`SerpGoogleJobsTasksReadyResultInfo`](SerpGoogleJobsTasksReadyResultInfo.md)

#### Defined in

[main.ts:48707](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48707)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpGoogleJobsTasksReadyResultInfo](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:48692](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48692)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleJobsTasksReadyResultInfo](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:48700](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48700)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleJobsTasksReadyResultInfo](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:48703](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48703)

___


### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleJobsTasksReadyResultInfo](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:48697](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48697)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleJobsTasksReadyResultInfo](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[id](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:48685](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48685)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleJobsTasksReadyResultInfo](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[se](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:48687](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48687)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: jobs

#### Implementation of

[ISerpGoogleJobsTasksReadyResultInfo](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[se_type](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#se_type)

#### Defined in

[main.ts:48690](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48690)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleJobsTasksReadyResultInfo](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[tag](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:48694](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48694)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:48716](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48716)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:48740](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48740)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleJobsTasksReadyResultInfo`](SerpGoogleJobsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleJobsTasksReadyResultInfo`](SerpGoogleJobsTasksReadyResultInfo.md)

#### Defined in

[main.ts:48733](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48733)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")