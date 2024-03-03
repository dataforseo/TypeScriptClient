[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsErrorsRequestInfo

# Class: DataforseoLabsErrorsRequestInfo

## Implements

- [`IDataforseoLabsErrorsRequestInfo`](../interfaces/IDataforseoLabsErrorsRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsErrorsRequestInfo.md#constructor)

### Properties

- [datetime\_from](DataforseoLabsErrorsRequestInfo.md#datetime_from)
- [datetime\_to](DataforseoLabsErrorsRequestInfo.md#datetime_to)
- [filtered\_function](DataforseoLabsErrorsRequestInfo.md#filtered_function)
- [limit](DataforseoLabsErrorsRequestInfo.md#limit)
- [offset](DataforseoLabsErrorsRequestInfo.md#offset)

### Methods

- [init](DataforseoLabsErrorsRequestInfo.md#init)
- [toJSON](DataforseoLabsErrorsRequestInfo.md#tojson)
- [fromJS](DataforseoLabsErrorsRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsErrorsRequestInfo**(`data?`): [`DataforseoLabsErrorsRequestInfo`](DataforseoLabsErrorsRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsErrorsRequestInfo`](../interfaces/IDataforseoLabsErrorsRequestInfo.md) |

#### Returns

[`DataforseoLabsErrorsRequestInfo`](DataforseoLabsErrorsRequestInfo.md)

#### Defined in

main.ts:77176

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

[IDataforseoLabsErrorsRequestInfo](../interfaces/IDataforseoLabsErrorsRequestInfo.md).[datetime_from](../interfaces/IDataforseoLabsErrorsRequestInfo.md#datetime_from)

#### Defined in

main.ts:77165

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

[IDataforseoLabsErrorsRequestInfo](../interfaces/IDataforseoLabsErrorsRequestInfo.md).[datetime_to](../interfaces/IDataforseoLabsErrorsRequestInfo.md#datetime_to)

#### Defined in

main.ts:77172

___

### filtered\_function

• `Optional` **filtered\_function**: `string`

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: dataforseo_labs/related_keywords/live

#### Implementation of

[IDataforseoLabsErrorsRequestInfo](../interfaces/IDataforseoLabsErrorsRequestInfo.md).[filtered_function](../interfaces/IDataforseoLabsErrorsRequestInfo.md#filtered_function)

#### Defined in

main.ts:77158

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[IDataforseoLabsErrorsRequestInfo](../interfaces/IDataforseoLabsErrorsRequestInfo.md).[limit](../interfaces/IDataforseoLabsErrorsRequestInfo.md#limit)

#### Defined in

main.ts:77147

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[IDataforseoLabsErrorsRequestInfo](../interfaces/IDataforseoLabsErrorsRequestInfo.md).[offset](../interfaces/IDataforseoLabsErrorsRequestInfo.md#offset)

#### Defined in

main.ts:77152

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

main.ts:77185

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

main.ts:77206

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsErrorsRequestInfo`](DataforseoLabsErrorsRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsErrorsRequestInfo`](DataforseoLabsErrorsRequestInfo.md)

#### Defined in

main.ts:77199
