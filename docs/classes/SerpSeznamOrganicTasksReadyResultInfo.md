[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpSeznamOrganicTasksReadyResultInfo

# Class: SerpSeznamOrganicTasksReadyResultInfo

## Implements

- [`ISerpSeznamOrganicTasksReadyResultInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpSeznamOrganicTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](SerpSeznamOrganicTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](SerpSeznamOrganicTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpSeznamOrganicTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpSeznamOrganicTasksReadyResultInfo.md#endpoint_regular)
- [id](SerpSeznamOrganicTasksReadyResultInfo.md#id)
- [se](SerpSeznamOrganicTasksReadyResultInfo.md#se)
- [se\_type](SerpSeznamOrganicTasksReadyResultInfo.md#se_type)
- [tag](SerpSeznamOrganicTasksReadyResultInfo.md#tag)

### Methods

- [init](SerpSeznamOrganicTasksReadyResultInfo.md#init)
- [toJSON](SerpSeznamOrganicTasksReadyResultInfo.md#tojson)
- [fromJS](SerpSeznamOrganicTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpSeznamOrganicTasksReadyResultInfo**(`data?`): [`SerpSeznamOrganicTasksReadyResultInfo`](SerpSeznamOrganicTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpSeznamOrganicTasksReadyResultInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md) |

#### Returns

[`SerpSeznamOrganicTasksReadyResultInfo`](SerpSeznamOrganicTasksReadyResultInfo.md)

#### Defined in

[main.ts:69717](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69717)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpSeznamOrganicTasksReadyResultInfo](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:69702](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69702)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpSeznamOrganicTasksReadyResultInfo](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:69710](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69710)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpSeznamOrganicTasksReadyResultInfo](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:69713](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69713)

___


### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpSeznamOrganicTasksReadyResultInfo](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:69707](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69707)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpSeznamOrganicTasksReadyResultInfo](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[id](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:69695](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69695)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpSeznamOrganicTasksReadyResultInfo](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[se](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:69697](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69697)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[ISerpSeznamOrganicTasksReadyResultInfo](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[se_type](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#se_type)

#### Defined in

[main.ts:69700](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69700)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpSeznamOrganicTasksReadyResultInfo](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md).[tag](../interfaces/ISerpSeznamOrganicTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:69704](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69704)

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

[main.ts:69726](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69726)

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

[main.ts:69750](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69750)

___


### fromJS

▸ **fromJS**(`data`): [`SerpSeznamOrganicTasksReadyResultInfo`](SerpSeznamOrganicTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpSeznamOrganicTasksReadyResultInfo`](SerpSeznamOrganicTasksReadyResultInfo.md)

#### Defined in

[main.ts:69743](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69743)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")