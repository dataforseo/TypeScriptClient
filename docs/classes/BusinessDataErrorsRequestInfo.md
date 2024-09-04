[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataErrorsRequestInfo

# Class: BusinessDataErrorsRequestInfo

## Implements

- [`IBusinessDataErrorsRequestInfo`](../interfaces/IBusinessDataErrorsRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataErrorsRequestInfo()

> **new BusinessDataErrorsRequestInfo**(`data`?): [`BusinessDataErrorsRequestInfo`](BusinessDataErrorsRequestInfo.md)

#### Parameters

• **data?**: [`IBusinessDataErrorsRequestInfo`](../interfaces/IBusinessDataErrorsRequestInfo.md)

#### Returns

[`BusinessDataErrorsRequestInfo`](BusinessDataErrorsRequestInfo.md)

#### Defined in

main.ts:201927

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

start time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 24 hours;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataErrorsRequestInfo`](../interfaces/IBusinessDataErrorsRequestInfo.md).[`datetime_from`](../interfaces/IBusinessDataErrorsRequestInfo.md#datetime_from)

#### Defined in

main.ts:201916

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

finish time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 24 hours;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 13:57:46 +00:00

#### Implementation of

[`IBusinessDataErrorsRequestInfo`](../interfaces/IBusinessDataErrorsRequestInfo.md).[`datetime_to`](../interfaces/IBusinessDataErrorsRequestInfo.md#datetime_to)

#### Defined in

main.ts:201923

***

### filtered\_function?

> `optional` **filtered\_function**: `string`

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: hotel_searches/task_post, postback_url, pingback_url

#### Implementation of

[`IBusinessDataErrorsRequestInfo`](../interfaces/IBusinessDataErrorsRequestInfo.md).[`filtered_function`](../interfaces/IBusinessDataErrorsRequestInfo.md#filtered_function)

#### Defined in

main.ts:201909

***

### limit?

> `optional` **limit**: `number`

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IBusinessDataErrorsRequestInfo`](../interfaces/IBusinessDataErrorsRequestInfo.md).[`limit`](../interfaces/IBusinessDataErrorsRequestInfo.md#limit)

#### Defined in

main.ts:201898

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[`IBusinessDataErrorsRequestInfo`](../interfaces/IBusinessDataErrorsRequestInfo.md).[`offset`](../interfaces/IBusinessDataErrorsRequestInfo.md#offset)

#### Defined in

main.ts:201903

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:201936

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:201957

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataErrorsRequestInfo`](BusinessDataErrorsRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataErrorsRequestInfo`](BusinessDataErrorsRequestInfo.md)

#### Defined in

main.ts:201950
