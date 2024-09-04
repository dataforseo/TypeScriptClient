[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataErrorsResultInfo

# Class: BusinessDataErrorsResultInfo

## Implements

- [`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataErrorsResultInfo()

> **new BusinessDataErrorsResultInfo**(`data`?): [`BusinessDataErrorsResultInfo`](BusinessDataErrorsResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md)

#### Returns

[`BusinessDataErrorsResultInfo`](BusinessDataErrorsResultInfo.md)

#### Defined in

main.ts:197420

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`datetime`](../interfaces/IBusinessDataErrorsResultInfo.md#datetime)

#### Defined in

main.ts:197396

***

### error\_code?

> `optional` **error\_code**: `number`

error code

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`error_code`](../interfaces/IBusinessDataErrorsResultInfo.md#error_code)

#### Defined in

main.ts:197400

***

### error\_message?

> `optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`error_message`](../interfaces/IBusinessDataErrorsResultInfo.md#error_message)

#### Defined in

main.ts:197403

***

### function?

> `optional` **function**: `string`

corresponding API function

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`function`](../interfaces/IBusinessDataErrorsResultInfo.md#function)

#### Defined in

main.ts:197398

***

### http\_code?

> `optional` **http\_code**: `number`

HTTP status code

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`http_code`](../interfaces/IBusinessDataErrorsResultInfo.md#http_code)

#### Defined in

main.ts:197410

***

### http\_method?

> `optional` **http\_method**: `string`

HTTP method

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`http_method`](../interfaces/IBusinessDataErrorsResultInfo.md#http_method)

#### Defined in

main.ts:197408

***

### http\_response?

> `optional` **http\_response**: `string`

HTTP response
server response

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`http_response`](../interfaces/IBusinessDataErrorsResultInfo.md#http_response)

#### Defined in

main.ts:197416

***

### http\_time?

> `optional` **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`http_time`](../interfaces/IBusinessDataErrorsResultInfo.md#http_time)

#### Defined in

main.ts:197413

***

### http\_url?

> `optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`http_url`](../interfaces/IBusinessDataErrorsResultInfo.md#http_url)

#### Defined in

main.ts:197406

***

### id?

> `optional` **id**: `string`

id of the task

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`id`](../interfaces/IBusinessDataErrorsResultInfo.md#id)

#### Defined in

main.ts:197391

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:197429

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:197455

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataErrorsResultInfo`](BusinessDataErrorsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataErrorsResultInfo`](BusinessDataErrorsResultInfo.md)

#### Defined in

main.ts:197448
