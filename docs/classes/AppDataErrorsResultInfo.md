[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataErrorsResultInfo

# Class: AppDataErrorsResultInfo

Defined in: main.ts:198830

## Implements

- [`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataErrorsResultInfo()

> **new AppDataErrorsResultInfo**(`data`?): [`AppDataErrorsResultInfo`](AppDataErrorsResultInfo.md)

Defined in: main.ts:198861

#### Parameters

##### data?

[`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md)

#### Returns

[`AppDataErrorsResultInfo`](AppDataErrorsResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:198837

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md).[`datetime`](../interfaces/IAppDataErrorsResultInfo.md#datetime)

***

### error\_code?

> `optional` **error\_code**: `number`

Defined in: main.ts:198841

error code

#### Implementation of

[`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md).[`error_code`](../interfaces/IAppDataErrorsResultInfo.md#error_code)

***

### error\_message?

> `optional` **error\_message**: `string`

Defined in: main.ts:198844

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md).[`error_message`](../interfaces/IAppDataErrorsResultInfo.md#error_message)

***

### function?

> `optional` **function**: `string`

Defined in: main.ts:198839

corresponding API function

#### Implementation of

[`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md).[`function`](../interfaces/IAppDataErrorsResultInfo.md#function)

***

### http\_code?

> `optional` **http\_code**: `number`

Defined in: main.ts:198851

HTTP status code

#### Implementation of

[`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md).[`http_code`](../interfaces/IAppDataErrorsResultInfo.md#http_code)

***

### http\_method?

> `optional` **http\_method**: `string`

Defined in: main.ts:198849

HTTP method

#### Implementation of

[`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md).[`http_method`](../interfaces/IAppDataErrorsResultInfo.md#http_method)

***

### http\_response?

> `optional` **http\_response**: `string`

Defined in: main.ts:198857

HTTP response
server response

#### Implementation of

[`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md).[`http_response`](../interfaces/IAppDataErrorsResultInfo.md#http_response)

***

### http\_time?

> `optional` **http\_time**: `number`

Defined in: main.ts:198854

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md).[`http_time`](../interfaces/IAppDataErrorsResultInfo.md#http_time)

***

### http\_url?

> `optional` **http\_url**: `string`

Defined in: main.ts:198847

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md).[`http_url`](../interfaces/IAppDataErrorsResultInfo.md#http_url)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:198832

id of the task

#### Implementation of

[`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md).[`id`](../interfaces/IAppDataErrorsResultInfo.md#id)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:198870

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:198896

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataErrorsResultInfo`](AppDataErrorsResultInfo.md)

Defined in: main.ts:198889

#### Parameters

##### data

`any`

#### Returns

[`AppDataErrorsResultInfo`](AppDataErrorsResultInfo.md)
