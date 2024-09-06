[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / LastModified

# Class: LastModified

## Implements

- [`ILastModified`](../interfaces/ILastModified.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new LastModified()

> **new LastModified**(`data`?): [`LastModified`](LastModified.md)

#### Parameters

• **data?**: [`ILastModified`](../interfaces/ILastModified.md)

#### Returns

[`LastModified`](LastModified.md)

#### Defined in

main.ts:155105

## Properties

### header?

> `optional` **header**: `string`

date and time when the header was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null

#### Implementation of

[`ILastModified`](../interfaces/ILastModified.md).[`header`](../interfaces/ILastModified.md#header)

#### Defined in

main.ts:155089

***

### meta\_tag?

> `optional` **meta\_tag**: `string`

date and time when the meta tag was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null

#### Implementation of

[`ILastModified`](../interfaces/ILastModified.md).[`meta_tag`](../interfaces/ILastModified.md#meta_tag)

#### Defined in

main.ts:155101

***

### sitemap?

> `optional` **sitemap**: `string`

date and time when the sitemap was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null

#### Implementation of

[`ILastModified`](../interfaces/ILastModified.md).[`sitemap`](../interfaces/ILastModified.md#sitemap)

#### Defined in

main.ts:155095

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:155114

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:155133

***

### fromJS()

> `static` **fromJS**(`data`): [`LastModified`](LastModified.md)

#### Parameters

• **data**: `any`

#### Returns

[`LastModified`](LastModified.md)

#### Defined in

main.ts:155126
