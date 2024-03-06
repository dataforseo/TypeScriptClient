[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicLiveHtmlTaskInfo

# Class: SerpGoogleOrganicLiveHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleOrganicLiveHtmlTaskInfo`**

## Implements

- [`ISerpGoogleOrganicLiveHtmlTaskInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicLiveHtmlTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleOrganicLiveHtmlTaskInfo.md#cost)
- [data](SerpGoogleOrganicLiveHtmlTaskInfo.md#data)
- [id](SerpGoogleOrganicLiveHtmlTaskInfo.md#id)
- [path](SerpGoogleOrganicLiveHtmlTaskInfo.md#path)
- [result](SerpGoogleOrganicLiveHtmlTaskInfo.md#result)
- [result\_count](SerpGoogleOrganicLiveHtmlTaskInfo.md#result_count)
- [status\_code](SerpGoogleOrganicLiveHtmlTaskInfo.md#status_code)
- [status\_message](SerpGoogleOrganicLiveHtmlTaskInfo.md#status_message)
- [time](SerpGoogleOrganicLiveHtmlTaskInfo.md#time)

### Methods

- [init](SerpGoogleOrganicLiveHtmlTaskInfo.md#init)
- [toJSON](SerpGoogleOrganicLiveHtmlTaskInfo.md#tojson)
- [fromJS](SerpGoogleOrganicLiveHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicLiveHtmlTaskInfo**(`data?`): [`SerpGoogleOrganicLiveHtmlTaskInfo`](SerpGoogleOrganicLiveHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicLiveHtmlTaskInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlTaskInfo.md) |

#### Returns

[`SerpGoogleOrganicLiveHtmlTaskInfo`](SerpGoogleOrganicLiveHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:37208](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37208)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleOrganicLiveHtmlTaskInfo](../interfaces/ISerpGoogleOrganicLiveHtmlTaskInfo.md).[cost](../interfaces/ISerpGoogleOrganicLiveHtmlTaskInfo.md#cost)

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

[ISerpGoogleOrganicLiveHtmlTaskInfo](../interfaces/ISerpGoogleOrganicLiveHtmlTaskInfo.md).[data](../interfaces/ISerpGoogleOrganicLiveHtmlTaskInfo.md#data)

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

[ISerpGoogleOrganicLiveHtmlTaskInfo](../interfaces/ISerpGoogleOrganicLiveHtmlTaskInfo.md).[id](../interfaces/ISerpGoogleOrganicLiveHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleOrganicLiveHtmlTaskInfo](../interfaces/ISerpGoogleOrganicLiveHtmlTaskInfo.md).[path](../interfaces/ISerpGoogleOrganicLiveHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleOrganicLiveHtmlResultInfo`](SerpGoogleOrganicLiveHtmlResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleOrganicLiveHtmlTaskInfo](../interfaces/ISerpGoogleOrganicLiveHtmlTaskInfo.md).[result](../interfaces/ISerpGoogleOrganicLiveHtmlTaskInfo.md#result)

#### Defined in

[main.ts:37204](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37204)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleOrganicLiveHtmlTaskInfo](../interfaces/ISerpGoogleOrganicLiveHtmlTaskInfo.md).[result_count](../interfaces/ISerpGoogleOrganicLiveHtmlTaskInfo.md#result_count)

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

[ISerpGoogleOrganicLiveHtmlTaskInfo](../interfaces/ISerpGoogleOrganicLiveHtmlTaskInfo.md).[status_code](../interfaces/ISerpGoogleOrganicLiveHtmlTaskInfo.md#status_code)

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

[ISerpGoogleOrganicLiveHtmlTaskInfo](../interfaces/ISerpGoogleOrganicLiveHtmlTaskInfo.md).[status_message](../interfaces/ISerpGoogleOrganicLiveHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleOrganicLiveHtmlTaskInfo](../interfaces/ISerpGoogleOrganicLiveHtmlTaskInfo.md).[time](../interfaces/ISerpGoogleOrganicLiveHtmlTaskInfo.md#time)

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

[main.ts:37212](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37212)

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

[main.ts:37234](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37234)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicLiveHtmlTaskInfo`](SerpGoogleOrganicLiveHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicLiveHtmlTaskInfo`](SerpGoogleOrganicLiveHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:37227](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37227)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")