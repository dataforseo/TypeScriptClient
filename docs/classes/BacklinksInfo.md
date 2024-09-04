[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksInfo

# Class: BacklinksInfo

## Implements

- [`IBacklinksInfo`](../interfaces/IBacklinksInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksInfo()

> **new BacklinksInfo**(`data`?): [`BacklinksInfo`](BacklinksInfo.md)

#### Parameters

• **data?**: [`IBacklinksInfo`](../interfaces/IBacklinksInfo.md)

#### Returns

[`BacklinksInfo`](BacklinksInfo.md)

#### Defined in

main.ts:79759

## Properties

### backlinks?

> `optional` **backlinks**: `number`

total number of backlinks
the total number of backlinks, including dofollow and nofollow links

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`backlinks`](../interfaces/IBacklinksInfo.md#backlinks)

#### Defined in

main.ts:79750

***

### dofollow?

> `optional` **dofollow**: `number`

number of dofollow links

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`dofollow`](../interfaces/IBacklinksInfo.md#dofollow)

#### Defined in

main.ts:79747

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

number of referring domains

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`referring_domains`](../interfaces/IBacklinksInfo.md#referring_domains)

#### Defined in

main.ts:79741

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

number of referring main domains

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`referring_main_domains`](../interfaces/IBacklinksInfo.md#referring_main_domains)

#### Defined in

main.ts:79743

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

number of referring pages

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`referring_pages`](../interfaces/IBacklinksInfo.md#referring_pages)

#### Defined in

main.ts:79745

***

### time\_update?

> `optional` **time\_update**: `string`

date and time when backlink data was updated
in the UTC format: "yyyy-mm-dd hh-mm-ss +00:00"
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`time_update`](../interfaces/IBacklinksInfo.md#time_update)

#### Defined in

main.ts:79755

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:79768

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:79790

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksInfo`](BacklinksInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksInfo`](BacklinksInfo.md)

#### Defined in

main.ts:79783
