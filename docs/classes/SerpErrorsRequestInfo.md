[Documentation](../README.md) / [Exports](../modules.md) / SerpErrorsRequestInfo

# Class: SerpErrorsRequestInfo

## Implements

- [`ISerpErrorsRequestInfo`](../interfaces/ISerpErrorsRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpErrorsRequestInfo.md#constructor)

### Properties

- [datetime\_from](SerpErrorsRequestInfo.md#datetime_from)
- [datetime\_to](SerpErrorsRequestInfo.md#datetime_to)
- [filtered\_function](SerpErrorsRequestInfo.md#filtered_function)
- [limit](SerpErrorsRequestInfo.md#limit)
- [offset](SerpErrorsRequestInfo.md#offset)

### Methods

- [init](SerpErrorsRequestInfo.md#init)
- [toJSON](SerpErrorsRequestInfo.md#tojson)
- [fromJS](SerpErrorsRequestInfo.md#fromjs)

## Constructors

### constructor

• **new SerpErrorsRequestInfo**(`data?`): [`SerpErrorsRequestInfo`](SerpErrorsRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpErrorsRequestInfo`](../interfaces/ISerpErrorsRequestInfo.md) |

#### Returns

[`SerpErrorsRequestInfo`](SerpErrorsRequestInfo.md)

#### Defined in

main.ts:23232

## Properties

### datetime\_from

• `Optional` **datetime\_from**: `string`

start time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 24 hours;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 12:57:46 +00:00

#### Implementation of

[ISerpErrorsRequestInfo](../interfaces/ISerpErrorsRequestInfo.md).[datetime_from](../interfaces/ISerpErrorsRequestInfo.md#datetime_from)

#### Defined in

main.ts:23221

___

### datetime\_to

• `Optional` **datetime\_to**: `string`

finish time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 24 hours;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 13:57:46 +00:00

#### Implementation of

[ISerpErrorsRequestInfo](../interfaces/ISerpErrorsRequestInfo.md).[datetime_to](../interfaces/ISerpErrorsRequestInfo.md#datetime_to)

#### Defined in

main.ts:23228

___

### filtered\_function

• `Optional` **filtered\_function**: `string`

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: serp/task_get/advanced, postback_url, pingback_url

#### Implementation of

[ISerpErrorsRequestInfo](../interfaces/ISerpErrorsRequestInfo.md).[filtered_function](../interfaces/ISerpErrorsRequestInfo.md#filtered_function)

#### Defined in

main.ts:23214

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[ISerpErrorsRequestInfo](../interfaces/ISerpErrorsRequestInfo.md).[limit](../interfaces/ISerpErrorsRequestInfo.md#limit)

#### Defined in

main.ts:23203

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[ISerpErrorsRequestInfo](../interfaces/ISerpErrorsRequestInfo.md).[offset](../interfaces/ISerpErrorsRequestInfo.md#offset)

#### Defined in

main.ts:23208

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

main.ts:23241

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

main.ts:23262

___

### fromJS

▸ **fromJS**(`data`): [`SerpErrorsRequestInfo`](SerpErrorsRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpErrorsRequestInfo`](SerpErrorsRequestInfo.md)

#### Defined in

main.ts:23255
