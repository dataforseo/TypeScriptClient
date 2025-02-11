[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantErrorsResultInfo

# Class: MerchantErrorsResultInfo

Defined in: main.ts:184832

## Implements

- [`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantErrorsResultInfo()

> **new MerchantErrorsResultInfo**(`data`?): [`MerchantErrorsResultInfo`](MerchantErrorsResultInfo.md)

Defined in: main.ts:184863

#### Parameters

##### data?

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md)

#### Returns

[`MerchantErrorsResultInfo`](MerchantErrorsResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:184839

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`datetime`](../interfaces/IMerchantErrorsResultInfo.md#datetime)

***

### error\_code?

> `optional` **error\_code**: `number`

Defined in: main.ts:184843

error code

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`error_code`](../interfaces/IMerchantErrorsResultInfo.md#error_code)

***

### error\_message?

> `optional` **error\_message**: `string`

Defined in: main.ts:184846

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`error_message`](../interfaces/IMerchantErrorsResultInfo.md#error_message)

***

### function?

> `optional` **function**: `string`

Defined in: main.ts:184841

corresponding API function

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`function`](../interfaces/IMerchantErrorsResultInfo.md#function)

***

### http\_code?

> `optional` **http\_code**: `number`

Defined in: main.ts:184853

HTTP status code

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`http_code`](../interfaces/IMerchantErrorsResultInfo.md#http_code)

***

### http\_method?

> `optional` **http\_method**: `string`

Defined in: main.ts:184851

HTTP method

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`http_method`](../interfaces/IMerchantErrorsResultInfo.md#http_method)

***

### http\_response?

> `optional` **http\_response**: `string`

Defined in: main.ts:184859

HTTP response
server response

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`http_response`](../interfaces/IMerchantErrorsResultInfo.md#http_response)

***

### http\_time?

> `optional` **http\_time**: `number`

Defined in: main.ts:184856

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`http_time`](../interfaces/IMerchantErrorsResultInfo.md#http_time)

***

### http\_url?

> `optional` **http\_url**: `string`

Defined in: main.ts:184849

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`http_url`](../interfaces/IMerchantErrorsResultInfo.md#http_url)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:184834

id of the task

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`id`](../interfaces/IMerchantErrorsResultInfo.md#id)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:184872

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:184898

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantErrorsResultInfo`](MerchantErrorsResultInfo.md)

Defined in: main.ts:184891

#### Parameters

##### data

`any`

#### Returns

[`MerchantErrorsResultInfo`](MerchantErrorsResultInfo.md)
