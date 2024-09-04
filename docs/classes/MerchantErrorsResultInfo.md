[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MerchantErrorsResultInfo

# Class: MerchantErrorsResultInfo

## Implements

- [`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantErrorsResultInfo()

> **new MerchantErrorsResultInfo**(`data`?): [`MerchantErrorsResultInfo`](MerchantErrorsResultInfo.md)

#### Parameters

• **data?**: [`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md)

#### Returns

[`MerchantErrorsResultInfo`](MerchantErrorsResultInfo.md)

#### Defined in

main.ts:176881

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`datetime`](../interfaces/IMerchantErrorsResultInfo.md#datetime)

#### Defined in

main.ts:176857

***

### error\_code?

> `optional` **error\_code**: `number`

error code

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`error_code`](../interfaces/IMerchantErrorsResultInfo.md#error_code)

#### Defined in

main.ts:176861

***

### error\_message?

> `optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`error_message`](../interfaces/IMerchantErrorsResultInfo.md#error_message)

#### Defined in

main.ts:176864

***

### function?

> `optional` **function**: `string`

corresponding API function

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`function`](../interfaces/IMerchantErrorsResultInfo.md#function)

#### Defined in

main.ts:176859

***

### http\_code?

> `optional` **http\_code**: `number`

HTTP status code

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`http_code`](../interfaces/IMerchantErrorsResultInfo.md#http_code)

#### Defined in

main.ts:176871

***

### http\_method?

> `optional` **http\_method**: `string`

HTTP method

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`http_method`](../interfaces/IMerchantErrorsResultInfo.md#http_method)

#### Defined in

main.ts:176869

***

### http\_response?

> `optional` **http\_response**: `string`

HTTP response
server response

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`http_response`](../interfaces/IMerchantErrorsResultInfo.md#http_response)

#### Defined in

main.ts:176877

***

### http\_time?

> `optional` **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`http_time`](../interfaces/IMerchantErrorsResultInfo.md#http_time)

#### Defined in

main.ts:176874

***

### http\_url?

> `optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`http_url`](../interfaces/IMerchantErrorsResultInfo.md#http_url)

#### Defined in

main.ts:176867

***

### id?

> `optional` **id**: `string`

id of the task

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`id`](../interfaces/IMerchantErrorsResultInfo.md#id)

#### Defined in

main.ts:176852

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:176890

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:176916

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantErrorsResultInfo`](MerchantErrorsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantErrorsResultInfo`](MerchantErrorsResultInfo.md)

#### Defined in

main.ts:176909
