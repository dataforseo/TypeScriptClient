**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksErrorsRequestInfo

# Class: BacklinksErrorsRequestInfo

## Implements

- [`IBacklinksErrorsRequestInfo`](../interfaces/IBacklinksErrorsRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksErrorsRequestInfo(data)

> **new BacklinksErrorsRequestInfo**(`data`?): [`BacklinksErrorsRequestInfo`](BacklinksErrorsRequestInfo.md)

#### Parameters

• **data?**: [`IBacklinksErrorsRequestInfo`](../interfaces/IBacklinksErrorsRequestInfo.md)

#### Returns

[`BacklinksErrorsRequestInfo`](BacklinksErrorsRequestInfo.md)

#### Source

main.ts:133696

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

[`IBacklinksErrorsRequestInfo`](../interfaces/IBacklinksErrorsRequestInfo.md).[`datetime_from`](../interfaces/IBacklinksErrorsRequestInfo.md#datetime_from)

#### Source

main.ts:133685

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

[`IBacklinksErrorsRequestInfo`](../interfaces/IBacklinksErrorsRequestInfo.md).[`datetime_to`](../interfaces/IBacklinksErrorsRequestInfo.md#datetime_to)

#### Source

main.ts:133692

***

### filtered\_function?

> **`optional`** **filtered\_function**: `string`

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: backlinks/live

#### Implementation of

[`IBacklinksErrorsRequestInfo`](../interfaces/IBacklinksErrorsRequestInfo.md).[`filtered_function`](../interfaces/IBacklinksErrorsRequestInfo.md#filtered_function)

#### Source

main.ts:133678

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IBacklinksErrorsRequestInfo`](../interfaces/IBacklinksErrorsRequestInfo.md).[`limit`](../interfaces/IBacklinksErrorsRequestInfo.md#limit)

#### Source

main.ts:133667

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[`IBacklinksErrorsRequestInfo`](../interfaces/IBacklinksErrorsRequestInfo.md).[`offset`](../interfaces/IBacklinksErrorsRequestInfo.md#offset)

#### Source

main.ts:133672

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:133705

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:133726

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksErrorsRequestInfo`](BacklinksErrorsRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksErrorsRequestInfo`](BacklinksErrorsRequestInfo.md)

#### Source

main.ts:133719
