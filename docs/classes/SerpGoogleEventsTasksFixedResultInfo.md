[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleEventsTasksFixedResultInfo

# Class: SerpGoogleEventsTasksFixedResultInfo

## Implements

- [`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleEventsTasksFixedResultInfo.md#constructor)

### Properties

- [date\_fixed](SerpGoogleEventsTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](SerpGoogleEventsTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpGoogleEventsTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpGoogleEventsTasksFixedResultInfo.md#endpoint_regular)
- [id](SerpGoogleEventsTasksFixedResultInfo.md#id)
- [se](SerpGoogleEventsTasksFixedResultInfo.md#se)
- [se\_type](SerpGoogleEventsTasksFixedResultInfo.md#se_type)
- [tag](SerpGoogleEventsTasksFixedResultInfo.md#tag)

### Methods

- [init](SerpGoogleEventsTasksFixedResultInfo.md#init)
- [toJSON](SerpGoogleEventsTasksFixedResultInfo.md#tojson)
- [fromJS](SerpGoogleEventsTasksFixedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleEventsTasksFixedResultInfo**(`data?`): [`SerpGoogleEventsTasksFixedResultInfo`](SerpGoogleEventsTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md) |

#### Returns

[`SerpGoogleEventsTasksFixedResultInfo`](SerpGoogleEventsTasksFixedResultInfo.md)

#### Defined in

[main.ts:44233](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44233)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[ISerpGoogleEventsTasksFixedResultInfo](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[date_fixed](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#date_fixed)

#### Defined in

[main.ts:44218](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44218)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleEventsTasksFixedResultInfo](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:44226](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44226)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleEventsTasksFixedResultInfo](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#endpoint_html)

#### Defined in

[main.ts:44229](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44229)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleEventsTasksFixedResultInfo](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:44223](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44223)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleEventsTasksFixedResultInfo](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[id](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#id)

#### Defined in

[main.ts:44211](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44211)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleEventsTasksFixedResultInfo](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[se](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#se)

#### Defined in

[main.ts:44213](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44213)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: events

#### Implementation of

[ISerpGoogleEventsTasksFixedResultInfo](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[se_type](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#se_type)

#### Defined in

[main.ts:44216](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44216)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleEventsTasksFixedResultInfo](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[tag](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#tag)

#### Defined in

[main.ts:44220](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44220)

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

[main.ts:44242](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44242)

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

[main.ts:44266](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44266)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleEventsTasksFixedResultInfo`](SerpGoogleEventsTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleEventsTasksFixedResultInfo`](SerpGoogleEventsTasksFixedResultInfo.md)

#### Defined in

[main.ts:44259](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44259)
