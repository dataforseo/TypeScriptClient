[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicTasksReadyResultInfo

# Class: SerpGoogleOrganicTasksReadyResultInfo

## Implements

- [`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](SerpGoogleOrganicTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](SerpGoogleOrganicTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpGoogleOrganicTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpGoogleOrganicTasksReadyResultInfo.md#endpoint_regular)
- [id](SerpGoogleOrganicTasksReadyResultInfo.md#id)
- [se](SerpGoogleOrganicTasksReadyResultInfo.md#se)
- [se\_type](SerpGoogleOrganicTasksReadyResultInfo.md#se_type)
- [tag](SerpGoogleOrganicTasksReadyResultInfo.md#tag)

### Methods

- [init](SerpGoogleOrganicTasksReadyResultInfo.md#init)
- [toJSON](SerpGoogleOrganicTasksReadyResultInfo.md#tojson)
- [fromJS](SerpGoogleOrganicTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicTasksReadyResultInfo**(`data?`): [`SerpGoogleOrganicTasksReadyResultInfo`](SerpGoogleOrganicTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md) |

#### Returns

[`SerpGoogleOrganicTasksReadyResultInfo`](SerpGoogleOrganicTasksReadyResultInfo.md)

#### Defined in

[main.ts:24749](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24749)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpGoogleOrganicTasksReadyResultInfo](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:24734](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24734)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleOrganicTasksReadyResultInfo](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:24742](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24742)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleOrganicTasksReadyResultInfo](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:24745](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24745)

___


### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleOrganicTasksReadyResultInfo](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:24739](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24739)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleOrganicTasksReadyResultInfo](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[id](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:24727](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24727)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleOrganicTasksReadyResultInfo](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[se](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:24729](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24729)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[ISerpGoogleOrganicTasksReadyResultInfo](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[se_type](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#se_type)

#### Defined in

[main.ts:24732](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24732)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleOrganicTasksReadyResultInfo](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[tag](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:24736](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24736)

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

[main.ts:24758](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24758)

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

[main.ts:24782](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24782)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicTasksReadyResultInfo`](SerpGoogleOrganicTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicTasksReadyResultInfo`](SerpGoogleOrganicTasksReadyResultInfo.md)

#### Defined in

[main.ts:24775](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24775)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")