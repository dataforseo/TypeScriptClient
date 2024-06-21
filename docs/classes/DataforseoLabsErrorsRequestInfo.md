**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsErrorsRequestInfo

# Class: DataforseoLabsErrorsRequestInfo

## Implements

- [`IDataforseoLabsErrorsRequestInfo`](../interfaces/IDataforseoLabsErrorsRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsErrorsRequestInfo(data)

> **new DataforseoLabsErrorsRequestInfo**(`data`?): [`DataforseoLabsErrorsRequestInfo`](DataforseoLabsErrorsRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsErrorsRequestInfo`](../interfaces/IDataforseoLabsErrorsRequestInfo.md)

#### Returns

[`DataforseoLabsErrorsRequestInfo`](DataforseoLabsErrorsRequestInfo.md)

#### Source

main.ts:80894

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

[`IDataforseoLabsErrorsRequestInfo`](../interfaces/IDataforseoLabsErrorsRequestInfo.md).[`datetime_from`](../interfaces/IDataforseoLabsErrorsRequestInfo.md#datetime_from)

#### Source

main.ts:80883

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

[`IDataforseoLabsErrorsRequestInfo`](../interfaces/IDataforseoLabsErrorsRequestInfo.md).[`datetime_to`](../interfaces/IDataforseoLabsErrorsRequestInfo.md#datetime_to)

#### Source

main.ts:80890

***

### filtered\_function?

> **`optional`** **filtered\_function**: `string`

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: dataforseo_labs/related_keywords/live

#### Implementation of

[`IDataforseoLabsErrorsRequestInfo`](../interfaces/IDataforseoLabsErrorsRequestInfo.md).[`filtered_function`](../interfaces/IDataforseoLabsErrorsRequestInfo.md#filtered_function)

#### Source

main.ts:80876

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IDataforseoLabsErrorsRequestInfo`](../interfaces/IDataforseoLabsErrorsRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsErrorsRequestInfo.md#limit)

#### Source

main.ts:80865

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[`IDataforseoLabsErrorsRequestInfo`](../interfaces/IDataforseoLabsErrorsRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsErrorsRequestInfo.md#offset)

#### Source

main.ts:80870

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:80903

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:80924

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsErrorsRequestInfo`](DataforseoLabsErrorsRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsErrorsRequestInfo`](DataforseoLabsErrorsRequestInfo.md)

#### Source

main.ts:80917
