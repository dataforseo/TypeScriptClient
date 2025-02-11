[**Documentation**](../README.md)

***

[Documentation](../README.md) / AvgBacklinksInfo

# Class: AvgBacklinksInfo

Defined in: main.ts:93138

## Implements

- [`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AvgBacklinksInfo()

> **new AvgBacklinksInfo**(`data`?): [`AvgBacklinksInfo`](AvgBacklinksInfo.md)

Defined in: main.ts:93165

#### Parameters

##### data?

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md)

#### Returns

[`AvgBacklinksInfo`](AvgBacklinksInfo.md)

## Properties

### backlinks?

> `optional` **backlinks**: `number`

Defined in: main.ts:93142

average number of backlinks

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`backlinks`](../interfaces/IAvgBacklinksInfo.md#backlinks)

***

### dofollow?

> `optional` **dofollow**: `number`

Defined in: main.ts:93144

average number of dofollow links

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`dofollow`](../interfaces/IAvgBacklinksInfo.md#dofollow)

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

Defined in: main.ts:93161

date and time when search intent data was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`last_updated_time`](../interfaces/IAvgBacklinksInfo.md#last_updated_time)

***

### main\_domain\_rank?

> `optional` **main\_domain\_rank**: `number`

Defined in: main.ts:93156

average main domain rank
learn more about the metric and its calculation formula in this help center article

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`main_domain_rank`](../interfaces/IAvgBacklinksInfo.md#main_domain_rank)

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:93153

average rank
learn more about the metric and its calculation formula in this help center article

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`rank`](../interfaces/IAvgBacklinksInfo.md#rank)

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

Defined in: main.ts:93148

average number of referring domains

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`referring_domains`](../interfaces/IAvgBacklinksInfo.md#referring_domains)

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

Defined in: main.ts:93150

average number of referring main domains

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`referring_main_domains`](../interfaces/IAvgBacklinksInfo.md#referring_main_domains)

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

Defined in: main.ts:93146

average number of referring pages

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`referring_pages`](../interfaces/IAvgBacklinksInfo.md#referring_pages)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:93140

search engine type

#### Implementation of

[`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md).[`se_type`](../interfaces/IAvgBacklinksInfo.md#se_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:93174

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:93199

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AvgBacklinksInfo`](AvgBacklinksInfo.md)

Defined in: main.ts:93192

#### Parameters

##### data

`any`

#### Returns

[`AvgBacklinksInfo`](AvgBacklinksInfo.md)
