[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataErrorsResultInfo

# Class: BusinessDataErrorsResultInfo

Defined in: main.ts:210342

## Implements

- [`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataErrorsResultInfo()

> **new BusinessDataErrorsResultInfo**(`data`?): [`BusinessDataErrorsResultInfo`](BusinessDataErrorsResultInfo.md)

Defined in: main.ts:210373

#### Parameters

##### data?

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md)

#### Returns

[`BusinessDataErrorsResultInfo`](BusinessDataErrorsResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:210349

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`datetime`](../interfaces/IBusinessDataErrorsResultInfo.md#datetime)

***

### error\_code?

> `optional` **error\_code**: `number`

Defined in: main.ts:210353

error code

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`error_code`](../interfaces/IBusinessDataErrorsResultInfo.md#error_code)

***

### error\_message?

> `optional` **error\_message**: `string`

Defined in: main.ts:210356

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`error_message`](../interfaces/IBusinessDataErrorsResultInfo.md#error_message)

***

### function?

> `optional` **function**: `string`

Defined in: main.ts:210351

corresponding API function

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`function`](../interfaces/IBusinessDataErrorsResultInfo.md#function)

***

### http\_code?

> `optional` **http\_code**: `number`

Defined in: main.ts:210363

HTTP status code

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`http_code`](../interfaces/IBusinessDataErrorsResultInfo.md#http_code)

***

### http\_method?

> `optional` **http\_method**: `string`

Defined in: main.ts:210361

HTTP method

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`http_method`](../interfaces/IBusinessDataErrorsResultInfo.md#http_method)

***

### http\_response?

> `optional` **http\_response**: `string`

Defined in: main.ts:210369

HTTP response
server response

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`http_response`](../interfaces/IBusinessDataErrorsResultInfo.md#http_response)

***

### http\_time?

> `optional` **http\_time**: `number`

Defined in: main.ts:210366

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`http_time`](../interfaces/IBusinessDataErrorsResultInfo.md#http_time)

***

### http\_url?

> `optional` **http\_url**: `string`

Defined in: main.ts:210359

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`http_url`](../interfaces/IBusinessDataErrorsResultInfo.md#http_url)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:210344

id of the task

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`id`](../interfaces/IBusinessDataErrorsResultInfo.md#id)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:210382

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:210408

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataErrorsResultInfo`](BusinessDataErrorsResultInfo.md)

Defined in: main.ts:210401

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataErrorsResultInfo`](BusinessDataErrorsResultInfo.md)
