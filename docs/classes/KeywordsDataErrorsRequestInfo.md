[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataErrorsRequestInfo

# Class: KeywordsDataErrorsRequestInfo

Defined in: main.ts:125622

## Implements

- [`IKeywordsDataErrorsRequestInfo`](../interfaces/IKeywordsDataErrorsRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataErrorsRequestInfo()

> **new KeywordsDataErrorsRequestInfo**(`data`?): [`KeywordsDataErrorsRequestInfo`](KeywordsDataErrorsRequestInfo.md)

Defined in: main.ts:125656

#### Parameters

##### data?

[`IKeywordsDataErrorsRequestInfo`](../interfaces/IKeywordsDataErrorsRequestInfo.md)

#### Returns

[`KeywordsDataErrorsRequestInfo`](KeywordsDataErrorsRequestInfo.md)

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

Defined in: main.ts:125645

start time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 7 days;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataErrorsRequestInfo`](../interfaces/IKeywordsDataErrorsRequestInfo.md).[`datetime_from`](../interfaces/IKeywordsDataErrorsRequestInfo.md#datetime_from)

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

Defined in: main.ts:125652

finish time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 7 days;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 13:57:46 +00:00

#### Implementation of

[`IKeywordsDataErrorsRequestInfo`](../interfaces/IKeywordsDataErrorsRequestInfo.md).[`datetime_to`](../interfaces/IKeywordsDataErrorsRequestInfo.md#datetime_to)

***

### filtered\_function?

> `optional` **filtered\_function**: `string`

Defined in: main.ts:125638

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: keywords_data/keywords_for_site/task_post, postback_url, pingback_url

#### Implementation of

[`IKeywordsDataErrorsRequestInfo`](../interfaces/IKeywordsDataErrorsRequestInfo.md).[`filtered_function`](../interfaces/IKeywordsDataErrorsRequestInfo.md#filtered_function)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:125627

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IKeywordsDataErrorsRequestInfo`](../interfaces/IKeywordsDataErrorsRequestInfo.md).[`limit`](../interfaces/IKeywordsDataErrorsRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:125632

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[`IKeywordsDataErrorsRequestInfo`](../interfaces/IKeywordsDataErrorsRequestInfo.md).[`offset`](../interfaces/IKeywordsDataErrorsRequestInfo.md#offset)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:125665

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:125686

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataErrorsRequestInfo`](KeywordsDataErrorsRequestInfo.md)

Defined in: main.ts:125679

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataErrorsRequestInfo`](KeywordsDataErrorsRequestInfo.md)
