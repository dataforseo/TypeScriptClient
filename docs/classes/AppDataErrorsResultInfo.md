[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppDataErrorsResultInfo

# Class: AppDataErrorsResultInfo

## Implements

- [`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataErrorsResultInfo()

> **new AppDataErrorsResultInfo**(`data`?): [`AppDataErrorsResultInfo`](AppDataErrorsResultInfo.md)

#### Parameters

• **data?**: [`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md)

#### Returns

[`AppDataErrorsResultInfo`](AppDataErrorsResultInfo.md)

#### Defined in

main.ts:190632

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md).[`datetime`](../interfaces/IAppDataErrorsResultInfo.md#datetime)

#### Defined in

main.ts:190608

***

### error\_code?

> `optional` **error\_code**: `number`

error code

#### Implementation of

[`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md).[`error_code`](../interfaces/IAppDataErrorsResultInfo.md#error_code)

#### Defined in

main.ts:190612

***

### error\_message?

> `optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md).[`error_message`](../interfaces/IAppDataErrorsResultInfo.md#error_message)

#### Defined in

main.ts:190615

***

### function?

> `optional` **function**: `string`

corresponding API function

#### Implementation of

[`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md).[`function`](../interfaces/IAppDataErrorsResultInfo.md#function)

#### Defined in

main.ts:190610

***

### http\_code?

> `optional` **http\_code**: `number`

HTTP status code

#### Implementation of

[`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md).[`http_code`](../interfaces/IAppDataErrorsResultInfo.md#http_code)

#### Defined in

main.ts:190622

***

### http\_method?

> `optional` **http\_method**: `string`

HTTP method

#### Implementation of

[`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md).[`http_method`](../interfaces/IAppDataErrorsResultInfo.md#http_method)

#### Defined in

main.ts:190620

***

### http\_response?

> `optional` **http\_response**: `string`

HTTP response
server response

#### Implementation of

[`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md).[`http_response`](../interfaces/IAppDataErrorsResultInfo.md#http_response)

#### Defined in

main.ts:190628

***

### http\_time?

> `optional` **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md).[`http_time`](../interfaces/IAppDataErrorsResultInfo.md#http_time)

#### Defined in

main.ts:190625

***

### http\_url?

> `optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md).[`http_url`](../interfaces/IAppDataErrorsResultInfo.md#http_url)

#### Defined in

main.ts:190618

***

### id?

> `optional` **id**: `string`

id of the task

#### Implementation of

[`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md).[`id`](../interfaces/IAppDataErrorsResultInfo.md#id)

#### Defined in

main.ts:190603

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:190641

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:190667

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataErrorsResultInfo`](AppDataErrorsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataErrorsResultInfo`](AppDataErrorsResultInfo.md)

#### Defined in

main.ts:190660
