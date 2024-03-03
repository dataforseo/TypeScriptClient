[Documentation](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo

# Class: SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo`**

## Implements

- [`ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md#cost)
- [data](SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md#data)
- [id](SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md#id)
- [path](SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md#path)
- [result](SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md#result)
- [result\_count](SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md#status_message)
- [time](SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md#init)
- [toJSON](SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo**(`data?`): [`SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md) |

#### Returns

[`SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:60624

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md).[cost](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md#cost)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[cost](BaseResponseTaskInfo.md#cost)

#### Defined in

main.ts:22744

___

### data

• `Optional` **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md).[data](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md#data)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[data](BaseResponseTaskInfo.md#data)

#### Defined in

main.ts:22750

___

### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md).[id](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:22733

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md).[path](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:22748

___

### result

• `Optional` **result**: [`SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md).[result](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md#result)

#### Defined in

main.ts:60620

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md#result_count)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[result_count](BaseResponseTaskInfo.md#result_count)

#### Defined in

main.ts:22746

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md#status_code)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_code](BaseResponseTaskInfo.md#status_code)

#### Defined in

main.ts:22737

___

### status\_message

• `Optional` **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:22740

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md).[time](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md#time)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[time](BaseResponseTaskInfo.md#time)

#### Defined in

main.ts:22742

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[init](BaseResponseTaskInfo.md#init)

#### Defined in

main.ts:60628

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[toJSON](BaseResponseTaskInfo.md#tojson)

#### Defined in

main.ts:60650

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:60643
