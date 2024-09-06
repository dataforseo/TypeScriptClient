[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / OnPageErrorsResultInfo

# Class: OnPageErrorsResultInfo

## Implements

- [`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageErrorsResultInfo()

> **new OnPageErrorsResultInfo**(`data`?): [`OnPageErrorsResultInfo`](OnPageErrorsResultInfo.md)

#### Parameters

• **data?**: [`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md)

#### Returns

[`OnPageErrorsResultInfo`](OnPageErrorsResultInfo.md)

#### Defined in

main.ts:152214

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md).[`datetime`](../interfaces/IOnPageErrorsResultInfo.md#datetime)

#### Defined in

main.ts:152190

***

### error\_code?

> `optional` **error\_code**: `number`

error code

#### Implementation of

[`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md).[`error_code`](../interfaces/IOnPageErrorsResultInfo.md#error_code)

#### Defined in

main.ts:152194

***

### error\_message?

> `optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md).[`error_message`](../interfaces/IOnPageErrorsResultInfo.md#error_message)

#### Defined in

main.ts:152197

***

### function?

> `optional` **function**: `string`

corresponding API function

#### Implementation of

[`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md).[`function`](../interfaces/IOnPageErrorsResultInfo.md#function)

#### Defined in

main.ts:152192

***

### http\_code?

> `optional` **http\_code**: `number`

HTTP status code

#### Implementation of

[`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md).[`http_code`](../interfaces/IOnPageErrorsResultInfo.md#http_code)

#### Defined in

main.ts:152204

***

### http\_method?

> `optional` **http\_method**: `string`

HTTP method

#### Implementation of

[`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md).[`http_method`](../interfaces/IOnPageErrorsResultInfo.md#http_method)

#### Defined in

main.ts:152202

***

### http\_response?

> `optional` **http\_response**: `string`

HTTP response
server response

#### Implementation of

[`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md).[`http_response`](../interfaces/IOnPageErrorsResultInfo.md#http_response)

#### Defined in

main.ts:152210

***

### http\_time?

> `optional` **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md).[`http_time`](../interfaces/IOnPageErrorsResultInfo.md#http_time)

#### Defined in

main.ts:152207

***

### http\_url?

> `optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md).[`http_url`](../interfaces/IOnPageErrorsResultInfo.md#http_url)

#### Defined in

main.ts:152200

***

### id?

> `optional` **id**: `string`

id of the task

#### Implementation of

[`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md).[`id`](../interfaces/IOnPageErrorsResultInfo.md#id)

#### Defined in

main.ts:152185

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:152223

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:152249

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageErrorsResultInfo`](OnPageErrorsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageErrorsResultInfo`](OnPageErrorsResultInfo.md)

#### Defined in

main.ts:152242
