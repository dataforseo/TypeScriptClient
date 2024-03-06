[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleSearchByImageTasksFixedResultInfo

# Class: SerpGoogleSearchByImageTasksFixedResultInfo

## Implements

- [`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleSearchByImageTasksFixedResultInfo.md#constructor)

### Properties

- [date\_fixed](SerpGoogleSearchByImageTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](SerpGoogleSearchByImageTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpGoogleSearchByImageTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpGoogleSearchByImageTasksFixedResultInfo.md#endpoint_regular)
- [id](SerpGoogleSearchByImageTasksFixedResultInfo.md#id)
- [se](SerpGoogleSearchByImageTasksFixedResultInfo.md#se)
- [se\_type](SerpGoogleSearchByImageTasksFixedResultInfo.md#se_type)
- [tag](SerpGoogleSearchByImageTasksFixedResultInfo.md#tag)

### Methods

- [init](SerpGoogleSearchByImageTasksFixedResultInfo.md#init)
- [toJSON](SerpGoogleSearchByImageTasksFixedResultInfo.md#tojson)
- [fromJS](SerpGoogleSearchByImageTasksFixedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleSearchByImageTasksFixedResultInfo**(`data?`): [`SerpGoogleSearchByImageTasksFixedResultInfo`](SerpGoogleSearchByImageTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md) |

#### Returns

[`SerpGoogleSearchByImageTasksFixedResultInfo`](SerpGoogleSearchByImageTasksFixedResultInfo.md)

#### Defined in

[main.ts:47827](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47827)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[ISerpGoogleSearchByImageTasksFixedResultInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[date_fixed](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#date_fixed)

#### Defined in

[main.ts:47812](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47812)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleSearchByImageTasksFixedResultInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:47820](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47820)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleSearchByImageTasksFixedResultInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#endpoint_html)

#### Defined in

[main.ts:47823](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47823)

___


### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleSearchByImageTasksFixedResultInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:47817](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47817)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleSearchByImageTasksFixedResultInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[id](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#id)

#### Defined in

[main.ts:47805](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47805)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleSearchByImageTasksFixedResultInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[se](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#se)

#### Defined in

[main.ts:47807](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47807)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: search_by_image

#### Implementation of

[ISerpGoogleSearchByImageTasksFixedResultInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[se_type](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#se_type)

#### Defined in

[main.ts:47810](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47810)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleSearchByImageTasksFixedResultInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[tag](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#tag)

#### Defined in

[main.ts:47814](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47814)

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

[main.ts:47836](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47836)

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

[main.ts:47860](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47860)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleSearchByImageTasksFixedResultInfo`](SerpGoogleSearchByImageTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleSearchByImageTasksFixedResultInfo`](SerpGoogleSearchByImageTasksFixedResultInfo.md)

#### Defined in

[main.ts:47853](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47853)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")