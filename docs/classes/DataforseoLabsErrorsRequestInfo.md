[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsErrorsRequestInfo

# Class: DataforseoLabsErrorsRequestInfo

Defined in: main.ts:90498

## Implements

- [`IDataforseoLabsErrorsRequestInfo`](../interfaces/IDataforseoLabsErrorsRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsErrorsRequestInfo()

> **new DataforseoLabsErrorsRequestInfo**(`data`?): [`DataforseoLabsErrorsRequestInfo`](DataforseoLabsErrorsRequestInfo.md)

Defined in: main.ts:90532

#### Parameters

##### data?

[`IDataforseoLabsErrorsRequestInfo`](../interfaces/IDataforseoLabsErrorsRequestInfo.md)

#### Returns

[`DataforseoLabsErrorsRequestInfo`](DataforseoLabsErrorsRequestInfo.md)

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

Defined in: main.ts:90521

start time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 7 days;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 12:57:46 +00:00

#### Implementation of

[`IDataforseoLabsErrorsRequestInfo`](../interfaces/IDataforseoLabsErrorsRequestInfo.md).[`datetime_from`](../interfaces/IDataforseoLabsErrorsRequestInfo.md#datetime_from)

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

Defined in: main.ts:90528

finish time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 7 days;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 13:57:46 +00:00

#### Implementation of

[`IDataforseoLabsErrorsRequestInfo`](../interfaces/IDataforseoLabsErrorsRequestInfo.md).[`datetime_to`](../interfaces/IDataforseoLabsErrorsRequestInfo.md#datetime_to)

***

### filtered\_function?

> `optional` **filtered\_function**: `string`

Defined in: main.ts:90514

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: dataforseo_labs/related_keywords/live

#### Implementation of

[`IDataforseoLabsErrorsRequestInfo`](../interfaces/IDataforseoLabsErrorsRequestInfo.md).[`filtered_function`](../interfaces/IDataforseoLabsErrorsRequestInfo.md#filtered_function)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:90503

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IDataforseoLabsErrorsRequestInfo`](../interfaces/IDataforseoLabsErrorsRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsErrorsRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:90508

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[`IDataforseoLabsErrorsRequestInfo`](../interfaces/IDataforseoLabsErrorsRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsErrorsRequestInfo.md#offset)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:90541

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:90562

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsErrorsRequestInfo`](DataforseoLabsErrorsRequestInfo.md)

Defined in: main.ts:90555

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsErrorsRequestInfo`](DataforseoLabsErrorsRequestInfo.md)
