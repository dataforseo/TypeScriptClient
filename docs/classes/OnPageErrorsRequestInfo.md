[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageErrorsRequestInfo

# Class: OnPageErrorsRequestInfo

Defined in: main.ts:163342

## Implements

- [`IOnPageErrorsRequestInfo`](../interfaces/IOnPageErrorsRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageErrorsRequestInfo()

> **new OnPageErrorsRequestInfo**(`data`?): [`OnPageErrorsRequestInfo`](OnPageErrorsRequestInfo.md)

Defined in: main.ts:163376

#### Parameters

##### data?

[`IOnPageErrorsRequestInfo`](../interfaces/IOnPageErrorsRequestInfo.md)

#### Returns

[`OnPageErrorsRequestInfo`](OnPageErrorsRequestInfo.md)

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

Defined in: main.ts:163365

start time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 7 days;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 12:57:46 +00:00

#### Implementation of

[`IOnPageErrorsRequestInfo`](../interfaces/IOnPageErrorsRequestInfo.md).[`datetime_from`](../interfaces/IOnPageErrorsRequestInfo.md#datetime_from)

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

Defined in: main.ts:163372

finish time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 7 days;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 13:57:46 +00:00

#### Implementation of

[`IOnPageErrorsRequestInfo`](../interfaces/IOnPageErrorsRequestInfo.md).[`datetime_to`](../interfaces/IOnPageErrorsRequestInfo.md#datetime_to)

***

### filtered\_function?

> `optional` **filtered\_function**: `string`

Defined in: main.ts:163358

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: on_page/task_post, postback_url, pingback_url

#### Implementation of

[`IOnPageErrorsRequestInfo`](../interfaces/IOnPageErrorsRequestInfo.md).[`filtered_function`](../interfaces/IOnPageErrorsRequestInfo.md#filtered_function)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:163347

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IOnPageErrorsRequestInfo`](../interfaces/IOnPageErrorsRequestInfo.md).[`limit`](../interfaces/IOnPageErrorsRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:163352

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[`IOnPageErrorsRequestInfo`](../interfaces/IOnPageErrorsRequestInfo.md).[`offset`](../interfaces/IOnPageErrorsRequestInfo.md#offset)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:163385

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:163406

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageErrorsRequestInfo`](OnPageErrorsRequestInfo.md)

Defined in: main.ts:163399

#### Parameters

##### data

`any`

#### Returns

[`OnPageErrorsRequestInfo`](OnPageErrorsRequestInfo.md)
