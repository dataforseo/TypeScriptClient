[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksErrorsResultInfo

# Class: BacklinksErrorsResultInfo

Defined in: main.ts:149218

## Implements

- [`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksErrorsResultInfo()

> **new BacklinksErrorsResultInfo**(`data`?): [`BacklinksErrorsResultInfo`](BacklinksErrorsResultInfo.md)

Defined in: main.ts:149248

#### Parameters

##### data?

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md)

#### Returns

[`BacklinksErrorsResultInfo`](BacklinksErrorsResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:149225

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`datetime`](../interfaces/IBacklinksErrorsResultInfo.md#datetime)

***

### error\_code?

> `optional` **error\_code**: `number`

Defined in: main.ts:149229

error code

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`error_code`](../interfaces/IBacklinksErrorsResultInfo.md#error_code)

***

### error\_message?

> `optional` **error\_message**: `string`

Defined in: main.ts:149232

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`error_message`](../interfaces/IBacklinksErrorsResultInfo.md#error_message)

***

### function?

> `optional` **function**: `string`

Defined in: main.ts:149227

corresponding API function

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`function`](../interfaces/IBacklinksErrorsResultInfo.md#function)

***

### http\_code?

> `optional` **http\_code**: `number`

Defined in: main.ts:149239

HTTP status code

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`http_code`](../interfaces/IBacklinksErrorsResultInfo.md#http_code)

***

### http\_method?

> `optional` **http\_method**: `string`

Defined in: main.ts:149237

HTTP method

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`http_method`](../interfaces/IBacklinksErrorsResultInfo.md#http_method)

***

### http\_response?

> `optional` **http\_response**: `string`

Defined in: main.ts:149244

HTTP response
server response

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`http_response`](../interfaces/IBacklinksErrorsResultInfo.md#http_response)

***

### http\_time?

> `optional` **http\_time**: `number`

Defined in: main.ts:149241

time taken by HTTP request

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`http_time`](../interfaces/IBacklinksErrorsResultInfo.md#http_time)

***

### http\_url?

> `optional` **http\_url**: `string`

Defined in: main.ts:149235

URL that caused an error
URL you used for making an API call

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`http_url`](../interfaces/IBacklinksErrorsResultInfo.md#http_url)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:149220

id of the task

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`id`](../interfaces/IBacklinksErrorsResultInfo.md#id)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:149257

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:149283

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksErrorsResultInfo`](BacklinksErrorsResultInfo.md)

Defined in: main.ts:149276

#### Parameters

##### data

`any`

#### Returns

[`BacklinksErrorsResultInfo`](BacklinksErrorsResultInfo.md)
