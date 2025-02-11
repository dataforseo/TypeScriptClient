[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataErrorsRequestInfo

# Class: BusinessDataErrorsRequestInfo

Defined in: main.ts:210228

## Implements

- [`IBusinessDataErrorsRequestInfo`](../interfaces/IBusinessDataErrorsRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataErrorsRequestInfo()

> **new BusinessDataErrorsRequestInfo**(`data`?): [`BusinessDataErrorsRequestInfo`](BusinessDataErrorsRequestInfo.md)

Defined in: main.ts:210262

#### Parameters

##### data?

[`IBusinessDataErrorsRequestInfo`](../interfaces/IBusinessDataErrorsRequestInfo.md)

#### Returns

[`BusinessDataErrorsRequestInfo`](BusinessDataErrorsRequestInfo.md)

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

Defined in: main.ts:210251

start time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 7 days;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataErrorsRequestInfo`](../interfaces/IBusinessDataErrorsRequestInfo.md).[`datetime_from`](../interfaces/IBusinessDataErrorsRequestInfo.md#datetime_from)

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

Defined in: main.ts:210258

finish time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 7 days;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 13:57:46 +00:00

#### Implementation of

[`IBusinessDataErrorsRequestInfo`](../interfaces/IBusinessDataErrorsRequestInfo.md).[`datetime_to`](../interfaces/IBusinessDataErrorsRequestInfo.md#datetime_to)

***

### filtered\_function?

> `optional` **filtered\_function**: `string`

Defined in: main.ts:210244

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: hotel_searches/task_post, postback_url, pingback_url

#### Implementation of

[`IBusinessDataErrorsRequestInfo`](../interfaces/IBusinessDataErrorsRequestInfo.md).[`filtered_function`](../interfaces/IBusinessDataErrorsRequestInfo.md#filtered_function)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:210233

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IBusinessDataErrorsRequestInfo`](../interfaces/IBusinessDataErrorsRequestInfo.md).[`limit`](../interfaces/IBusinessDataErrorsRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:210238

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[`IBusinessDataErrorsRequestInfo`](../interfaces/IBusinessDataErrorsRequestInfo.md).[`offset`](../interfaces/IBusinessDataErrorsRequestInfo.md#offset)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:210271

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:210292

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataErrorsRequestInfo`](BusinessDataErrorsRequestInfo.md)

Defined in: main.ts:210285

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataErrorsRequestInfo`](BusinessDataErrorsRequestInfo.md)
