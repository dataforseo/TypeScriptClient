[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / OnPageErrorsRequestInfo

# Class: OnPageErrorsRequestInfo

## Implements

- [`IOnPageErrorsRequestInfo`](../interfaces/IOnPageErrorsRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageErrorsRequestInfo()

> **new OnPageErrorsRequestInfo**(`data`?): [`OnPageErrorsRequestInfo`](OnPageErrorsRequestInfo.md)

#### Parameters

• **data?**: [`IOnPageErrorsRequestInfo`](../interfaces/IOnPageErrorsRequestInfo.md)

#### Returns

[`OnPageErrorsRequestInfo`](OnPageErrorsRequestInfo.md)

#### Defined in

main.ts:152103

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

[`IOnPageErrorsRequestInfo`](../interfaces/IOnPageErrorsRequestInfo.md).[`datetime_from`](../interfaces/IOnPageErrorsRequestInfo.md#datetime_from)

#### Defined in

main.ts:152092

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

[`IOnPageErrorsRequestInfo`](../interfaces/IOnPageErrorsRequestInfo.md).[`datetime_to`](../interfaces/IOnPageErrorsRequestInfo.md#datetime_to)

#### Defined in

main.ts:152099

***

### filtered\_function?

> `optional` **filtered\_function**: `string`

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: on_page/task_post, postback_url, pingback_url

#### Implementation of

[`IOnPageErrorsRequestInfo`](../interfaces/IOnPageErrorsRequestInfo.md).[`filtered_function`](../interfaces/IOnPageErrorsRequestInfo.md#filtered_function)

#### Defined in

main.ts:152085

***

### limit?

> `optional` **limit**: `number`

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IOnPageErrorsRequestInfo`](../interfaces/IOnPageErrorsRequestInfo.md).[`limit`](../interfaces/IOnPageErrorsRequestInfo.md#limit)

#### Defined in

main.ts:152074

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[`IOnPageErrorsRequestInfo`](../interfaces/IOnPageErrorsRequestInfo.md).[`offset`](../interfaces/IOnPageErrorsRequestInfo.md#offset)

#### Defined in

main.ts:152079

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:152112

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:152133

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageErrorsRequestInfo`](OnPageErrorsRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageErrorsRequestInfo`](OnPageErrorsRequestInfo.md)

#### Defined in

main.ts:152126
