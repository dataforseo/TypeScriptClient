**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataErrorsRequestInfo

# Class: AppDataErrorsRequestInfo

## Implements

- [`IAppDataErrorsRequestInfo`](../interfaces/IAppDataErrorsRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataErrorsRequestInfo(data)

> **new AppDataErrorsRequestInfo**(`data`?): [`AppDataErrorsRequestInfo`](AppDataErrorsRequestInfo.md)

#### Parameters

• **data?**: [`IAppDataErrorsRequestInfo`](../interfaces/IAppDataErrorsRequestInfo.md)

#### Returns

[`AppDataErrorsRequestInfo`](AppDataErrorsRequestInfo.md)

#### Source

main.ts:184416

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

[`IAppDataErrorsRequestInfo`](../interfaces/IAppDataErrorsRequestInfo.md).[`datetime_from`](../interfaces/IAppDataErrorsRequestInfo.md#datetime_from)

#### Source

main.ts:184405

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

[`IAppDataErrorsRequestInfo`](../interfaces/IAppDataErrorsRequestInfo.md).[`datetime_to`](../interfaces/IAppDataErrorsRequestInfo.md#datetime_to)

#### Source

main.ts:184412

***

### filtered\_function?

> **`optional`** **filtered\_function**: `string`

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: app_data/task_get/advanced, postback_url, pingback_url

#### Implementation of

[`IAppDataErrorsRequestInfo`](../interfaces/IAppDataErrorsRequestInfo.md).[`filtered_function`](../interfaces/IAppDataErrorsRequestInfo.md#filtered_function)

#### Source

main.ts:184398

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IAppDataErrorsRequestInfo`](../interfaces/IAppDataErrorsRequestInfo.md).[`limit`](../interfaces/IAppDataErrorsRequestInfo.md#limit)

#### Source

main.ts:184387

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[`IAppDataErrorsRequestInfo`](../interfaces/IAppDataErrorsRequestInfo.md).[`offset`](../interfaces/IAppDataErrorsRequestInfo.md#offset)

#### Source

main.ts:184392

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:184425

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:184446

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataErrorsRequestInfo`](AppDataErrorsRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataErrorsRequestInfo`](AppDataErrorsRequestInfo.md)

#### Source

main.ts:184439
