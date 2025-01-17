[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataErrorsRequestInfo

# Class: AppDataErrorsRequestInfo

Defined in: main.ts:198214

## Implements

- [`IAppDataErrorsRequestInfo`](../interfaces/IAppDataErrorsRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataErrorsRequestInfo()

> **new AppDataErrorsRequestInfo**(`data`?): [`AppDataErrorsRequestInfo`](AppDataErrorsRequestInfo.md)

Defined in: main.ts:198248

#### Parameters

##### data?

[`IAppDataErrorsRequestInfo`](../interfaces/IAppDataErrorsRequestInfo.md)

#### Returns

[`AppDataErrorsRequestInfo`](AppDataErrorsRequestInfo.md)

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

Defined in: main.ts:198237

start time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 7 days;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataErrorsRequestInfo`](../interfaces/IAppDataErrorsRequestInfo.md).[`datetime_from`](../interfaces/IAppDataErrorsRequestInfo.md#datetime_from)

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

Defined in: main.ts:198244

finish time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 7 days;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 13:57:46 +00:00

#### Implementation of

[`IAppDataErrorsRequestInfo`](../interfaces/IAppDataErrorsRequestInfo.md).[`datetime_to`](../interfaces/IAppDataErrorsRequestInfo.md#datetime_to)

***

### filtered\_function?

> `optional` **filtered\_function**: `string`

Defined in: main.ts:198230

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: app_data/task_get/advanced, postback_url, pingback_url

#### Implementation of

[`IAppDataErrorsRequestInfo`](../interfaces/IAppDataErrorsRequestInfo.md).[`filtered_function`](../interfaces/IAppDataErrorsRequestInfo.md#filtered_function)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:198219

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IAppDataErrorsRequestInfo`](../interfaces/IAppDataErrorsRequestInfo.md).[`limit`](../interfaces/IAppDataErrorsRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:198224

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[`IAppDataErrorsRequestInfo`](../interfaces/IAppDataErrorsRequestInfo.md).[`offset`](../interfaces/IAppDataErrorsRequestInfo.md#offset)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:198257

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:198278

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataErrorsRequestInfo`](AppDataErrorsRequestInfo.md)

Defined in: main.ts:198271

#### Parameters

##### data

`any`

#### Returns

[`AppDataErrorsRequestInfo`](AppDataErrorsRequestInfo.md)
