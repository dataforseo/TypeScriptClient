**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsErrorsResultInfo

# Class: DataforseoLabsErrorsResultInfo

## Implements

- [`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsErrorsResultInfo(data)

> **new DataforseoLabsErrorsResultInfo**(`data`?): [`DataforseoLabsErrorsResultInfo`](DataforseoLabsErrorsResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md)

#### Returns

[`DataforseoLabsErrorsResultInfo`](DataforseoLabsErrorsResultInfo.md)

#### Source

main.ts:80666

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md).[`datetime`](../interfaces/IDataforseoLabsErrorsResultInfo.md#datetime)

#### Source

main.ts:80643

***

### error\_code?

> **`optional`** **error\_code**: `number`

error code

#### Implementation of

[`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md).[`error_code`](../interfaces/IDataforseoLabsErrorsResultInfo.md#error_code)

#### Source

main.ts:80647

***

### error\_message?

> **`optional`** **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md).[`error_message`](../interfaces/IDataforseoLabsErrorsResultInfo.md#error_message)

#### Source

main.ts:80650

***

### function?

> **`optional`** **function**: `string`

corresponding API function

#### Implementation of

[`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md).[`function`](../interfaces/IDataforseoLabsErrorsResultInfo.md#function)

#### Source

main.ts:80645

***

### http\_code?

> **`optional`** **http\_code**: `number`

HTTP status code

#### Implementation of

[`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md).[`http_code`](../interfaces/IDataforseoLabsErrorsResultInfo.md#http_code)

#### Source

main.ts:80657

***

### http\_method?

> **`optional`** **http\_method**: `string`

HTTP method

#### Implementation of

[`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md).[`http_method`](../interfaces/IDataforseoLabsErrorsResultInfo.md#http_method)

#### Source

main.ts:80655

***

### http\_response?

> **`optional`** **http\_response**: `string`

HTTP response
server response

#### Implementation of

[`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md).[`http_response`](../interfaces/IDataforseoLabsErrorsResultInfo.md#http_response)

#### Source

main.ts:80662

***

### http\_time?

> **`optional`** **http\_time**: `number`

time taken by HTTP request

#### Implementation of

[`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md).[`http_time`](../interfaces/IDataforseoLabsErrorsResultInfo.md#http_time)

#### Source

main.ts:80659

***

### http\_url?

> **`optional`** **http\_url**: `string`

URL that caused an error
URL you used for making an API call

#### Implementation of

[`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md).[`http_url`](../interfaces/IDataforseoLabsErrorsResultInfo.md#http_url)

#### Source

main.ts:80653

***

### id?

> **`optional`** **id**: `string`

id of the task

#### Implementation of

[`IDataforseoLabsErrorsResultInfo`](../interfaces/IDataforseoLabsErrorsResultInfo.md).[`id`](../interfaces/IDataforseoLabsErrorsResultInfo.md#id)

#### Source

main.ts:80638

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:80675

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:80701

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsErrorsResultInfo`](DataforseoLabsErrorsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsErrorsResultInfo`](DataforseoLabsErrorsResultInfo.md)

#### Source

main.ts:80694
