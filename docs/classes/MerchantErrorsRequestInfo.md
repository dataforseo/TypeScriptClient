[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MerchantErrorsRequestInfo

# Class: MerchantErrorsRequestInfo

## Implements

- [`IMerchantErrorsRequestInfo`](../interfaces/IMerchantErrorsRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantErrorsRequestInfo()

> **new MerchantErrorsRequestInfo**(`data`?): [`MerchantErrorsRequestInfo`](MerchantErrorsRequestInfo.md)

#### Parameters

• **data?**: [`IMerchantErrorsRequestInfo`](../interfaces/IMerchantErrorsRequestInfo.md)

#### Returns

[`MerchantErrorsRequestInfo`](MerchantErrorsRequestInfo.md)

#### Defined in

main.ts:172700

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

start time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 24 hours;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantErrorsRequestInfo`](../interfaces/IMerchantErrorsRequestInfo.md).[`datetime_from`](../interfaces/IMerchantErrorsRequestInfo.md#datetime_from)

#### Defined in

main.ts:172689

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

finish time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 24 hours;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 13:57:46 +00:00

#### Implementation of

[`IMerchantErrorsRequestInfo`](../interfaces/IMerchantErrorsRequestInfo.md).[`datetime_to`](../interfaces/IMerchantErrorsRequestInfo.md#datetime_to)

#### Defined in

main.ts:172696

***

### filtered\_function?

> `optional` **filtered\_function**: `string`

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: sellers/ad_url, postback_url, pingback_url

#### Implementation of

[`IMerchantErrorsRequestInfo`](../interfaces/IMerchantErrorsRequestInfo.md).[`filtered_function`](../interfaces/IMerchantErrorsRequestInfo.md#filtered_function)

#### Defined in

main.ts:172682

***

### limit?

> `optional` **limit**: `number`

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IMerchantErrorsRequestInfo`](../interfaces/IMerchantErrorsRequestInfo.md).[`limit`](../interfaces/IMerchantErrorsRequestInfo.md#limit)

#### Defined in

main.ts:172671

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[`IMerchantErrorsRequestInfo`](../interfaces/IMerchantErrorsRequestInfo.md).[`offset`](../interfaces/IMerchantErrorsRequestInfo.md#offset)

#### Defined in

main.ts:172676

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:172709

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:172730

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantErrorsRequestInfo`](MerchantErrorsRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantErrorsRequestInfo`](MerchantErrorsRequestInfo.md)

#### Defined in

main.ts:172723
