[**Documentation**](../README.md)

***

[Documentation](../README.md) / ResponseDataInfo

# Class: ResponseDataInfo

Defined in: main.ts:203924

## Implements

- [`IResponseDataInfo`](../interfaces/IResponseDataInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ResponseDataInfo()

> **new ResponseDataInfo**(`data`?): [`ResponseDataInfo`](ResponseDataInfo.md)

Defined in: main.ts:203940

#### Parameters

##### data?

[`IResponseDataInfo`](../interfaces/IResponseDataInfo.md)

#### Returns

[`ResponseDataInfo`](ResponseDataInfo.md)

## Properties

### author?

> `optional` **author**: `string`

Defined in: main.ts:203926

author of the response

#### Implementation of

[`IResponseDataInfo`](../interfaces/IResponseDataInfo.md).[`author`](../interfaces/IResponseDataInfo.md#author)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:203931

content of the response

#### Implementation of

[`IResponseDataInfo`](../interfaces/IResponseDataInfo.md).[`text`](../interfaces/IResponseDataInfo.md#text)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:203936

date and time when the response was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IResponseDataInfo`](../interfaces/IResponseDataInfo.md).[`timestamp`](../interfaces/IResponseDataInfo.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:203929

title of the response
in this case, will equal null

#### Implementation of

[`IResponseDataInfo`](../interfaces/IResponseDataInfo.md).[`title`](../interfaces/IResponseDataInfo.md#title)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:203949

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:203969

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ResponseDataInfo`](ResponseDataInfo.md)

Defined in: main.ts:203962

#### Parameters

##### data

`any`

#### Returns

[`ResponseDataInfo`](ResponseDataInfo.md)
