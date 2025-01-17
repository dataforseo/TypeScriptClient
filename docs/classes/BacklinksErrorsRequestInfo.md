[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksErrorsRequestInfo

# Class: BacklinksErrorsRequestInfo

Defined in: main.ts:149104

## Implements

- [`IBacklinksErrorsRequestInfo`](../interfaces/IBacklinksErrorsRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksErrorsRequestInfo()

> **new BacklinksErrorsRequestInfo**(`data`?): [`BacklinksErrorsRequestInfo`](BacklinksErrorsRequestInfo.md)

Defined in: main.ts:149138

#### Parameters

##### data?

[`IBacklinksErrorsRequestInfo`](../interfaces/IBacklinksErrorsRequestInfo.md)

#### Returns

[`BacklinksErrorsRequestInfo`](BacklinksErrorsRequestInfo.md)

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

Defined in: main.ts:149127

start time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 7 days;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksErrorsRequestInfo`](../interfaces/IBacklinksErrorsRequestInfo.md).[`datetime_from`](../interfaces/IBacklinksErrorsRequestInfo.md#datetime_from)

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

Defined in: main.ts:149134

finish time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 7 days;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 13:57:46 +00:00

#### Implementation of

[`IBacklinksErrorsRequestInfo`](../interfaces/IBacklinksErrorsRequestInfo.md).[`datetime_to`](../interfaces/IBacklinksErrorsRequestInfo.md#datetime_to)

***

### filtered\_function?

> `optional` **filtered\_function**: `string`

Defined in: main.ts:149120

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: backlinks/live

#### Implementation of

[`IBacklinksErrorsRequestInfo`](../interfaces/IBacklinksErrorsRequestInfo.md).[`filtered_function`](../interfaces/IBacklinksErrorsRequestInfo.md#filtered_function)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:149109

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IBacklinksErrorsRequestInfo`](../interfaces/IBacklinksErrorsRequestInfo.md).[`limit`](../interfaces/IBacklinksErrorsRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:149114

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[`IBacklinksErrorsRequestInfo`](../interfaces/IBacklinksErrorsRequestInfo.md).[`offset`](../interfaces/IBacklinksErrorsRequestInfo.md#offset)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:149147

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:149168

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksErrorsRequestInfo`](BacklinksErrorsRequestInfo.md)

Defined in: main.ts:149161

#### Parameters

##### data

`any`

#### Returns

[`BacklinksErrorsRequestInfo`](BacklinksErrorsRequestInfo.md)
