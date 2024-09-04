[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksErrorsResultInfo

# Class: BacklinksErrorsResultInfo

## Implements

- [`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksErrorsResultInfo()

> **new BacklinksErrorsResultInfo**(`data`?): [`BacklinksErrorsResultInfo`](BacklinksErrorsResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md)

#### Returns

[`BacklinksErrorsResultInfo`](BacklinksErrorsResultInfo.md)

#### Defined in

main.ts:137942

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`datetime`](../interfaces/IBacklinksErrorsResultInfo.md#datetime)

#### Defined in

main.ts:137919

***

### error\_code?

> `optional` **error\_code**: `number`

error code

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`error_code`](../interfaces/IBacklinksErrorsResultInfo.md#error_code)

#### Defined in

main.ts:137923

***

### error\_message?

> `optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`error_message`](../interfaces/IBacklinksErrorsResultInfo.md#error_message)

#### Defined in

main.ts:137926

***

### function?

> `optional` **function**: `string`

corresponding API function

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`function`](../interfaces/IBacklinksErrorsResultInfo.md#function)

#### Defined in

main.ts:137921

***

### http\_code?

> `optional` **http\_code**: `number`

HTTP status code

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`http_code`](../interfaces/IBacklinksErrorsResultInfo.md#http_code)

#### Defined in

main.ts:137933

***

### http\_method?

> `optional` **http\_method**: `string`

HTTP method

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`http_method`](../interfaces/IBacklinksErrorsResultInfo.md#http_method)

#### Defined in

main.ts:137931

***

### http\_response?

> `optional` **http\_response**: `string`

HTTP response
server response

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`http_response`](../interfaces/IBacklinksErrorsResultInfo.md#http_response)

#### Defined in

main.ts:137938

***

### http\_time?

> `optional` **http\_time**: `number`

time taken by HTTP request

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`http_time`](../interfaces/IBacklinksErrorsResultInfo.md#http_time)

#### Defined in

main.ts:137935

***

### http\_url?

> `optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`http_url`](../interfaces/IBacklinksErrorsResultInfo.md#http_url)

#### Defined in

main.ts:137929

***

### id?

> `optional` **id**: `string`

id of the task

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`id`](../interfaces/IBacklinksErrorsResultInfo.md#id)

#### Defined in

main.ts:137914

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:137951

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:137977

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksErrorsResultInfo`](BacklinksErrorsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksErrorsResultInfo`](BacklinksErrorsResultInfo.md)

#### Defined in

main.ts:137970
