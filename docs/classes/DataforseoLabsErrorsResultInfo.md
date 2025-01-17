[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsErrorsResultInfo

# Class: DataforseoLabsErrorsResultInfo

Defined in: main.ts:90612

## Implements

- [`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsErrorsResultInfo()

> **new DataforseoLabsErrorsResultInfo**(`data`?): [`DataforseoLabsErrorsResultInfo`](DataforseoLabsErrorsResultInfo.md)

Defined in: main.ts:90642

#### Parameters

##### data?

[`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md)

#### Returns

[`DataforseoLabsErrorsResultInfo`](DataforseoLabsErrorsResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:90619

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md).[`datetime`](../interfaces/IDataforseoLabsErrorsResultInfo.md#datetime)

***

### error\_code?

> `optional` **error\_code**: `number`

Defined in: main.ts:90623

error code

#### Implementation of

[`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md).[`error_code`](../interfaces/IDataforseoLabsErrorsResultInfo.md#error_code)

***

### error\_message?

> `optional` **error\_message**: `string`

Defined in: main.ts:90626

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md).[`error_message`](../interfaces/IDataforseoLabsErrorsResultInfo.md#error_message)

***

### function?

> `optional` **function**: `string`

Defined in: main.ts:90621

corresponding API function

#### Implementation of

[`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md).[`function`](../interfaces/IDataforseoLabsErrorsResultInfo.md#function)

***

### http\_code?

> `optional` **http\_code**: `number`

Defined in: main.ts:90633

HTTP status code

#### Implementation of

[`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md).[`http_code`](../interfaces/IDataforseoLabsErrorsResultInfo.md#http_code)

***

### http\_method?

> `optional` **http\_method**: `string`

Defined in: main.ts:90631

HTTP method

#### Implementation of

[`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md).[`http_method`](../interfaces/IDataforseoLabsErrorsResultInfo.md#http_method)

***

### http\_response?

> `optional` **http\_response**: `string`

Defined in: main.ts:90638

HTTP response
server response

#### Implementation of

[`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md).[`http_response`](../interfaces/IDataforseoLabsErrorsResultInfo.md#http_response)

***

### http\_time?

> `optional` **http\_time**: `number`

Defined in: main.ts:90635

time taken by HTTP request

#### Implementation of

[`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md).[`http_time`](../interfaces/IDataforseoLabsErrorsResultInfo.md#http_time)

***

### http\_url?

> `optional` **http\_url**: `string`

Defined in: main.ts:90629

URL that caused an error
URL you used for making an API call

#### Implementation of

[`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md).[`http_url`](../interfaces/IDataforseoLabsErrorsResultInfo.md#http_url)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:90614

id of the task

#### Implementation of

[`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md).[`id`](../interfaces/IDataforseoLabsErrorsResultInfo.md#id)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:90651

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:90677

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsErrorsResultInfo`](DataforseoLabsErrorsResultInfo.md)

Defined in: main.ts:90670

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsErrorsResultInfo`](DataforseoLabsErrorsResultInfo.md)
