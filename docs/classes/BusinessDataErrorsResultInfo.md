**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataErrorsResultInfo

# Class: BusinessDataErrorsResultInfo

## Implements

- [`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataErrorsResultInfo(data)

> **new BusinessDataErrorsResultInfo**(`data`?): [`BusinessDataErrorsResultInfo`](BusinessDataErrorsResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md)

#### Returns

[`BusinessDataErrorsResultInfo`](BusinessDataErrorsResultInfo.md)

#### Source

main.ts:200206

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`datetime`](../interfaces/IBusinessDataErrorsResultInfo.md#datetime)

#### Source

main.ts:200182

***

### error\_code?

> **`optional`** **error\_code**: `number`

error code

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`error_code`](../interfaces/IBusinessDataErrorsResultInfo.md#error_code)

#### Source

main.ts:200186

***

### error\_message?

> **`optional`** **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`error_message`](../interfaces/IBusinessDataErrorsResultInfo.md#error_message)

#### Source

main.ts:200189

***

### function?

> **`optional`** **function**: `string`

corresponding API function

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`function`](../interfaces/IBusinessDataErrorsResultInfo.md#function)

#### Source

main.ts:200184

***

### http\_code?

> **`optional`** **http\_code**: `number`

HTTP status code

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`http_code`](../interfaces/IBusinessDataErrorsResultInfo.md#http_code)

#### Source

main.ts:200196

***

### http\_method?

> **`optional`** **http\_method**: `string`

HTTP method

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`http_method`](../interfaces/IBusinessDataErrorsResultInfo.md#http_method)

#### Source

main.ts:200194

***

### http\_response?

> **`optional`** **http\_response**: `string`

HTTP response
server response

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`http_response`](../interfaces/IBusinessDataErrorsResultInfo.md#http_response)

#### Source

main.ts:200202

***

### http\_time?

> **`optional`** **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`http_time`](../interfaces/IBusinessDataErrorsResultInfo.md#http_time)

#### Source

main.ts:200199

***

### http\_url?

> **`optional`** **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`http_url`](../interfaces/IBusinessDataErrorsResultInfo.md#http_url)

#### Source

main.ts:200192

***

### id?

> **`optional`** **id**: `string`

id of the task

#### Implementation of

[`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md).[`id`](../interfaces/IBusinessDataErrorsResultInfo.md#id)

#### Source

main.ts:200177

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:200215

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:200241

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataErrorsResultInfo`](BusinessDataErrorsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataErrorsResultInfo`](BusinessDataErrorsResultInfo.md)

#### Source

main.ts:200234
