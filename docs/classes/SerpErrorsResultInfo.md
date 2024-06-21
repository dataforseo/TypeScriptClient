**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpErrorsResultInfo

# Class: SerpErrorsResultInfo

## Implements

- [`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpErrorsResultInfo(data)

> **new SerpErrorsResultInfo**(`data`?): [`SerpErrorsResultInfo`](SerpErrorsResultInfo.md)

#### Parameters

• **data?**: [`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md)

#### Returns

[`SerpErrorsResultInfo`](SerpErrorsResultInfo.md)

#### Source

main.ts:23943

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`datetime`](../interfaces/ISerpErrorsResultInfo.md#datetime)

#### Source

main.ts:23919

***

### error\_code?

> **`optional`** **error\_code**: `number`

error code

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`error_code`](../interfaces/ISerpErrorsResultInfo.md#error_code)

#### Source

main.ts:23923

***

### error\_message?

> **`optional`** **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`error_message`](../interfaces/ISerpErrorsResultInfo.md#error_message)

#### Source

main.ts:23926

***

### function?

> **`optional`** **function**: `string`

corresponding API function

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`function`](../interfaces/ISerpErrorsResultInfo.md#function)

#### Source

main.ts:23921

***

### http\_code?

> **`optional`** **http\_code**: `number`

HTTP status code

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`http_code`](../interfaces/ISerpErrorsResultInfo.md#http_code)

#### Source

main.ts:23933

***

### http\_method?

> **`optional`** **http\_method**: `string`

HTTP method

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`http_method`](../interfaces/ISerpErrorsResultInfo.md#http_method)

#### Source

main.ts:23931

***

### http\_response?

> **`optional`** **http\_response**: `string`

HTTP response
server response

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`http_response`](../interfaces/ISerpErrorsResultInfo.md#http_response)

#### Source

main.ts:23939

***

### http\_time?

> **`optional`** **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`http_time`](../interfaces/ISerpErrorsResultInfo.md#http_time)

#### Source

main.ts:23936

***

### http\_url?

> **`optional`** **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`http_url`](../interfaces/ISerpErrorsResultInfo.md#http_url)

#### Source

main.ts:23929

***

### id?

> **`optional`** **id**: `string`

id of the task

#### Implementation of

[`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md).[`id`](../interfaces/ISerpErrorsResultInfo.md#id)

#### Source

main.ts:23914

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:23952

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:23978

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpErrorsResultInfo`](SerpErrorsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpErrorsResultInfo`](SerpErrorsResultInfo.md)

#### Source

main.ts:23971
