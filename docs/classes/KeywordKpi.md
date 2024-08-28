[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / KeywordKpi

# Class: KeywordKpi

## Implements

- [`IKeywordKpi`](../interfaces/IKeywordKpi.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordKpi()

> **new KeywordKpi**(`data`?): [`KeywordKpi`](KeywordKpi.md)

#### Parameters

• **data?**: [`IKeywordKpi`](../interfaces/IKeywordKpi.md)

#### Returns

[`KeywordKpi`](KeywordKpi.md)

#### Defined in

main.ts:136307

## Properties

### desktop?

> `optional` **desktop**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

keyword data aggregated for desktop devices
if there is no data, then the value is null

#### Implementation of

[`IKeywordKpi`](../interfaces/IKeywordKpi.md).[`desktop`](../interfaces/IKeywordKpi.md#desktop)

#### Defined in

main.ts:136297

***

### mobile?

> `optional` **mobile**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

keyword data aggregated for mobile devices
if there is no data, then the value is null

#### Implementation of

[`IKeywordKpi`](../interfaces/IKeywordKpi.md).[`mobile`](../interfaces/IKeywordKpi.md#mobile)

#### Defined in

main.ts:136300

***

### tablet?

> `optional` **tablet**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

keyword data aggregated for tablet devices
if there is no data, then the value is null

#### Implementation of

[`IKeywordKpi`](../interfaces/IKeywordKpi.md).[`tablet`](../interfaces/IKeywordKpi.md#tablet)

#### Defined in

main.ts:136303

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:136316

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:136347

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordKpi`](KeywordKpi.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordKpi`](KeywordKpi.md)

#### Defined in

main.ts:136340
