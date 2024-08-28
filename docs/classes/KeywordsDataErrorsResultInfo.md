[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / KeywordsDataErrorsResultInfo

# Class: KeywordsDataErrorsResultInfo

## Implements

- [`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataErrorsResultInfo()

> **new KeywordsDataErrorsResultInfo**(`data`?): [`KeywordsDataErrorsResultInfo`](KeywordsDataErrorsResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md)

#### Returns

[`KeywordsDataErrorsResultInfo`](KeywordsDataErrorsResultInfo.md)

#### Defined in

main.ts:119436

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`datetime`](../interfaces/IKeywordsDataErrorsResultInfo.md#datetime)

#### Defined in

main.ts:119412

***

### error\_code?

> `optional` **error\_code**: `number`

error code

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`error_code`](../interfaces/IKeywordsDataErrorsResultInfo.md#error_code)

#### Defined in

main.ts:119416

***

### error\_message?

> `optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`error_message`](../interfaces/IKeywordsDataErrorsResultInfo.md#error_message)

#### Defined in

main.ts:119419

***

### function?

> `optional` **function**: `string`

corresponding API function

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`function`](../interfaces/IKeywordsDataErrorsResultInfo.md#function)

#### Defined in

main.ts:119414

***

### http\_code?

> `optional` **http\_code**: `number`

HTTP status code

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`http_code`](../interfaces/IKeywordsDataErrorsResultInfo.md#http_code)

#### Defined in

main.ts:119426

***

### http\_method?

> `optional` **http\_method**: `string`

HTTP method

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`http_method`](../interfaces/IKeywordsDataErrorsResultInfo.md#http_method)

#### Defined in

main.ts:119424

***

### http\_response?

> `optional` **http\_response**: `string`

HTTP response
server response

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`http_response`](../interfaces/IKeywordsDataErrorsResultInfo.md#http_response)

#### Defined in

main.ts:119432

***

### http\_time?

> `optional` **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`http_time`](../interfaces/IKeywordsDataErrorsResultInfo.md#http_time)

#### Defined in

main.ts:119429

***

### http\_url?

> `optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`http_url`](../interfaces/IKeywordsDataErrorsResultInfo.md#http_url)

#### Defined in

main.ts:119422

***

### id?

> `optional` **id**: `string`

id of the task

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`id`](../interfaces/IKeywordsDataErrorsResultInfo.md#id)

#### Defined in

main.ts:119407

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:119445

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:119471

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataErrorsResultInfo`](KeywordsDataErrorsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataErrorsResultInfo`](KeywordsDataErrorsResultInfo.md)

#### Defined in

main.ts:119464
