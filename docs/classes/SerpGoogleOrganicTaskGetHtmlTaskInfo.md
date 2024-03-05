[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicTaskGetHtmlTaskInfo

# Class: SerpGoogleOrganicTaskGetHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpGoogleOrganicTaskGetHtmlTaskInfo`**

## Implements

- [`ISerpGoogleOrganicTaskGetHtmlTaskInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicTaskGetHtmlTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleOrganicTaskGetHtmlTaskInfo.md#cost)
- [data](SerpGoogleOrganicTaskGetHtmlTaskInfo.md#data)
- [id](SerpGoogleOrganicTaskGetHtmlTaskInfo.md#id)
- [path](SerpGoogleOrganicTaskGetHtmlTaskInfo.md#path)
- [result](SerpGoogleOrganicTaskGetHtmlTaskInfo.md#result)
- [result\_count](SerpGoogleOrganicTaskGetHtmlTaskInfo.md#result_count)
- [status\_code](SerpGoogleOrganicTaskGetHtmlTaskInfo.md#status_code)
- [status\_message](SerpGoogleOrganicTaskGetHtmlTaskInfo.md#status_message)
- [time](SerpGoogleOrganicTaskGetHtmlTaskInfo.md#time)

### Methods

- [init](SerpGoogleOrganicTaskGetHtmlTaskInfo.md#init)
- [toJSON](SerpGoogleOrganicTaskGetHtmlTaskInfo.md#tojson)
- [fromJS](SerpGoogleOrganicTaskGetHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicTaskGetHtmlTaskInfo**(`data?`): [`SerpGoogleOrganicTaskGetHtmlTaskInfo`](SerpGoogleOrganicTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicTaskGetHtmlTaskInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlTaskInfo.md) |

#### Returns

[`SerpGoogleOrganicTaskGetHtmlTaskInfo`](SerpGoogleOrganicTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:36462](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36462)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlTaskInfo.md).[cost](../interfaces/ISerpGoogleOrganicTaskGetHtmlTaskInfo.md#cost)

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

[ISerpGoogleOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlTaskInfo.md).[data](../interfaces/ISerpGoogleOrganicTaskGetHtmlTaskInfo.md#data)

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

[ISerpGoogleOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlTaskInfo.md).[id](../interfaces/ISerpGoogleOrganicTaskGetHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlTaskInfo.md).[path](../interfaces/ISerpGoogleOrganicTaskGetHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpGoogleOrganicTaskGetHtmlResultInfo`](SerpGoogleOrganicTaskGetHtmlResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlTaskInfo.md).[result](../interfaces/ISerpGoogleOrganicTaskGetHtmlTaskInfo.md#result)

#### Defined in

[main.ts:36458](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36458)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlTaskInfo.md).[result_count](../interfaces/ISerpGoogleOrganicTaskGetHtmlTaskInfo.md#result_count)

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

[ISerpGoogleOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlTaskInfo.md).[status_code](../interfaces/ISerpGoogleOrganicTaskGetHtmlTaskInfo.md#status_code)

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

[ISerpGoogleOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlTaskInfo.md).[status_message](../interfaces/ISerpGoogleOrganicTaskGetHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleOrganicTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlTaskInfo.md).[time](../interfaces/ISerpGoogleOrganicTaskGetHtmlTaskInfo.md#time)

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

[main.ts:36466](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36466)

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

[main.ts:36488](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36488)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicTaskGetHtmlTaskInfo`](SerpGoogleOrganicTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicTaskGetHtmlTaskInfo`](SerpGoogleOrganicTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:36481](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36481)
