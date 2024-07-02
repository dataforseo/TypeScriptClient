**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataErrorsResultInfo

# Class: KeywordsDataErrorsResultInfo

## Implements

- [`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataErrorsResultInfo(data)

> **new KeywordsDataErrorsResultInfo**(`data`?): [`KeywordsDataErrorsResultInfo`](KeywordsDataErrorsResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md)

#### Returns

[`KeywordsDataErrorsResultInfo`](KeywordsDataErrorsResultInfo.md)

#### Source

main.ts:117629

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`datetime`](../interfaces/IKeywordsDataErrorsResultInfo.md#datetime)

#### Source

main.ts:117605

***

### error\_code?

> **`optional`** **error\_code**: `number`

error code

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`error_code`](../interfaces/IKeywordsDataErrorsResultInfo.md#error_code)

#### Source

main.ts:117609

***

### error\_message?

> **`optional`** **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`error_message`](../interfaces/IKeywordsDataErrorsResultInfo.md#error_message)

#### Source

main.ts:117612

***

### function?

> **`optional`** **function**: `string`

corresponding API function

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`function`](../interfaces/IKeywordsDataErrorsResultInfo.md#function)

#### Source

main.ts:117607

***

### http\_code?

> **`optional`** **http\_code**: `number`

HTTP status code

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`http_code`](../interfaces/IKeywordsDataErrorsResultInfo.md#http_code)

#### Source

main.ts:117619

***

### http\_method?

> **`optional`** **http\_method**: `string`

HTTP method

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`http_method`](../interfaces/IKeywordsDataErrorsResultInfo.md#http_method)

#### Source

main.ts:117617

***

### http\_response?

> **`optional`** **http\_response**: `string`

HTTP response
server response

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`http_response`](../interfaces/IKeywordsDataErrorsResultInfo.md#http_response)

#### Source

main.ts:117625

***

### http\_time?

> **`optional`** **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`http_time`](../interfaces/IKeywordsDataErrorsResultInfo.md#http_time)

#### Source

main.ts:117622

***

### http\_url?

> **`optional`** **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`http_url`](../interfaces/IKeywordsDataErrorsResultInfo.md#http_url)

#### Source

main.ts:117615

***

### id?

> **`optional`** **id**: `string`

id of the task

#### Implementation of

[`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md).[`id`](../interfaces/IKeywordsDataErrorsResultInfo.md#id)

#### Source

main.ts:117600

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:117638

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:117664

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataErrorsResultInfo`](KeywordsDataErrorsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataErrorsResultInfo`](KeywordsDataErrorsResultInfo.md)

#### Source

main.ts:117657
