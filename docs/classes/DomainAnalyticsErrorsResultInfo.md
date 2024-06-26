**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DomainAnalyticsErrorsResultInfo

# Class: DomainAnalyticsErrorsResultInfo

## Implements

- [`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsErrorsResultInfo(data)

> **new DomainAnalyticsErrorsResultInfo**(`data`?): [`DomainAnalyticsErrorsResultInfo`](DomainAnalyticsErrorsResultInfo.md)

#### Parameters

• **data?**: [`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md)

#### Returns

[`DomainAnalyticsErrorsResultInfo`](DomainAnalyticsErrorsResultInfo.md)

#### Source

main.ts:75303

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`datetime`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#datetime)

#### Source

main.ts:75279

***

### error\_code?

> **`optional`** **error\_code**: `number`

error code

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`error_code`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#error_code)

#### Source

main.ts:75283

***

### error\_message?

> **`optional`** **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`error_message`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#error_message)

#### Source

main.ts:75286

***

### function?

> **`optional`** **function**: `string`

corresponding API function

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`function`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#function)

#### Source

main.ts:75281

***

### http\_code?

> **`optional`** **http\_code**: `number`

HTTP status code

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`http_code`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#http_code)

#### Source

main.ts:75293

***

### http\_method?

> **`optional`** **http\_method**: `string`

HTTP method

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`http_method`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#http_method)

#### Source

main.ts:75291

***

### http\_response?

> **`optional`** **http\_response**: `string`

HTTP response
server response

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`http_response`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#http_response)

#### Source

main.ts:75299

***

### http\_time?

> **`optional`** **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`http_time`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#http_time)

#### Source

main.ts:75296

***

### http\_url?

> **`optional`** **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`http_url`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#http_url)

#### Source

main.ts:75289

***

### id?

> **`optional`** **id**: `string`

id of the task

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`id`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#id)

#### Source

main.ts:75274

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:75312

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:75338

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DomainAnalyticsErrorsResultInfo`](DomainAnalyticsErrorsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsErrorsResultInfo`](DomainAnalyticsErrorsResultInfo.md)

#### Source

main.ts:75331
