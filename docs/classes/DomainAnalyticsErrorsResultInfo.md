[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DomainAnalyticsErrorsResultInfo

# Class: DomainAnalyticsErrorsResultInfo

## Implements

- [`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsErrorsResultInfo()

> **new DomainAnalyticsErrorsResultInfo**(`data`?): [`DomainAnalyticsErrorsResultInfo`](DomainAnalyticsErrorsResultInfo.md)

#### Parameters

• **data?**: [`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md)

#### Returns

[`DomainAnalyticsErrorsResultInfo`](DomainAnalyticsErrorsResultInfo.md)

#### Defined in

main.ts:76422

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`datetime`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#datetime)

#### Defined in

main.ts:76398

***

### error\_code?

> `optional` **error\_code**: `number`

error code

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`error_code`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#error_code)

#### Defined in

main.ts:76402

***

### error\_message?

> `optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`error_message`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#error_message)

#### Defined in

main.ts:76405

***

### function?

> `optional` **function**: `string`

corresponding API function

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`function`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#function)

#### Defined in

main.ts:76400

***

### http\_code?

> `optional` **http\_code**: `number`

HTTP status code

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`http_code`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#http_code)

#### Defined in

main.ts:76412

***

### http\_method?

> `optional` **http\_method**: `string`

HTTP method

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`http_method`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#http_method)

#### Defined in

main.ts:76410

***

### http\_response?

> `optional` **http\_response**: `string`

HTTP response
server response

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`http_response`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#http_response)

#### Defined in

main.ts:76418

***

### http\_time?

> `optional` **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`http_time`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#http_time)

#### Defined in

main.ts:76415

***

### http\_url?

> `optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`http_url`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#http_url)

#### Defined in

main.ts:76408

***

### id?

> `optional` **id**: `string`

id of the task

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`id`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#id)

#### Defined in

main.ts:76393

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:76431

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:76457

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsErrorsResultInfo`](DomainAnalyticsErrorsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsErrorsResultInfo`](DomainAnalyticsErrorsResultInfo.md)

#### Defined in

main.ts:76450
