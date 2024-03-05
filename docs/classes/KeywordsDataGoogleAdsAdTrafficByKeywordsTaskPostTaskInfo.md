[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo

# Class: KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo`**

## Implements

- [`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md#cost)
- [data](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md#data)
- [id](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md#id)
- [path](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md#path)
- [result](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md#result)
- [result\_count](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md#result_count)
- [status\_code](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md#status_message)
- [time](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md#time)

### Methods

- [init](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo**(`data?`): [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:117896](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117896)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md#cost)

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

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md).[data](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md#data)

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

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md).[id](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md).[path](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: `any`

array of results
in this case, the value will be null

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md).[result](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:117892](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117892)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md).[result_count](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md#result_count)

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

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md#status_code)

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

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md#time)

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

[main.ts:117900](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117900)

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

[main.ts:117918](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117918)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:117911](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117911)
