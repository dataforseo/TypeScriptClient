**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / LastModified

# Class: LastModified

## Implements

- [`ILastModified`](../interfaces/ILastModified.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new LastModified(data)

> **new LastModified**(`data`?): [`LastModified`](LastModified.md)

#### Parameters

• **data?**: [`ILastModified`](../interfaces/ILastModified.md)

#### Returns

[`LastModified`](LastModified.md)

#### Source

main.ts:152393

## Properties

### header?

> **`optional`** **header**: `string`

date and time when the header was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null

#### Implementation of

[`ILastModified`](../interfaces/ILastModified.md).[`header`](../interfaces/ILastModified.md#header)

#### Source

main.ts:152377

***

### meta\_tag?

> **`optional`** **meta\_tag**: `string`

date and time when the meta tag was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null

#### Implementation of

[`ILastModified`](../interfaces/ILastModified.md).[`meta_tag`](../interfaces/ILastModified.md#meta_tag)

#### Source

main.ts:152389

***

### sitemap?

> **`optional`** **sitemap**: `string`

date and time when the sitemap was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null

#### Implementation of

[`ILastModified`](../interfaces/ILastModified.md).[`sitemap`](../interfaces/ILastModified.md#sitemap)

#### Source

main.ts:152383

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:152402

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:152421

***

### fromJS()

> **`static`** **fromJS**(`data`): [`LastModified`](LastModified.md)

#### Parameters

• **data**: `any`

#### Returns

[`LastModified`](LastModified.md)

#### Source

main.ts:152414
