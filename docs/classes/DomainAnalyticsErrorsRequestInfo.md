[Documentation](../README.md) / [Exports](../modules.md) / DomainAnalyticsErrorsRequestInfo

# Class: DomainAnalyticsErrorsRequestInfo

## Implements

- [`IDomainAnalyticsErrorsRequestInfo`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsErrorsRequestInfo.md#constructor)

### Properties

- [datetime\_from](DomainAnalyticsErrorsRequestInfo.md#datetime_from)
- [datetime\_to](DomainAnalyticsErrorsRequestInfo.md#datetime_to)
- [filtered\_function](DomainAnalyticsErrorsRequestInfo.md#filtered_function)
- [limit](DomainAnalyticsErrorsRequestInfo.md#limit)
- [offset](DomainAnalyticsErrorsRequestInfo.md#offset)

### Methods

- [init](DomainAnalyticsErrorsRequestInfo.md#init)
- [toJSON](DomainAnalyticsErrorsRequestInfo.md#tojson)
- [fromJS](DomainAnalyticsErrorsRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsErrorsRequestInfo**(`data?`): [`DomainAnalyticsErrorsRequestInfo`](DomainAnalyticsErrorsRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsErrorsRequestInfo`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md) |

#### Returns

[`DomainAnalyticsErrorsRequestInfo`](DomainAnalyticsErrorsRequestInfo.md)

#### Defined in

main.ts:71388

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

[IDomainAnalyticsErrorsRequestInfo](../interfaces/IDomainAnalyticsErrorsRequestInfo.md).[datetime_from](../interfaces/IDomainAnalyticsErrorsRequestInfo.md#datetime_from)

#### Defined in

main.ts:71377

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

[IDomainAnalyticsErrorsRequestInfo](../interfaces/IDomainAnalyticsErrorsRequestInfo.md).[datetime_to](../interfaces/IDomainAnalyticsErrorsRequestInfo.md#datetime_to)

#### Defined in

main.ts:71384

___

### filtered\_function

• `Optional` **filtered\_function**: `string`

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: domain_analytics/task_get, postback_url, pingback_url

#### Implementation of

[IDomainAnalyticsErrorsRequestInfo](../interfaces/IDomainAnalyticsErrorsRequestInfo.md).[filtered_function](../interfaces/IDomainAnalyticsErrorsRequestInfo.md#filtered_function)

#### Defined in

main.ts:71370

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[IDomainAnalyticsErrorsRequestInfo](../interfaces/IDomainAnalyticsErrorsRequestInfo.md).[limit](../interfaces/IDomainAnalyticsErrorsRequestInfo.md#limit)

#### Defined in

main.ts:71359

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[IDomainAnalyticsErrorsRequestInfo](../interfaces/IDomainAnalyticsErrorsRequestInfo.md).[offset](../interfaces/IDomainAnalyticsErrorsRequestInfo.md#offset)

#### Defined in

main.ts:71364

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

main.ts:71397

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

main.ts:71418

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsErrorsRequestInfo`](DomainAnalyticsErrorsRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsErrorsRequestInfo`](DomainAnalyticsErrorsRequestInfo.md)

#### Defined in

main.ts:71411
