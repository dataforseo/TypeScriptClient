[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordKpi

# Class: KeywordKpi

Defined in: main.ts:145274

## Implements

- [`IKeywordKpi`](../interfaces/IKeywordKpi.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordKpi()

> **new KeywordKpi**(`data`?): [`KeywordKpi`](KeywordKpi.md)

Defined in: main.ts:145287

#### Parameters

##### data?

[`IKeywordKpi`](../interfaces/IKeywordKpi.md)

#### Returns

[`KeywordKpi`](KeywordKpi.md)

## Properties

### desktop?

> `optional` **desktop**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

Defined in: main.ts:145277

keyword data aggregated for desktop devices
if there is no data, then the value is null

#### Implementation of

[`IKeywordKpi`](../interfaces/IKeywordKpi.md).[`desktop`](../interfaces/IKeywordKpi.md#desktop)

***

### mobile?

> `optional` **mobile**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

Defined in: main.ts:145280

keyword data aggregated for mobile devices
if there is no data, then the value is null

#### Implementation of

[`IKeywordKpi`](../interfaces/IKeywordKpi.md).[`mobile`](../interfaces/IKeywordKpi.md#mobile)

***

### tablet?

> `optional` **tablet**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

Defined in: main.ts:145283

keyword data aggregated for tablet devices
if there is no data, then the value is null

#### Implementation of

[`IKeywordKpi`](../interfaces/IKeywordKpi.md).[`tablet`](../interfaces/IKeywordKpi.md#tablet)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:145296

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:145327

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordKpi`](KeywordKpi.md)

Defined in: main.ts:145320

#### Parameters

##### data

`any`

#### Returns

[`KeywordKpi`](KeywordKpi.md)
