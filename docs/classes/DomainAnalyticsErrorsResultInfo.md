[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainAnalyticsErrorsResultInfo

# Class: DomainAnalyticsErrorsResultInfo

Defined in: main.ts:84836

## Implements

- [`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsErrorsResultInfo()

> **new DomainAnalyticsErrorsResultInfo**(`data`?): [`DomainAnalyticsErrorsResultInfo`](DomainAnalyticsErrorsResultInfo.md)

Defined in: main.ts:84867

#### Parameters

##### data?

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md)

#### Returns

[`DomainAnalyticsErrorsResultInfo`](DomainAnalyticsErrorsResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:84843

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`datetime`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#datetime)

***

### error\_code?

> `optional` **error\_code**: `number`

Defined in: main.ts:84847

error code

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`error_code`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#error_code)

***

### error\_message?

> `optional` **error\_message**: `string`

Defined in: main.ts:84850

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`error_message`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#error_message)

***

### function?

> `optional` **function**: `string`

Defined in: main.ts:84845

corresponding API function

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`function`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#function)

***

### http\_code?

> `optional` **http\_code**: `number`

Defined in: main.ts:84857

HTTP status code

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`http_code`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#http_code)

***

### http\_method?

> `optional` **http\_method**: `string`

Defined in: main.ts:84855

HTTP method

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`http_method`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#http_method)

***

### http\_response?

> `optional` **http\_response**: `string`

Defined in: main.ts:84863

HTTP response
server response

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`http_response`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#http_response)

***

### http\_time?

> `optional` **http\_time**: `number`

Defined in: main.ts:84860

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`http_time`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#http_time)

***

### http\_url?

> `optional` **http\_url**: `string`

Defined in: main.ts:84853

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`http_url`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#http_url)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:84838

id of the task

#### Implementation of

[`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[`id`](../interfaces/IDomainAnalyticsErrorsResultInfo.md#id)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:84876

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:84902

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsErrorsResultInfo`](DomainAnalyticsErrorsResultInfo.md)

Defined in: main.ts:84895

#### Parameters

##### data

`any`

#### Returns

[`DomainAnalyticsErrorsResultInfo`](DomainAnalyticsErrorsResultInfo.md)
