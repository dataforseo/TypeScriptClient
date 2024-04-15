**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksInfo

# Class: BacklinksInfo

## Implements

- [`IBacklinksInfo`](../interfaces/IBacklinksInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksInfo(data)

> **new BacklinksInfo**(`data`?): [`BacklinksInfo`](BacklinksInfo.md)

#### Parameters

• **data?**: [`IBacklinksInfo`](../interfaces/IBacklinksInfo.md)

#### Returns

[`BacklinksInfo`](BacklinksInfo.md)

#### Source

main.ts:78401

## Properties

### backlinks?

> **`optional`** **backlinks**: `number`

total number of backlinks
the total number of backlinks, including dofollow and nofollow links

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`backlinks`](../interfaces/IBacklinksInfo.md#backlinks)

#### Source

main.ts:78392

***

### dofollow?

> **`optional`** **dofollow**: `number`

number of dofollow links

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`dofollow`](../interfaces/IBacklinksInfo.md#dofollow)

#### Source

main.ts:78389

***

### referring\_domains?

> **`optional`** **referring\_domains**: `number`

number of referring domains

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`referring_domains`](../interfaces/IBacklinksInfo.md#referring_domains)

#### Source

main.ts:78383

***

### referring\_main\_domains?

> **`optional`** **referring\_main\_domains**: `number`

number of referring main domains

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`referring_main_domains`](../interfaces/IBacklinksInfo.md#referring_main_domains)

#### Source

main.ts:78385

***

### referring\_pages?

> **`optional`** **referring\_pages**: `number`

number of referring pages

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`referring_pages`](../interfaces/IBacklinksInfo.md#referring_pages)

#### Source

main.ts:78387

***

### time\_update?

> **`optional`** **time\_update**: `string`

date and time when backlink data was updated
in the UTC format: "yyyy-mm-dd hh-mm-ss +00:00"
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`time_update`](../interfaces/IBacklinksInfo.md#time_update)

#### Source

main.ts:78397

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:78410

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:78432

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksInfo`](BacklinksInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksInfo`](BacklinksInfo.md)

#### Source

main.ts:78425
