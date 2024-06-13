**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataErrorsRequestInfo

# Class: KeywordsDataErrorsRequestInfo

## Implements

- [`IKeywordsDataErrorsRequestInfo`](../interfaces/IKeywordsDataErrorsRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataErrorsRequestInfo(data)

> **new KeywordsDataErrorsRequestInfo**(`data`?): [`KeywordsDataErrorsRequestInfo`](KeywordsDataErrorsRequestInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataErrorsRequestInfo`](../interfaces/IKeywordsDataErrorsRequestInfo.md)

#### Returns

[`KeywordsDataErrorsRequestInfo`](KeywordsDataErrorsRequestInfo.md)

#### Source

main.ts:116606

## Properties

### datetime\_from?

> **`optional`** **datetime\_from**: `string`

start time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 24 hours;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataErrorsRequestInfo`](../interfaces/IKeywordsDataErrorsRequestInfo.md).[`datetime_from`](../interfaces/IKeywordsDataErrorsRequestInfo.md#datetime_from)

#### Source

main.ts:116595

***

### datetime\_to?

> **`optional`** **datetime\_to**: `string`

finish time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 24 hours;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 13:57:46 +00:00

#### Implementation of

[`IKeywordsDataErrorsRequestInfo`](../interfaces/IKeywordsDataErrorsRequestInfo.md).[`datetime_to`](../interfaces/IKeywordsDataErrorsRequestInfo.md#datetime_to)

#### Source

main.ts:116602

***

### filtered\_function?

> **`optional`** **filtered\_function**: `string`

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: keywords_data/keywords_for_site/task_post, postback_url, pingback_url

#### Implementation of

[`IKeywordsDataErrorsRequestInfo`](../interfaces/IKeywordsDataErrorsRequestInfo.md).[`filtered_function`](../interfaces/IKeywordsDataErrorsRequestInfo.md#filtered_function)

#### Source

main.ts:116588

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IKeywordsDataErrorsRequestInfo`](../interfaces/IKeywordsDataErrorsRequestInfo.md).[`limit`](../interfaces/IKeywordsDataErrorsRequestInfo.md#limit)

#### Source

main.ts:116577

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[`IKeywordsDataErrorsRequestInfo`](../interfaces/IKeywordsDataErrorsRequestInfo.md).[`offset`](../interfaces/IKeywordsDataErrorsRequestInfo.md#offset)

#### Source

main.ts:116582

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:116615

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:116636

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataErrorsRequestInfo`](KeywordsDataErrorsRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataErrorsRequestInfo`](KeywordsDataErrorsRequestInfo.md)

#### Source

main.ts:116629
