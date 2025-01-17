[**Documentation**](../README.md)

***

[Documentation](../README.md) / LastModified

# Class: LastModified

Defined in: main.ts:166778

## Implements

- [`ILastModified`](../interfaces/ILastModified.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new LastModified()

> **new LastModified**(`data`?): [`LastModified`](LastModified.md)

Defined in: main.ts:166800

#### Parameters

##### data?

[`ILastModified`](../interfaces/ILastModified.md)

#### Returns

[`LastModified`](LastModified.md)

## Properties

### header?

> `optional` **header**: `string`

Defined in: main.ts:166784

date and time when the header was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null

#### Implementation of

[`ILastModified`](../interfaces/ILastModified.md).[`header`](../interfaces/ILastModified.md#header)

***

### meta\_tag?

> `optional` **meta\_tag**: `string`

Defined in: main.ts:166796

date and time when the meta tag was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null

#### Implementation of

[`ILastModified`](../interfaces/ILastModified.md).[`meta_tag`](../interfaces/ILastModified.md#meta_tag)

***

### sitemap?

> `optional` **sitemap**: `string`

Defined in: main.ts:166790

date and time when the sitemap was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null

#### Implementation of

[`ILastModified`](../interfaces/ILastModified.md).[`sitemap`](../interfaces/ILastModified.md#sitemap)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:166809

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:166828

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`LastModified`](LastModified.md)

Defined in: main.ts:166821

#### Parameters

##### data

`any`

#### Returns

[`LastModified`](LastModified.md)
