**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ResponseDataInfo

# Class: ResponseDataInfo

## Implements

- [`IResponseDataInfo`](../interfaces/IResponseDataInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ResponseDataInfo(data)

> **new ResponseDataInfo**(`data`?): [`ResponseDataInfo`](ResponseDataInfo.md)

#### Parameters

• **data?**: [`IResponseDataInfo`](../interfaces/IResponseDataInfo.md)

#### Returns

[`ResponseDataInfo`](ResponseDataInfo.md)

#### Source

main.ts:190984

## Properties

### author?

> **`optional`** **author**: `string`

author of the response

#### Implementation of

[`IResponseDataInfo`](../interfaces/IResponseDataInfo.md).[`author`](../interfaces/IResponseDataInfo.md#author)

#### Source

main.ts:190970

***

### text?

> **`optional`** **text**: `string`

content of the response

#### Implementation of

[`IResponseDataInfo`](../interfaces/IResponseDataInfo.md).[`text`](../interfaces/IResponseDataInfo.md#text)

#### Source

main.ts:190975

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the response was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IResponseDataInfo`](../interfaces/IResponseDataInfo.md).[`timestamp`](../interfaces/IResponseDataInfo.md#timestamp)

#### Source

main.ts:190980

***

### title?

> **`optional`** **title**: `string`

title of the response
in this case, will equal null

#### Implementation of

[`IResponseDataInfo`](../interfaces/IResponseDataInfo.md).[`title`](../interfaces/IResponseDataInfo.md#title)

#### Source

main.ts:190973

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:190993

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:191013

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ResponseDataInfo`](ResponseDataInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ResponseDataInfo`](ResponseDataInfo.md)

#### Source

main.ts:191006
