[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpErrorsResultInfo

# Class: SerpErrorsResultInfo

Defined in: main.ts:25877

## Implements

- [`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpErrorsResultInfo()

> **new SerpErrorsResultInfo**(`data`?): [`SerpErrorsResultInfo`](SerpErrorsResultInfo.md)

Defined in: main.ts:25908

#### Parameters

##### data?

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md)

#### Returns

[`SerpErrorsResultInfo`](SerpErrorsResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:25884

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`datetime`](../interfaces/ISerpErrorsResultInfo.md#datetime)

***

### error\_code?

> `optional` **error\_code**: `number`

Defined in: main.ts:25888

error code

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`error_code`](../interfaces/ISerpErrorsResultInfo.md#error_code)

***

### error\_message?

> `optional` **error\_message**: `string`

Defined in: main.ts:25891

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`error_message`](../interfaces/ISerpErrorsResultInfo.md#error_message)

***

### function?

> `optional` **function**: `string`

Defined in: main.ts:25886

corresponding API function

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`function`](../interfaces/ISerpErrorsResultInfo.md#function)

***

### http\_code?

> `optional` **http\_code**: `number`

Defined in: main.ts:25898

HTTP status code

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`http_code`](../interfaces/ISerpErrorsResultInfo.md#http_code)

***

### http\_method?

> `optional` **http\_method**: `string`

Defined in: main.ts:25896

HTTP method

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`http_method`](../interfaces/ISerpErrorsResultInfo.md#http_method)

***

### http\_response?

> `optional` **http\_response**: `string`

Defined in: main.ts:25904

HTTP response
server response

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`http_response`](../interfaces/ISerpErrorsResultInfo.md#http_response)

***

### http\_time?

> `optional` **http\_time**: `number`

Defined in: main.ts:25901

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`http_time`](../interfaces/ISerpErrorsResultInfo.md#http_time)

***

### http\_url?

> `optional` **http\_url**: `string`

Defined in: main.ts:25894

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`http_url`](../interfaces/ISerpErrorsResultInfo.md#http_url)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:25879

id of the task

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`id`](../interfaces/ISerpErrorsResultInfo.md#id)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:25917

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:25943

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpErrorsResultInfo`](SerpErrorsResultInfo.md)

Defined in: main.ts:25936

#### Parameters

##### data

`any`

#### Returns

[`SerpErrorsResultInfo`](SerpErrorsResultInfo.md)
