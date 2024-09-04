[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ResponseDataInfo

# Class: ResponseDataInfo

## Implements

- [`IResponseDataInfo`](../interfaces/IResponseDataInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ResponseDataInfo()

> **new ResponseDataInfo**(`data`?): [`ResponseDataInfo`](ResponseDataInfo.md)

#### Parameters

• **data?**: [`IResponseDataInfo`](../interfaces/IResponseDataInfo.md)

#### Returns

[`ResponseDataInfo`](ResponseDataInfo.md)

#### Defined in

main.ts:191001

## Properties

### author?

> `optional` **author**: `string`

author of the response

#### Implementation of

[`IResponseDataInfo`](../interfaces/IResponseDataInfo.md).[`author`](../interfaces/IResponseDataInfo.md#author)

#### Defined in

main.ts:190987

***

### text?

> `optional` **text**: `string`

content of the response

#### Implementation of

[`IResponseDataInfo`](../interfaces/IResponseDataInfo.md).[`text`](../interfaces/IResponseDataInfo.md#text)

#### Defined in

main.ts:190992

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the response was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IResponseDataInfo`](../interfaces/IResponseDataInfo.md).[`timestamp`](../interfaces/IResponseDataInfo.md#timestamp)

#### Defined in

main.ts:190997

***

### title?

> `optional` **title**: `string`

title of the response
in this case, will equal null

#### Implementation of

[`IResponseDataInfo`](../interfaces/IResponseDataInfo.md).[`title`](../interfaces/IResponseDataInfo.md#title)

#### Defined in

main.ts:190990

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:191010

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:191030

***

### fromJS()

> `static` **fromJS**(`data`): [`ResponseDataInfo`](ResponseDataInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ResponseDataInfo`](ResponseDataInfo.md)

#### Defined in

main.ts:191023
