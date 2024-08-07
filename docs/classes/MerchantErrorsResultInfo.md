**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantErrorsResultInfo

# Class: MerchantErrorsResultInfo

## Implements

- [`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantErrorsResultInfo(data)

> **new MerchantErrorsResultInfo**(`data`?): [`MerchantErrorsResultInfo`](MerchantErrorsResultInfo.md)

#### Parameters

• **data?**: [`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md)

#### Returns

[`MerchantErrorsResultInfo`](MerchantErrorsResultInfo.md)

#### Source

main.ts:175049

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`datetime`](../interfaces/IMerchantErrorsResultInfo.md#datetime)

#### Source

main.ts:175025

***

### error\_code?

> **`optional`** **error\_code**: `number`

error code

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`error_code`](../interfaces/IMerchantErrorsResultInfo.md#error_code)

#### Source

main.ts:175029

***

### error\_message?

> **`optional`** **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`error_message`](../interfaces/IMerchantErrorsResultInfo.md#error_message)

#### Source

main.ts:175032

***

### function?

> **`optional`** **function**: `string`

corresponding API function

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`function`](../interfaces/IMerchantErrorsResultInfo.md#function)

#### Source

main.ts:175027

***

### http\_code?

> **`optional`** **http\_code**: `number`

HTTP status code

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`http_code`](../interfaces/IMerchantErrorsResultInfo.md#http_code)

#### Source

main.ts:175039

***

### http\_method?

> **`optional`** **http\_method**: `string`

HTTP method

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`http_method`](../interfaces/IMerchantErrorsResultInfo.md#http_method)

#### Source

main.ts:175037

***

### http\_response?

> **`optional`** **http\_response**: `string`

HTTP response
server response

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`http_response`](../interfaces/IMerchantErrorsResultInfo.md#http_response)

#### Source

main.ts:175045

***

### http\_time?

> **`optional`** **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`http_time`](../interfaces/IMerchantErrorsResultInfo.md#http_time)

#### Source

main.ts:175042

***

### http\_url?

> **`optional`** **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`http_url`](../interfaces/IMerchantErrorsResultInfo.md#http_url)

#### Source

main.ts:175035

***

### id?

> **`optional`** **id**: `string`

id of the task

#### Implementation of

[`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md).[`id`](../interfaces/IMerchantErrorsResultInfo.md#id)

#### Source

main.ts:175020

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:175058

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:175084

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantErrorsResultInfo`](MerchantErrorsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantErrorsResultInfo`](MerchantErrorsResultInfo.md)

#### Source

main.ts:175077
