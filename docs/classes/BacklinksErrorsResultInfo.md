**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksErrorsResultInfo

# Class: BacklinksErrorsResultInfo

## Implements

- [`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksErrorsResultInfo(data)

> **new BacklinksErrorsResultInfo**(`data`?): [`BacklinksErrorsResultInfo`](BacklinksErrorsResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md)

#### Returns

[`BacklinksErrorsResultInfo`](BacklinksErrorsResultInfo.md)

#### Source

main.ts:135061

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`datetime`](../interfaces/IBacklinksErrorsResultInfo.md#datetime)

#### Source

main.ts:135038

***

### error\_code?

> **`optional`** **error\_code**: `number`

error code

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`error_code`](../interfaces/IBacklinksErrorsResultInfo.md#error_code)

#### Source

main.ts:135042

***

### error\_message?

> **`optional`** **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`error_message`](../interfaces/IBacklinksErrorsResultInfo.md#error_message)

#### Source

main.ts:135045

***

### function?

> **`optional`** **function**: `string`

corresponding API function

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`function`](../interfaces/IBacklinksErrorsResultInfo.md#function)

#### Source

main.ts:135040

***

### http\_code?

> **`optional`** **http\_code**: `number`

HTTP status code

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`http_code`](../interfaces/IBacklinksErrorsResultInfo.md#http_code)

#### Source

main.ts:135052

***

### http\_method?

> **`optional`** **http\_method**: `string`

HTTP method

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`http_method`](../interfaces/IBacklinksErrorsResultInfo.md#http_method)

#### Source

main.ts:135050

***

### http\_response?

> **`optional`** **http\_response**: `string`

HTTP response
server response

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`http_response`](../interfaces/IBacklinksErrorsResultInfo.md#http_response)

#### Source

main.ts:135057

***

### http\_time?

> **`optional`** **http\_time**: `number`

time taken by HTTP request

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`http_time`](../interfaces/IBacklinksErrorsResultInfo.md#http_time)

#### Source

main.ts:135054

***

### http\_url?

> **`optional`** **http\_url**: `string`

URL that caused an error
URL you used for making an API call

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`http_url`](../interfaces/IBacklinksErrorsResultInfo.md#http_url)

#### Source

main.ts:135048

***

### id?

> **`optional`** **id**: `string`

id of the task

#### Implementation of

[`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md).[`id`](../interfaces/IBacklinksErrorsResultInfo.md#id)

#### Source

main.ts:135033

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:135070

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:135096

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksErrorsResultInfo`](BacklinksErrorsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksErrorsResultInfo`](BacklinksErrorsResultInfo.md)

#### Source

main.ts:135089
