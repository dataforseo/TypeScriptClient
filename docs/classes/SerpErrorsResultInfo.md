[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpErrorsResultInfo

# Class: SerpErrorsResultInfo

## Implements

- [`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpErrorsResultInfo()

> **new SerpErrorsResultInfo**(`data`?): [`SerpErrorsResultInfo`](SerpErrorsResultInfo.md)

#### Parameters

• **data?**: [`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md)

#### Returns

[`SerpErrorsResultInfo`](SerpErrorsResultInfo.md)

#### Defined in

main.ts:24843

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`datetime`](../interfaces/ISerpErrorsResultInfo.md#datetime)

#### Defined in

main.ts:24819

***

### error\_code?

> `optional` **error\_code**: `number`

error code

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`error_code`](../interfaces/ISerpErrorsResultInfo.md#error_code)

#### Defined in

main.ts:24823

***

### error\_message?

> `optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`error_message`](../interfaces/ISerpErrorsResultInfo.md#error_message)

#### Defined in

main.ts:24826

***

### function?

> `optional` **function**: `string`

corresponding API function

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`function`](../interfaces/ISerpErrorsResultInfo.md#function)

#### Defined in

main.ts:24821

***

### http\_code?

> `optional` **http\_code**: `number`

HTTP status code

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`http_code`](../interfaces/ISerpErrorsResultInfo.md#http_code)

#### Defined in

main.ts:24833

***

### http\_method?

> `optional` **http\_method**: `string`

HTTP method

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`http_method`](../interfaces/ISerpErrorsResultInfo.md#http_method)

#### Defined in

main.ts:24831

***

### http\_response?

> `optional` **http\_response**: `string`

HTTP response
server response

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`http_response`](../interfaces/ISerpErrorsResultInfo.md#http_response)

#### Defined in

main.ts:24839

***

### http\_time?

> `optional` **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`http_time`](../interfaces/ISerpErrorsResultInfo.md#http_time)

#### Defined in

main.ts:24836

***

### http\_url?

> `optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`http_url`](../interfaces/ISerpErrorsResultInfo.md#http_url)

#### Defined in

main.ts:24829

***

### id?

> `optional` **id**: `string`

id of the task

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`id`](../interfaces/ISerpErrorsResultInfo.md#id)

#### Defined in

main.ts:24814

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:24852

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:24878

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpErrorsResultInfo`](SerpErrorsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpErrorsResultInfo`](SerpErrorsResultInfo.md)

#### Defined in

main.ts:24871
