**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AvgBacklinksInfo

# Class: AvgBacklinksInfo

## Implements

- [`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AvgBacklinksInfo(data)

> **new AvgBacklinksInfo**(`data`?): [`AvgBacklinksInfo`](AvgBacklinksInfo.md)

#### Parameters

• **data?**: [`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md)

#### Returns

[`AvgBacklinksInfo`](AvgBacklinksInfo.md)

#### Source

main.ts:82926

## Properties

### backlinks?

> **`optional`** **backlinks**: `number`

average number of backlinks

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`backlinks`](../interfaces/IAvgBacklinksInfo.md#backlinks)

#### Source

main.ts:82903

***

### dofollow?

> **`optional`** **dofollow**: `number`

average number of dofollow links

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`dofollow`](../interfaces/IAvgBacklinksInfo.md#dofollow)

#### Source

main.ts:82905

***

### last\_updated\_time?

> **`optional`** **last\_updated\_time**: `string`

date and time when backlink data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`last_updated_time`](../interfaces/IAvgBacklinksInfo.md#last_updated_time)

#### Source

main.ts:82922

***

### main\_domain\_rank?

> **`optional`** **main\_domain\_rank**: `number`

average main domain rank
learn more about the metric and its calculation formula in this help center article

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`main_domain_rank`](../interfaces/IAvgBacklinksInfo.md#main_domain_rank)

#### Source

main.ts:82917

***

### rank?

> **`optional`** **rank**: `number`

average rank
learn more about the metric and its calculation formula in this help center article

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`rank`](../interfaces/IAvgBacklinksInfo.md#rank)

#### Source

main.ts:82914

***

### referring\_domains?

> **`optional`** **referring\_domains**: `number`

average number of referring domains

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`referring_domains`](../interfaces/IAvgBacklinksInfo.md#referring_domains)

#### Source

main.ts:82909

***

### referring\_main\_domains?

> **`optional`** **referring\_main\_domains**: `number`

average number of referring main domains

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`referring_main_domains`](../interfaces/IAvgBacklinksInfo.md#referring_main_domains)

#### Source

main.ts:82911

***

### referring\_pages?

> **`optional`** **referring\_pages**: `number`

average number of referring pages

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`referring_pages`](../interfaces/IAvgBacklinksInfo.md#referring_pages)

#### Source

main.ts:82907

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`se_type`](../interfaces/IAvgBacklinksInfo.md#se_type)

#### Source

main.ts:82901

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:82935

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:82960

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AvgBacklinksInfo`](AvgBacklinksInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AvgBacklinksInfo`](AvgBacklinksInfo.md)

#### Source

main.ts:82953
