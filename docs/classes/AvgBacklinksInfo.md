[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AvgBacklinksInfo

# Class: AvgBacklinksInfo

## Implements

- [`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AvgBacklinksInfo()

> **new AvgBacklinksInfo**(`data`?): [`AvgBacklinksInfo`](AvgBacklinksInfo.md)

#### Parameters

• **data?**: [`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md)

#### Returns

[`AvgBacklinksInfo`](AvgBacklinksInfo.md)

#### Defined in

main.ts:83306

## Properties

### backlinks?

> `optional` **backlinks**: `number`

average number of backlinks

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`backlinks`](../interfaces/IAvgBacklinksInfo.md#backlinks)

#### Defined in

main.ts:83283

***

### dofollow?

> `optional` **dofollow**: `number`

average number of dofollow links

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`dofollow`](../interfaces/IAvgBacklinksInfo.md#dofollow)

#### Defined in

main.ts:83285

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

date and time when search intent data was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`last_updated_time`](../interfaces/IAvgBacklinksInfo.md#last_updated_time)

#### Defined in

main.ts:83302

***

### main\_domain\_rank?

> `optional` **main\_domain\_rank**: `number`

average main domain rank
learn more about the metric and its calculation formula in this help center article

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`main_domain_rank`](../interfaces/IAvgBacklinksInfo.md#main_domain_rank)

#### Defined in

main.ts:83297

***

### rank?

> `optional` **rank**: `number`

average rank
learn more about the metric and its calculation formula in this help center article

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`rank`](../interfaces/IAvgBacklinksInfo.md#rank)

#### Defined in

main.ts:83294

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

average number of referring domains

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`referring_domains`](../interfaces/IAvgBacklinksInfo.md#referring_domains)

#### Defined in

main.ts:83289

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

average number of referring main domains

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`referring_main_domains`](../interfaces/IAvgBacklinksInfo.md#referring_main_domains)

#### Defined in

main.ts:83291

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

average number of referring pages

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`referring_pages`](../interfaces/IAvgBacklinksInfo.md#referring_pages)

#### Defined in

main.ts:83287

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`se_type`](../interfaces/IAvgBacklinksInfo.md#se_type)

#### Defined in

main.ts:83281

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:83315

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:83340

***

### fromJS()

> `static` **fromJS**(`data`): [`AvgBacklinksInfo`](AvgBacklinksInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AvgBacklinksInfo`](AvgBacklinksInfo.md)

#### Defined in

main.ts:83333
