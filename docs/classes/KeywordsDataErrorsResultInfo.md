[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataErrorsResultInfo

# Class: KeywordsDataErrorsResultInfo

Defined in: main.ts:125852

## Implements

- [`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataErrorsResultInfo()

> **new KeywordsDataErrorsResultInfo**(`data`?): [`KeywordsDataErrorsResultInfo`](KeywordsDataErrorsResultInfo.md)

Defined in: main.ts:125883

#### Parameters

##### data?

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md)

#### Returns

[`KeywordsDataErrorsResultInfo`](KeywordsDataErrorsResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:125859

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`datetime`](../interfaces/IKeywordsDataErrorsResultInfo.md#datetime)

***

### error\_code?

> `optional` **error\_code**: `number`

Defined in: main.ts:125863

error code

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`error_code`](../interfaces/IKeywordsDataErrorsResultInfo.md#error_code)

***

### error\_message?

> `optional` **error\_message**: `string`

Defined in: main.ts:125866

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`error_message`](../interfaces/IKeywordsDataErrorsResultInfo.md#error_message)

***

### function?

> `optional` **function**: `string`

Defined in: main.ts:125861

corresponding API function

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`function`](../interfaces/IKeywordsDataErrorsResultInfo.md#function)

***

### http\_code?

> `optional` **http\_code**: `number`

Defined in: main.ts:125873

HTTP status code

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`http_code`](../interfaces/IKeywordsDataErrorsResultInfo.md#http_code)

***

### http\_method?

> `optional` **http\_method**: `string`

Defined in: main.ts:125871

HTTP method

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`http_method`](../interfaces/IKeywordsDataErrorsResultInfo.md#http_method)

***

### http\_response?

> `optional` **http\_response**: `string`

Defined in: main.ts:125879

HTTP response
server response

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`http_response`](../interfaces/IKeywordsDataErrorsResultInfo.md#http_response)

***

### http\_time?

> `optional` **http\_time**: `number`

Defined in: main.ts:125876

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`http_time`](../interfaces/IKeywordsDataErrorsResultInfo.md#http_time)

***

### http\_url?

> `optional` **http\_url**: `string`

Defined in: main.ts:125869

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`http_url`](../interfaces/IKeywordsDataErrorsResultInfo.md#http_url)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:125854

id of the task

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`id`](../interfaces/IKeywordsDataErrorsResultInfo.md#id)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:125892

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:125918

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataErrorsResultInfo`](KeywordsDataErrorsResultInfo.md)

Defined in: main.ts:125911

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataErrorsResultInfo`](KeywordsDataErrorsResultInfo.md)
