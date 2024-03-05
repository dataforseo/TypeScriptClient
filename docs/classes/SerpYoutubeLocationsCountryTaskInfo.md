[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeLocationsCountryTaskInfo

# Class: SerpYoutubeLocationsCountryTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpYoutubeLocationsCountryTaskInfo`**

## Implements

- [`ISerpYoutubeLocationsCountryTaskInfo`](../interfaces/ISerpYoutubeLocationsCountryTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeLocationsCountryTaskInfo.md#constructor)

### Properties

- [cost](SerpYoutubeLocationsCountryTaskInfo.md#cost)
- [data](SerpYoutubeLocationsCountryTaskInfo.md#data)
- [id](SerpYoutubeLocationsCountryTaskInfo.md#id)
- [path](SerpYoutubeLocationsCountryTaskInfo.md#path)
- [result](SerpYoutubeLocationsCountryTaskInfo.md#result)
- [result\_count](SerpYoutubeLocationsCountryTaskInfo.md#result_count)
- [status\_code](SerpYoutubeLocationsCountryTaskInfo.md#status_code)
- [status\_message](SerpYoutubeLocationsCountryTaskInfo.md#status_message)
- [time](SerpYoutubeLocationsCountryTaskInfo.md#time)

### Methods

- [init](SerpYoutubeLocationsCountryTaskInfo.md#init)
- [toJSON](SerpYoutubeLocationsCountryTaskInfo.md#tojson)
- [fromJS](SerpYoutubeLocationsCountryTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeLocationsCountryTaskInfo**(`data?`): [`SerpYoutubeLocationsCountryTaskInfo`](SerpYoutubeLocationsCountryTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeLocationsCountryTaskInfo`](../interfaces/ISerpYoutubeLocationsCountryTaskInfo.md) |

#### Returns

[`SerpYoutubeLocationsCountryTaskInfo`](SerpYoutubeLocationsCountryTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:57462](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57462)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeLocationsCountryTaskInfo](../interfaces/ISerpYoutubeLocationsCountryTaskInfo.md).[cost](../interfaces/ISerpYoutubeLocationsCountryTaskInfo.md#cost)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[cost](BaseResponseTaskInfo.md#cost)

#### Defined in

[main.ts:22602](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22602)

___

### data

• `Optional` **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[ISerpYoutubeLocationsCountryTaskInfo](../interfaces/ISerpYoutubeLocationsCountryTaskInfo.md).[data](../interfaces/ISerpYoutubeLocationsCountryTaskInfo.md#data)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[data](BaseResponseTaskInfo.md#data)

#### Defined in

[main.ts:22608](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22608)

___

### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpYoutubeLocationsCountryTaskInfo](../interfaces/ISerpYoutubeLocationsCountryTaskInfo.md).[id](../interfaces/ISerpYoutubeLocationsCountryTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpYoutubeLocationsCountryTaskInfo](../interfaces/ISerpYoutubeLocationsCountryTaskInfo.md).[path](../interfaces/ISerpYoutubeLocationsCountryTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpYoutubeLocationsCountryResultInfo`](SerpYoutubeLocationsCountryResultInfo.md)[]

array of results

#### Implementation of

[ISerpYoutubeLocationsCountryTaskInfo](../interfaces/ISerpYoutubeLocationsCountryTaskInfo.md).[result](../interfaces/ISerpYoutubeLocationsCountryTaskInfo.md#result)

#### Defined in

[main.ts:57458](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57458)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpYoutubeLocationsCountryTaskInfo](../interfaces/ISerpYoutubeLocationsCountryTaskInfo.md).[result_count](../interfaces/ISerpYoutubeLocationsCountryTaskInfo.md#result_count)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[result_count](BaseResponseTaskInfo.md#result_count)

#### Defined in

[main.ts:22604](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22604)

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[ISerpYoutubeLocationsCountryTaskInfo](../interfaces/ISerpYoutubeLocationsCountryTaskInfo.md).[status_code](../interfaces/ISerpYoutubeLocationsCountryTaskInfo.md#status_code)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_code](BaseResponseTaskInfo.md#status_code)

#### Defined in

[main.ts:22595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22595)

___

### status\_message

• `Optional` **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[ISerpYoutubeLocationsCountryTaskInfo](../interfaces/ISerpYoutubeLocationsCountryTaskInfo.md).[status_message](../interfaces/ISerpYoutubeLocationsCountryTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpYoutubeLocationsCountryTaskInfo](../interfaces/ISerpYoutubeLocationsCountryTaskInfo.md).[time](../interfaces/ISerpYoutubeLocationsCountryTaskInfo.md#time)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[time](BaseResponseTaskInfo.md#time)

#### Defined in

[main.ts:22600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22600)

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

[main.ts:57466](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57466)

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

[main.ts:57488](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57488)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeLocationsCountryTaskInfo`](SerpYoutubeLocationsCountryTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeLocationsCountryTaskInfo`](SerpYoutubeLocationsCountryTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:57481](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57481)
